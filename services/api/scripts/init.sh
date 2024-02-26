#!/bin/bash

# INIT PRISMA SERVICE
npx prisma db push
npx prisma db seed

npm run start:dev