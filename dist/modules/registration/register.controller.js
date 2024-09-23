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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterController = void 0;
const common_1 = require("@nestjs/common");
const register_service_1 = require("./register.service");
const register_payload_dto_1 = require("./entities/dto/register-payload.dto");
const mongoose_1 = require("mongoose");
let RegisterController = class RegisterController {
    constructor(registerService) {
        this.registerService = registerService;
    }
    getAll() {
        return this.registerService.getAll();
    }
    get(registerId) {
        return this.registerService.get(registerId);
    }
    register(payload) {
        return this.registerService.register(payload);
    }
};
exports.RegisterController = RegisterController;
__decorate([
    (0, common_1.Get)('/'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RegisterController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/:registerId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('registerId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mongoose_1.Types.ObjectId]),
    __metadata("design:returntype", void 0)
], RegisterController.prototype, "get", null);
__decorate([
    (0, common_1.Post)('/'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_payload_dto_1.RegisterPayloadDto]),
    __metadata("design:returntype", void 0)
], RegisterController.prototype, "register", null);
exports.RegisterController = RegisterController = __decorate([
    (0, common_1.Controller)('/registers'),
    __metadata("design:paramtypes", [register_service_1.RegisterService])
], RegisterController);
//# sourceMappingURL=register.controller.js.map