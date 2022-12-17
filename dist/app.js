"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const mongoose_1 = require("mongoose");
const shows_1 = __importDefault(require("./src/datasource/shows"));
class App {
    constructor(typeDefs, resolvers, context) {
        this.server = new apollo_server_1.ApolloServer({
            typeDefs,
            resolvers,
            context,
            dataSources: () => ({
                TMDBAPI: new shows_1.default(),
            }),
        });
        this.initialiseDatabase();
    }
    initialiseDatabase() {
        const { MONGO_URI } = process.env;
        (0, mongoose_1.connect)(MONGO_URI || '').then(() => {
            console.log('connected');
            this.initialiseApolloServer();
        });
    }
    initialiseApolloServer() {
        this.server
            .listen({ port: process.env.PORT || 4000 })
            .then((info) => console.log(`server is running on ${info.url}`));
    }
}
exports.default = App;
