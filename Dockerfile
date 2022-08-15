FROM node:14 as builder
RUN yarn --ignore-optional global add typescript
WORKDIR /usr/src/app
COPY package.json .
COPY yarn*.lock .
COPY . .
RUN yarn build

FROM node:14-slim as runtime
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/dist .
COPY --from=builder /usr/src/app/node_modules ./node_modules
CMD [ "node", "." ]
