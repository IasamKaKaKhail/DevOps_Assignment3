#!/bin/bash

mkdir dev
mv * dev
cd dev
mkdir App
mv * App
cd App
mv Dockerfile docker-compose.yaml bash_script_for_removing_running_containers.sh ..
cd ..
sudo snap install docker
sudo docker build -t app .
sudo docker compose up -d

