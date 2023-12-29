import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BicycleService } from './bicycle.service';
import { CreateBicycleDto } from './dtos/create-bicycle.dto';
import { ChangeStatusDto } from './dtos/change-status.dto';
import { Types } from 'mongoose';

@Controller('bicycle')
export class BicycleController {
  constructor(private bicycleService: BicycleService) {}

  @Get()
  getBicycles() {
    return this.bicycleService.getBicycles();
  }

  @Post()
  postBicycle(@Body() body: CreateBicycleDto) {
    return this.bicycleService.postBicycle(body);
  }

  @Patch('/:id')
  changeStatus(@Body() body: ChangeStatusDto, @Param('id') id: Types.ObjectId) {
    return this.bicycleService.changeStatus(id, body);
  }

  @Delete('/:id')
  deleteBicycle(@Param('id') id: Types.ObjectId) {
    return this.bicycleService.deleteBicycle(id);
  }
}
