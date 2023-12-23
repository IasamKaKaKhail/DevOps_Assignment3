#!/bin/bash

sudo docker ps -a
sudo docker stop frontend
sudo docker stop backend
sudo docker rm frontend
sudo docker rm backend
sudo docker compose up -d

exit 0