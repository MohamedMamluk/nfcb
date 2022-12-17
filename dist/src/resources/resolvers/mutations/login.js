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
exports.login = void 0;
const apollo_server_1 = require("apollo-server");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyUser_1 = require("../../../utils/verifyUser");
const login = (_, { input: { email, password } }, context) => __awaiter(void 0, void 0, void 0, function* () {
    let user = yield (0, verifyUser_1.verify)(email);
    if (!user) {
        throw new apollo_server_1.AuthenticationError('User with this email does not exist, please check your email');
    }
    const compare = yield user.comparePassword(password);
    if (!compare) {
        throw new apollo_server_1.AuthenticationError('Password is incorrect');
    }
    try {
        const token = jsonwebtoken_1.default.sign({
            id: user._id,
            email: user.email,
            name: user.name,
        }, process.env.JWT_SECRET, { expiresIn: '1d' });
        return {
            id: user._id,
            email: user.email,
            name: user.name,
            favorite: user.favorite,
            token,
        };
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.login = login;
