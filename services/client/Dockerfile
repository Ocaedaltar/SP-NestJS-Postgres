FROM node:16 as development

WORKDIR /app

# ----------------------------- #
#   Installation dependencies   #
# ----------------------------- #
COPY ./package.json ./package.json

# Si besoin autre chose ->
# ex: Configuration de Prisma

RUN npm install

# ----------------------------- #
#   Lancement de l'application  #
# ----------------------------- #
CMD ["npm", "run", "dev"]
# CMD ["tail", "-f"]
# ----------------------------- #
