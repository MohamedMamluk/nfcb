"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mutation = void 0;
const register_1 = require("./mutations/register");
const login_1 = require("./mutations/login");
exports.Mutation = {
    register: register_1.register,
    login: login_1.login,
};
