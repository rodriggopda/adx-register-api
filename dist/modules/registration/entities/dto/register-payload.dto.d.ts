import { ImageRegisterPayloadDto } from './image-register-payload.dto';
export declare class RegisterPayloadDto {
    name: string;
    document: string;
    email: string;
    phone: string;
    invoiceNumber: string;
    serialNumber: string;
    images?: ImageRegisterPayloadDto[];
}
