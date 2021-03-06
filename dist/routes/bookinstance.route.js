"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var bookinstance_controller_1 = require("../controllers/bookinstance.controller");
exports.instanceRoute = express_1.Router();
exports.instanceRoute.get("/", bookinstance_controller_1.InstanceList);
exports.instanceRoute.get("/:id/", bookinstance_controller_1.InstanceDetail);
exports.instanceRoute.get("/create", bookinstance_controller_1.InstanceCreate.get);
exports.instanceRoute.post("/create", bookinstance_controller_1.InstanceCreate.post);
exports.instanceRoute.get("/:id/update", bookinstance_controller_1.InstanceUpdate.get);
exports.instanceRoute.post("/:id/update", bookinstance_controller_1.InstanceUpdate.post);
exports.instanceRoute.get("/:id/delete", bookinstance_controller_1.InstanceDelete.get);
exports.instanceRoute.post("/:id/delete", bookinstance_controller_1.InstanceDelete.post);
