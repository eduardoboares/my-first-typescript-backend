"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_controller_1 = __importDefault(require("./controllers/user-controller"));
var routes = express_1.Router();
routes.get('/users', user_controller_1.default.index);
routes.post('/users/create', user_controller_1.default.create);
exports.default = routes;
