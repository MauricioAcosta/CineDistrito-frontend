#!/bin/bash -ex
echo "Ejecutando con usuario: $USER y grupo: $GROUPS"

npm install
npm start
echo "Open in your navigation http://localhost:4200/"
