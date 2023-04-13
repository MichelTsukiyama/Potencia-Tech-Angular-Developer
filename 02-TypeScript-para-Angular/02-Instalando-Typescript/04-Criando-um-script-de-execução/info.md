# Criar um script

No arquivo *package.json*, em "scripts", adicionar:


    "start": "npx tsc && node build/index.js"

Para executar utilizar este script, usar o comando abaixo:


        npm run start

E só com este comando ele vai transpilar o Typescript para Javascript e executar o index.js.