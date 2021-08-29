FROM node:14.17.5
WORKDIR /app
ENV NODE_ENV=production
COPY package.json package-lock.json /app/
RUN npm i --production
EXPOSE 5000
COPY . /app/
RUN npx tsc
CMD ["node", "./build/src/server.js"]