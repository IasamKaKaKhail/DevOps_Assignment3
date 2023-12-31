#!/bin/bash

mkdir dev
mv * dev
cd dev
mkdir App
mv * App
cd App
mv Dockerfile docker-compose.yaml ..
cd ..
sudo docker build -t app .
sudo docker compose up -d

