# Étape de construction
FROM node:16 as development

WORKDIR /usr/src/app
COPY package*.json ./

# RUN npm install

# COPY . .

CMD ["tail", "-f"]

# Étape d'exécution
# FROM node:16

# WORKDIR /usr/src/app
# COPY package*.json ./
# RUN npm install --only=production

# COPY --from=build /usr/src/app/dist ./dist

# CMD ["node", "dist/main"]