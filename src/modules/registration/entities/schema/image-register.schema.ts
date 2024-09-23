import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Register } from './register.schema';

@Schema()
export class ImageRegister {
  @Prop({ required: true })
  fileName: string;

  @Prop({ required: true })
  base64: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Register' })
  register: Register;
}

export const ImageRegisterSchema = SchemaFactory.createForClass(ImageRegister);
