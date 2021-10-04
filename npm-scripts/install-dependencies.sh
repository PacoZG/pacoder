#!/usr/bin/env bash

if [ ! -d "./node_modules" ]; then
    printf "Installing dependencies... \n"
    npm install
else
    printf "Dependencies are already installed\n"
fi

printf "do you want to update deependencies?\n"
read -p "Yes(y)/No(n): " answer

if [ $answer == "y" ]; then
    printf "Updating dependencies... \n"
    npm update
fi
