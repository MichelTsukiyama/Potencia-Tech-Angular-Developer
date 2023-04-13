# Documentação

www.typescriptlang.org/tsconfig

----

## Comando para criar o TSConfig

        npx tsc --init

## Por que usar o TSConfig

- Converte todos os arquivos .ts para .js;
- Evita erros de compilação;

## Dica

Alterar o diretório padrão para a pasta ./src:

1. No arquivo tsconfig.json, em "rootDir", preencha conforme abaixo:

        "rootDir": "./src", 

Não esquecer de removr o comentário.

Configurar o diretório de saída padrão para ./build:

        "outDir": "./build"

Ao utilizar o comando:

        npx tsc

Não é preciso informar o diretório e os arquivos, ele vai converter todos em uma pasta chamada build.