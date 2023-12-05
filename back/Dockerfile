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
COPY ./package-lock.json ./package-lock.json

# Si besoin autre chose -> 
# ex: Configuration de Prisma 

RUN npm install

# ----------------------------- #
#   Lancement de l'application  #
# ----------------------------- #
CMD ["npm", "run", "start:dev"]
# ----------------------------- #
