FROM node
WORKDIR /app
COPY . .
RUN [ "npm", "i", "--force" ]
EXPOSE 3000
CMD [ "npm", "run", "dev" ]