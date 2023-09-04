#!/bin/bash

apk add bash
npm install
npx prisma generate 
npx prisma migrate reset
npx prisma migrate dev --name build
npx prisma db seed
npm run start:dev"