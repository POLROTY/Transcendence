#!/bin/sh
# echo test
# # installe toutes les dépendances définies dans le fichier package.json de l'application
# npm install npm
# apk add npm

# # # # installe le package @nestjs/cli globalement sur votre système en tant que dépendance de développement. Permet d'utiliser la commande nest pour exécuter des commandes spécifiques à Nest.js
# npm i -g @nestjs/cli --save-dev
# # # #  ajoute le chemin du répertoire des binaires npm globaux à la variable d'environnement PATH. Cela permet d'exécuter les binaires npm globaux directement depuis la ligne de commande
export PATH="$PATH:$(npm bin -g)"
# # # # Cela exécute la commande prisma db push à l'aide de npx. Prisma est un outil de gestion des bases de données qui permet de générer et de synchroniser les schémas de base de données.
# # # # La commande prisma db push applique les modifications du schéma de base de données à la base de données
npx prisma db push
# # # # Cette commande génère le code TypeScript correspondant au schéma de base de données défini dans Prisma.
# # # # Cela permet d'utiliser les modèles de base de données et les requêtes générées dans l'application Nest.js
npx prisma generate
# # # # Cette commande exécute les scripts de génération de données initiales définis dans Prisma. Cela permet de peupler la base de données avec des données de test ou des données initiales
npx prisma db seed

npm i -D ts-node typescript @types/node
# # # # Cette commande démarre l'application en mode développement, ce qui permet de recharger automatiquement l'application lors des modifications du code source
tail -f
# # npm run start:dev
