import { Types } from 'mongoose';
import { RegisterRepository } from './register.repository';
import { RegisterPayloadDto } from './entities/dto/register-payload.dto';
import { ImageRegisterPayloadDto } from './entities/dto/image-register-payload.dto';
export declare class RegisterService {
    private readonly registerRepository;
    constructor(registerRepository: RegisterRepository);
    getAll(): Promise<{
        registers: any[];
    }>;
    get(registerId: Types.ObjectId): Promise<{
        _id: Types.ObjectId;
    }>;
    register(payload: RegisterPayloadDto): Promise<{
        success: boolean;
        message: string;
    }>;
    getBySerialNumber(serialNumber: string): Promise<{
        register: import("mongoose").Document<unknown, {}, import("./entities/schema/register.schema").Register> & import("./entities/schema/register.schema").Register & {
            _id: Types.ObjectId;
        };
    }>;
    validateImages(images: ImageRegisterPayloadDto[]): Promise<{
        error: {
            error: boolean;
            field: string;
            message: any;
        };
    }>;
    isValidBase64(base64Value: string): Buffer;
}
