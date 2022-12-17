import 'dotenv/config'
import App from './app'
import typeDefs from './src/resources/typeDefs'
import { resolvers } from './src/resources/resolvers'
import { context } from './src/resources/context'
new App(typeDefs, resolvers, context)
