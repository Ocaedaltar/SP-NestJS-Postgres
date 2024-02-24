FROM node:16 as development

# ----------------------------- #
#      Instalation NestCLI      #
# ----------------------------- #
RUN npm install -g @nestjs/cli
# ----------------------------- #

# ----------------------------- #
#   Mise en place d'un script   #
# ----------------------------- #
COPY ./scripts/ngen.sh /bin/ngen
RUN chmod +x /bin/ngen
# ----------------------------- #

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
CMD npx prisma db push      \
    && npx prisma db seed   \
    && npm run start:dev
# CMD ["tail", "-f"]
# ----------------------------- #
