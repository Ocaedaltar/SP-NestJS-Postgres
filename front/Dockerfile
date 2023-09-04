# Étape de construction
FROM node:16 as development

WORKDIR /usr/src/app
COPY package*.json ./
# RUN npm install

COPY . .

CMD ["tail", "-f"]

# Étape de service
# FROM nginx:latest as production
# COPY --from=build /usr/src/app/dist /usr/share/nginx/html