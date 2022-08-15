import { config } from './config'
import { log } from './library/logger'
import express from 'express'
import { express as voyagerMiddleware } from 'graphql-voyager/middleware'

const app = express()

app.use(
  '/',
  voyagerMiddleware({
    endpointUrl: 'https://api.powerstack.xyz/v1/graphql',
    // headersJS: { 'x-hasura-user-role': 'anon' }.toString(),
  }),
)

app.listen(config.port, config.hostname, () => log.info(`Server running at http://${config.hostname}:${config.port}/`))
