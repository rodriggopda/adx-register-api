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
exports.RegisterService = void 0;
const common_1 = require("@nestjs/common");
const register_repository_1 = require("./register.repository");
const commom_errors_1 = require("../../lib/commom-errors");
let RegisterService = class RegisterService {
    constructor(registerRepository) {
        this.registerRepository = registerRepository;
    }
    async getAll() {
        const registers = await this.registerRepository.getAll();
        return {
            registers,
        };
    }
    async get(registerId) {
        return this.registerRepository.get(registerId);
    }
    async register(payload) {
        const { images, ...registerDto } = payload;
        if (!registerDto) {
            throw new common_1.HttpException(commom_errors_1.commomErrors.EMPTY_REGISTER, common_1.HttpStatus.BAD_REQUEST);
        }
        const errors = [];
        Object.keys(registerDto).forEach((key) => {
            if (registerDto[key] === '' || registerDto[key] === undefined) {
                errors.push(commom_errors_1.commomErrors.requiredField(key));
            }
        });
        if (errors.length)
            throw new common_1.HttpException(errors, common_1.HttpStatus.BAD_REQUEST);
        const { register } = await this.getBySerialNumber(registerDto.serialNumber);
        if (register)
            throw new common_1.HttpException({
                error: true,
                message: 'Não foi possível continuar com o registro porque esse número de série já foi usado',
            }, common_1.HttpStatus.BAD_REQUEST);
        const { error: errorOnImages } = await this.validateImages(images);
        if (errorOnImages)
            throw new common_1.HttpException(errorOnImages, common_1.HttpStatus.BAD_REQUEST);
        const { name, _id } = await this.registerRepository.save(registerDto);
        const imagesPayload = [];
        images.forEach((image) => {
            imagesPayload.push({
                ...image,
                register: _id,
            });
        });
        await this.registerRepository.saveRegisterImages(imagesPayload);
        const successfullyMesage = 'A sua solicitação de Registro de Produto foi realizada com Sucesso ' +
            'agora nossa equipe irá validar os dados e te enviará o certificado ' +
            'de registro no e-mail indicado';
        return {
            success: true,
            message: `Obrigado ${name.split(' ')[0]}. ${successfullyMesage}`,
        };
    }
    async getBySerialNumber(serialNumber) {
        const register = await this.registerRepository.getBySerialNumber(serialNumber);
        return { register };
    }
    async validateImages(images) {
        if (!images?.length) {
            const errorMessage = 'Para continuar o registro você precisa enviar pelo ' +
                'menos 2 fotos do produto conforme as instruções';
            return {
                error: commom_errors_1.commomErrors.requiredField('images', errorMessage),
            };
        }
        const isValidBase64 = [];
        images.forEach((imagePayload) => {
            const validated = this.isValidBase64(imagePayload.base64);
            if (validated) {
                isValidBase64.push(validated);
            }
        });
        return { error: null };
    }
    isValidBase64(base64Value) {
        const validated = Buffer.from(base64Value, 'base64');
        if (!validated)
            return null;
        return validated;
    }
};
exports.RegisterService = RegisterService;
exports.RegisterService = RegisterService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [register_repository_1.RegisterRepository])
], RegisterService);
//# sourceMappingURL=register.service.js.map