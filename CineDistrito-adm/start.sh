#!/bin/bash -ex
echo "Ejecutando con usuario: $USER y grupo: $GROUPS"
echo 'Si no has instalado los node_modules ejecuta npm install'
echo "Open in your navigation http://localhost:4300/"
ng serve -o
