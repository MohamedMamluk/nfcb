import { ApolloServer } from 'apollo-server'
import { DocumentNode } from 'graphql'
import { connect } from 'mongoose'
import TMDBAPI from './src/datasource/shows'
class App {
    private server: ApolloServer
    constructor(typeDefs: DocumentNode, resolvers: any, context: any) {
        this.server = new ApolloServer({
            typeDefs,
            resolvers,
            context,
            dataSources: () => ({
                TMDBAPI: new TMDBAPI(),
            }),
        })
        this.initialiseDatabase()
    }

    private initialiseDatabase(): void {
        const { MONGO_URI } = process.env
        connect(MONGO_URI || '').then(() => {
            console.log('connected')
            this.initialiseApolloServer()
        })
    }
    private initialiseApolloServer(): void {
        this.server
            .listen({ port: process.env.PORT || 4000 })
            .then((info) => console.log(`server is running on ${info.url}`))
    }
}

export default App
