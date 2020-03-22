# PTimmer


### Docker service

 1. Create a `.env` file using the `.env.example`
 2. Run `docker-compose up -d`


### PTimmer App

```
npm install -E <package>


docker exec <postgres_container_name> pg_dump -U postgres <database_name> > backup.sql

docker exec -i <postgres_container_name> psql -U postgres -d <database_name> < backup.sql

```
