# Indexer

```bash
# install node、pnpm、pm2、@subsquid/cli、@dotenvx/dotenvx

# cd to project root

pnpm install

pnpm build

# create .env.local for database env etc.
touch .env.local
vim .env.local

# migration db if needed
dotenvx run -f .env.local -- sqd migration:apply


```
