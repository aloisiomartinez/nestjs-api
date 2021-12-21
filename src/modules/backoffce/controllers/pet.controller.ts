import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { ValidatorInterceptor } from 'src/interceptors/validator.interceptor';
import { Result } from '../models/result.model';
import { CreatePetContract } from '../contracts/pet/create-pet.contract';
import { Pet } from '../models/pet.model';
import { PetService } from '../services/pet.service';

@Controller('v1/pets')
export class PetController {
  constructor(private readonly service: PetService) {}

  @Post(':document')
  @UseInterceptors(new ValidatorInterceptor(new CreatePetContract()))
  async createPet(@Param('document') document, @Body() model: Pet) {
    try {
      const res = await this.service.create(document, model);
      return new Result(null, true, res, null);
    } catch (error) {
      throw new HttpException(
        new Result('Não foi possível criar seu pet', false, null, error),
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Put(':document/:id')
  @UseInterceptors(new ValidatorInterceptor(new CreatePetContract()))
  async updatePet(
    @Param('document') document,
    @Param('id') id,
    @Body() model: Pet,
  ) {
    try {
      const res = await this.service.update(document, id, model);
      return new Result(null, true, res, null);
    } catch (error) {
      throw new HttpException(
        new Result('Não foi possível criar seu pet', false, null, error),
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
