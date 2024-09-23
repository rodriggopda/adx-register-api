import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { RegisterPayloadDto } from './entities/dto/register-payload.dto';
import { Register } from './entities/schema/register.schema';
import { ImageRegister } from './entities/schema/image-register.schema';
import { ImageRegisterPayloadDto } from './entities/dto/image-register-payload.dto';

export class RegisterRepository {
  constructor(
    @InjectModel(Register.name) private registerModel: Model<Register>,
    @InjectModel(ImageRegister.name)
    private imageRegisterModel: Model<ImageRegister>,
  ) {}

  getAll() {
    const registers = this.registerModel.aggregate([
      {
        $lookup: {
          from: 'imageregisters',
          localField: '_id',
          foreignField: 'register',
          as: 'images',
        },
      },
    ]);
    return registers.exec();
  }

  get(registerId: Types.ObjectId) {
    return { _id: registerId };
  }

  getBySerialNumber(serialNumber: string) {
    const register = this.registerModel
      .findOne({ serialNumber: serialNumber })
      .exec();
    return register;
  }

  save(payload: RegisterPayloadDto) {
    const register = new this.registerModel(payload);
    return register.save();
  }

  saveRegisterImages(imagePayload: ImageRegisterPayloadDto[]) {
    const imageRegisters = this.imageRegisterModel.insertMany(imagePayload);
    return imageRegisters;
  }
}
