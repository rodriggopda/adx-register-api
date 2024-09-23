import { Module } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegisterRepository } from './register.repository';
import { RegisterController } from './register.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Register, RegisterSchema } from './entities/schema/register.schema';
import {
  ImageRegister,
  ImageRegisterSchema,
} from './entities/schema/image-register.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Register.name, schema: RegisterSchema },
      { name: ImageRegister.name, schema: ImageRegisterSchema },
    ]),
  ],
  controllers: [RegisterController],
  providers: [RegisterService, RegisterRepository],
})
export class RegisterModule {
  constructor() {}
}
