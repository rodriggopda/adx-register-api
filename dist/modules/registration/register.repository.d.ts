import { Model, Types } from 'mongoose';
import { RegisterPayloadDto } from './entities/dto/register-payload.dto';
import { Register } from './entities/schema/register.schema';
import { ImageRegister } from './entities/schema/image-register.schema';
import { ImageRegisterPayloadDto } from './entities/dto/image-register-payload.dto';
export declare class RegisterRepository {
    private registerModel;
    private imageRegisterModel;
    constructor(registerModel: Model<Register>, imageRegisterModel: Model<ImageRegister>);
    getAll(): Promise<any[]>;
    get(registerId: Types.ObjectId): {
        _id: Types.ObjectId;
    };
    getBySerialNumber(serialNumber: string): Promise<import("mongoose").Document<unknown, {}, Register> & Register & {
        _id: Types.ObjectId;
    }>;
    save(payload: RegisterPayloadDto): Promise<import("mongoose").Document<unknown, {}, Register> & Register & {
        _id: Types.ObjectId;
    }>;
    saveRegisterImages(imagePayload: ImageRegisterPayloadDto[]): Promise<import("mongoose").MergeType<import("mongoose").Document<unknown, {}, ImageRegister> & ImageRegister & {
        _id: Types.ObjectId;
    }, Omit<ImageRegisterPayloadDto, "_id">>[]>;
}
