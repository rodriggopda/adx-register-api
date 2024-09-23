"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterModule = void 0;
const common_1 = require("@nestjs/common");
const register_service_1 = require("./register.service");
const register_repository_1 = require("./register.repository");
const register_controller_1 = require("./register.controller");
const mongoose_1 = require("@nestjs/mongoose");
const register_schema_1 = require("./entities/schema/register.schema");
const image_register_schema_1 = require("./entities/schema/image-register.schema");
let RegisterModule = class RegisterModule {
    constructor() { }
};
exports.RegisterModule = RegisterModule;
exports.RegisterModule = RegisterModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: register_schema_1.Register.name, schema: register_schema_1.RegisterSchema },
                { name: image_register_schema_1.ImageRegister.name, schema: image_register_schema_1.ImageRegisterSchema },
            ]),
        ],
        controllers: [register_controller_1.RegisterController],
        providers: [register_service_1.RegisterService, register_repository_1.RegisterRepository],
    }),
    __metadata("design:paramtypes", [])
], RegisterModule);
//# sourceMappingURL=register.module.js.map