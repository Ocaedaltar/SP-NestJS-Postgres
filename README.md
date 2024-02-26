# Nom du Projet

Starter Pack pour des applications web utilisant Nest JS et PostgreSQL.

## Table des matières

1. [Introduction](#introduction)
2. [Makefile](#installation)
3. [Swagger](#swagger)
4. [Prisma](#prisma)

## Introduction

Ce starter pack fournit une base pour démarrer des applications web en utilisant Nest JS comme framework côté serveur, PostgreSQL comme base de données et react-ts côté client.

Dans le cadre de ce projet, j'ai également inclus plusieurs packages supplémentaires pour améliorer le développement :

- **Swagger**: Swagger est intégré pour générer une documentation interactive de l'API.
- **Prisma**: Prisma est utilisé comme ORM (Object-Relational Mapping) pour faciliter la communication avec la base de données PostgreSQL.

## Makefile

Un Makefile est à votre disposition avec les commandes nécessaires pour une prise en main facile de votre environnement. Voici quelques commandes disponibles :

- `make all` : Crée les conteneurs Docker et démarre l'application.
- `make re` : Supprime tous les conteneurs Docker et relance l'application.
- `make clean` : Arrête les conteneurs Docker.
- `make fclean` : Supprime tous les conteneurs Docker et nettoie les fichiers générés.

- `make enter-back` : Permet d'entrer dans le conteneur du Backend.
- `make enter-db` : Permet d'entrer dans le conteneur de la base de données.
- `make enter-front` : Permet d'entrer dans le conteneur du Frontend.

- `make log-back` : Affiche les logs du conteneur du Backend.
- `make log-db` : Affiche les logs du conteneur de la base de données.
- `make log-front` : Affiche les logs du conteneur du Frontend.


## Swagger

Swagger est une spécification pour décrire les API RESTful. Dans ce starter pack, Swagger est intégré pour générer une documentation interactive de l'API.

- [Documentation Personalisée Swagger](./Documentation/SWAGGER.md)
- [Documentation Officiel Swagger](https://docs.nestjs.com/openapi/introduction)

Pour accéder à l'interface utilisateur Swagger (UI), suivez ces étapes :
1. Lancez votre application Nest JS.
2. Ouvrez un navigateur web et allez à l'URL suivante : `http://localhost:${BACK_PORT}/swagger`

## Prisma

Prisma est un ORM (Object-Relational Mapping) moderne pour Node.js et TypeScript. Il simplifie la communication avec la base de données en fournissant une interface de programmation conviviale et en générant automatiquement du code TypeScript pour interagir avec la base de données PostgreSQL.

Pour explorer votre schéma de base de données et interagir avec vos données, vous pouvez utiliser les commandes suivantes :

- **npx prisma init**: Initialise un nouveau projet Prisma dans le répertoire actuel. Cette commande génère les fichiers de configuration nécessaires pour commencer à utiliser Prisma dans votre projet.

Pour générer du code TypeScript basé sur votre schéma de base de données et interagir avec votre base de données, vous pouvez également utiliser les commandes suivantes :

- **npx prisma generate**: Génère le code TypeScript basé sur votre schéma de base de données. Cela met à jour les fichiers de modèle Prisma dans votre application.
- **npx prisma migrate**: Permet de gérer les migrations de base de données, y compris la création de nouvelles migrations et l'application des migrations existantes.
- **npx prisma ${DB_NAME} seed**: Exécute les scripts de semences définis dans votre configuration Prisma pour remplir votre base de données avec des données initiales.
- **npx prisma studio**: Lance Prisma Studio, une interface de gestion visuelle pour votre base de données.

Pour en savoir plus sur Prisma et comment l'utiliser, consultez: 

- [documentation Personalisee de Prisma](./Documentation/PRISMA.md)
- [documentation Officiel de Prisma](https://docs.nestjs.com/recipes/prisma)
