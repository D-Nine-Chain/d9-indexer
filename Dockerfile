FROM node:lts-alpine3.19 AS node
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable && corepack prepare pnpm@latest --activate

FROM node AS node-with-gyp
RUN apk add g++ make python3

FROM node-with-gyp AS builder
WORKDIR /squid
ADD package.json .
ADD pnpm-lock.yaml .
ADD assets assets
ADD db db
ADD schema.graphql .

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
ADD tsconfig.json .
ADD src src
RUN pnpm build

FROM node-with-gyp AS deps
WORKDIR /squid
ADD package.json .
ADD pnpm-lock.yaml .
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

FROM node AS squid
WORKDIR /squid
COPY --from=deps /squid/package.json .
COPY --from=deps /squid/pnpm-lock.yaml .
COPY --from=deps /squid/node_modules node_modules
COPY --from=builder /squid/lib lib
COPY --from=builder /squid/assets assets
COPY --from=builder /squid/db db
COPY --from=builder /squid/schema.graphql schema.graphql

ADD commands.json .
RUN echo -e "loglevel=silent\\nupdate-notifier=false" > /squid/.npmrc
RUN npm i -g @subsquid/commands && mv $(which squid-commands) /usr/local/bin/sqd
ENV PROCESSOR_PROMETHEUS_PORT 3000
