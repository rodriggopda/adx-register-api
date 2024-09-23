import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegisterPayloadDto } from './entities/dto/register-payload.dto';
import { Types } from 'mongoose';

@Controller('/registers')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Get('/')
  @HttpCode(HttpStatus.OK)
  getAll() {
    return this.registerService.getAll();
  }

  @Get('/:registerId')
  @HttpCode(HttpStatus.OK)
  get(@Param('registerId') registerId: Types.ObjectId) {
    return this.registerService.get(registerId);
  }

  @Post('/')
  @HttpCode(HttpStatus.OK)
  register(@Body() payload: RegisterPayloadDto) {
    return this.registerService.register(payload);
  }
}
