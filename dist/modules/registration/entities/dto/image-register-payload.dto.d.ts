import { Types } from 'mongoose';
export declare class ImageRegisterPayloadDto {
    fileName: string;
    base64: string;
    register?: Types.ObjectId;
}
