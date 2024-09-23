import * as mongoose from 'mongoose';
import { Register } from './register.schema';
export declare class ImageRegister {
    fileName: string;
    base64: string;
    register: Register;
}
export declare const ImageRegisterSchema: mongoose.Schema<ImageRegister, mongoose.Model<ImageRegister, any, any, any, mongoose.Document<unknown, any, ImageRegister> & ImageRegister & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ImageRegister, mongoose.Document<unknown, {}, mongoose.FlatRecord<ImageRegister>> & mongoose.FlatRecord<ImageRegister> & {
    _id: mongoose.Types.ObjectId;
}>;
