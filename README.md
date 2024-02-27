# D9 Indexer

## Summary

- [Quickstart](#quickly-running-the-sample)
- [Public archives for Parachains](#public-archives-for-parachains)
- [Self-hosted archive](#self-hosted-archive)
- [Development flow](#dev-flow)
  - [Database Schema](#1-define-database-schema)
  - [Entity classes](#2-generate-typeorm-classes)
  - [DB migrations](#3-generate-database-migration)
  - [Typegen for Events, Extrinsics and Storage Calls](#4-generate-typescript-definitions-for-substrate-events-calls-and-storage)
- [Deploy the Squid](#deploy-the-squid)
- [Conventions](#project-conventions)
- [Type Bundles](#types-bundle)

## Prerequisites

* node 16.x
* docker
* npm or pnpm -- note that `yarn` package manager is not supported

## Development

Example commands below use [sqd](https://docs.subsquid.io/squid-cli/).
Please [install](https://docs.subsquid.io/squid-cli/installation/) it before proceeding.
`npm install -g @subsquid/cli`

```bash
# 1. Install dependencies
npm ci

# 2. Start target Postgres database and detach
sqd up

# 3. Build the project
sqd build

# 4. Start both the squid processor and the GraphQL server
sqd run .
```
A GraphiQL playground will be available at [localhost:4350/graphql](http://localhost:4350/graphql).

## Production

Log in and view the deployment [tutorial](https://app.subsquid.io/squids/deploy)

```bash
# 1. Configure the CLI
sqd auth -k $SUBSQUID_AUTH

# 2. Deploy
sqd deploy --org d9-network ./
```
