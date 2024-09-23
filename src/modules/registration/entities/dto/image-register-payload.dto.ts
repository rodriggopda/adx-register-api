import { Types } from 'mongoose';

export class ImageRegisterPayloadDto {
  fileName: string;
  base64: string;
  register?: Types.ObjectId;
}
