import { Types } from "mongoose";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { RegisterRepository } from "./register.repository";
import { RegisterPayloadDto } from "./entities/dto/register-payload.dto";
import { commomErrors } from "src/lib/commom-errors";
import { ImageRegisterPayloadDto } from "./entities/dto/image-register-payload.dto";
import {
  acceptedFormarts,
  validateImageBase64,
} from "src/lib/validate-image-base64";

@Injectable()
export class RegisterService {
  constructor(private readonly registerRepository: RegisterRepository) {}

  async getAll() {
    const registers = await this.registerRepository.getAll();
    return {
      registers,
    };
  }

  async get(registerId: Types.ObjectId) {
    return this.registerRepository.get(registerId);
  }

  async register(payload: RegisterPayloadDto) {
    const { images, ...registerDto } = payload;

    if (!registerDto) {
      throw new HttpException(
        commomErrors.EMPTY_REGISTER,
        HttpStatus.BAD_REQUEST,
      );
    }

    const errors = [];

    Object.keys(registerDto).forEach((key) => {
      if (registerDto[key] === "" || registerDto[key] === undefined) {
        errors.push(commomErrors.requiredField(key));
      }
    });

    if (errors.length) throw new HttpException(errors, HttpStatus.BAD_REQUEST);

    const { register } = await this.getBySerialNumber(registerDto.serialNumber);

    if (register)
      throw new HttpException(
        {
          error: true,
          message:
            "Não foi possível continuar com o registro porque esse número de série já foi usado",
        },
        HttpStatus.BAD_REQUEST,
      );

    const { error: errorOnImages } = await this.validateImages(images);

    if (errorOnImages)
      throw new HttpException(errorOnImages, HttpStatus.BAD_REQUEST);

    const { name, _id } = await this.registerRepository.save(registerDto);

    const imagesPayload: ImageRegisterPayloadDto[] = [];

    images.forEach((image) => {
      imagesPayload.push({
        ...image,
        register: _id,
      });
    });

    await this.registerRepository.saveRegisterImages(imagesPayload);

    const successfullyMesage =
      "A sua solicitação de Registro de Produto foi realizada com Sucesso " +
      "agora nossa equipe irá validar os dados e te enviará o certificado " +
      "de registro no e-mail indicado";

    return {
      success: true,
      message: `Obrigado ${name.split(" ")[0]}. ${successfullyMesage}`,
    };
  }

  async getBySerialNumber(serialNumber: string) {
    const register =
      await this.registerRepository.getBySerialNumber(serialNumber);
    return { register };
  }

  async validateImages(images: ImageRegisterPayloadDto[]) {
    if (!images?.length) {
      const errorMessage =
        "Para continuar o registro você precisa enviar pelo " +
        "menos 2 fotos do produto conforme as instruções";
      return {
        error: commomErrors.requiredField("images", errorMessage),
      };
    }

    const isValidBase64 = [];

    images.forEach((imagePayload) => {
      const validated = validateImageBase64(
        imagePayload.base64,
        imagePayload.fileName,
      );
      if (validated !== null) {
        isValidBase64.push(validated);
      }
    });

    if (isValidBase64.length < 2) {
      const errorMessage = `Uma ou mais fotos não possuem o formato correto. Formatos aceitos: ${acceptedFormarts.join(",").replace(/\,/g, ", ")}.`;
      return {
        error: commomErrors.requiredField("images", errorMessage),
      };
    }

    return { error: null };
  }
}
