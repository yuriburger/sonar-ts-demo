FROM risingstack/alpine:3.4-v6.9.4-4.2.0

ENV PORT 80

EXPOSE 80:3000

COPY package.json package.json
RUN npm install

COPY . .
RUN npm run build

CMD ["node", "dist/"]
