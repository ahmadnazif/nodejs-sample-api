FROM node:slim
ENV NODE_ENV development
WORKDIR /app
EXPOSE 5678
COPY . .
RUN npm install
CMD [ "node", "src/app.js" ]

