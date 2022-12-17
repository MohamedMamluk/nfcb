"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const app_1 = __importDefault(require("./app"));
const typeDefs_1 = __importDefault(require("./src/resources/typeDefs"));
const resolvers_1 = require("./src/resources/resolvers");
const context_1 = require("./src/resources/context");
new app_1.default(typeDefs_1.default, resolvers_1.resolvers, context_1.context);
