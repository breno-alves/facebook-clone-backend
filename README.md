# Facebook clone API

Facebook clone API

## Requirements

- Node v16
- NPM
- Docker
- Docker-compose

## Version

    Node.js v16.14.2

## Install dependecies

    npm i

## Run Api in development

    npm run dev:server

## Run migrations

    npm run typeorm migration:run

---

## Env

Example of envirioment values

```
SECRET_KEY=$2a$08$LvcuBlftpIjwWTwh
PORT=3000
DATABASE=postgres
DB_CONNECTION=pgsql
DB_HOST=facebook_db
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_NAME=facebook_db
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=facebook_db
NODE_ENV=development
TYPEORM_CONNECTION=postgres
TYPEORM_HOST=facebook_db
TYPEORM_USERNAME=postgres
TYPEORM_PASSWORD=postgres
TYPEORM_DATABASE=facebook_db
TYPEORM_PORT=5432
TYPEORM_LOGGING=true
TYPEORM_ENTITIES=./src/modules/**/entities/*.ts
TYPEORM_MIGRATIONS=./src/shared/infra/typeorm/migrations/*.ts
TYPEORM_MIGRATIONS_DIR=./src/shared/infra/typeorm/migrations
STORAGE_TYPE=local
BUCKET_NAME=
BASE_URL=http://localhost:3000
```

## Docker

Docker-compose file contains two containers:

- Database
- App

### Runnning docker-compose

    docker-compose up -d

## Endpoints

POSTS:

- GET /posts/
- POST /posts/

LIKES:

- POST /posts/:postId/likes
- DELETE /posts/:postId/likes/:likeId
  
IMAGES:

- POST /posts/:postId/images
