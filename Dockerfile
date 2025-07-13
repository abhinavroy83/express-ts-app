
# ---DEVELOPMENT STAGE ---
FROM node:18 AS dev

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY  . .

CMD [ "npm", "run","dev" ]

# ---PRODCUCTION STAGE ---
FROM node:18 AS prod

WORKDIR /app

COPY package*.json ./
RUN npm install --only=production
COPY . .
RUN npm run build

EXPOSE 3000

CMD [ "node",'dist/index.js' ]