import { RegisterService } from './register.service';
import { RegisterPayloadDto } from './entities/dto/register-payload.dto';
import { Types } from 'mongoose';
export declare class RegisterController {
    private readonly registerService;
    constructor(registerService: RegisterService);
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
}
