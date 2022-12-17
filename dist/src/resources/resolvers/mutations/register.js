"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const User_1 = __importDefault(require("../../../resources/models/User"));
const apollo_server_1 = require("apollo-server");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyUser_1 = require("../../../utils/verifyUser");
const register = (_p, { input: { name, email, password } }, _c) => __awaiter(void 0, void 0, void 0, function* () {
    const checkEmail = (0, verifyUser_1.verify)(email);
    if (!checkEmail) {
        throw new apollo_server_1.AuthenticationError('Email already exists');
    }
    try {
        const user = yield User_1.default.create({ name, email, password });
        if (!user) {
            throw new Error('Something went wrong!');
        }
        const token = jsonwebtoken_1.default.sign({
            email: user.email,
            name: user.name,
            password: user.password,
            id: user._id,
        }, process.env.JWT_SECRET, {
            expiresIn: '1d',
        });
        return {
            email: user.email,
            name: user.name,
            password: user.password,
            id: user._id,
            favorite: user.favorite,
            token,
        };
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.register = register;
