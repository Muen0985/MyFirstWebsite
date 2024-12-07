FROM node:14

WORKDIR /app

COPY server.js .
COPY indexmain.html .
COPY style_m.css .
COPY package.json .
COPY images ./images

RUN npm install

EXPOSE 3000

CMD ["node","server.js"]

