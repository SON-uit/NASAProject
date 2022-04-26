FROM node:14-alpine

WORKDIR /app
#phai sap xep 1 cach tuan tu neu 1 dong bi thay doi thi se chay lai tat ca cac dong phia sau
COPY package*.json ./

COPY client/package*.json client/
RUN npm install --prefix client --only=production

COPY server/package*.json server/
RUN npm install --prefix server --only=production

COPY client/ client/
RUN npm run build-docker --prefix client

COPY server/ server/
USER node
CMD ["npm","start","--prefix","server"]

EXPOSE 5000