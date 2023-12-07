ARG NODE_VER
FROM node:${NODE_VER}

WORKDIR /data

RUN npm install -g npm@latest && npm install -g vite@latest