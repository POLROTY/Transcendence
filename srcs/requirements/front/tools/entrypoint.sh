#!/bin/sh
# installe toutes les dépendances définies dans le fichier package.json de l'application

http-server -p 3002
npm start
tail -f
