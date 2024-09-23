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
exports.RegisterRepository = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const register_schema_1 = require("./entities/schema/register.schema");
const image_register_schema_1 = require("./entities/schema/image-register.schema");
let RegisterRepository = class RegisterRepository {
    constructor(registerModel, imageRegisterModel) {
        this.registerModel = registerModel;
        this.imageRegisterModel = imageRegisterModel;
    }
    getAll() {
        const registers = this.registerModel.aggregate([
            {
                $lookup: {
                    from: 'imageregisters',
                    localField: '_id',
                    foreignField: 'register',
                    as: 'images',
                },
            },
        ]);
        return registers.exec();
    }
    get(registerId) {
        return { _id: registerId };
    }
    getBySerialNumber(serialNumber) {
        const register = this.registerModel
            .findOne({ serialNumber: serialNumber })
            .exec();
        return register;
    }
    save(payload) {
        const register = new this.registerModel(payload);
        return register.save();
    }
    saveRegisterImages(imagePayload) {
        const imageRegisters = this.imageRegisterModel.insertMany(imagePayload);
        return imageRegisters;
    }
};
exports.RegisterRepository = RegisterRepository;
exports.RegisterRepository = RegisterRepository = __decorate([
    __param(0, (0, mongoose_2.InjectModel)(register_schema_1.Register.name)),
    __param(1, (0, mongoose_2.InjectModel)(image_register_schema_1.ImageRegister.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model])
], RegisterRepository);
//# sourceMappingURL=register.repository.js.map