FROM node

RUN mkdir -p /home/app

COPY . /home/app

EXPOSE 3000

CMD ["npm install && npm run build"]
