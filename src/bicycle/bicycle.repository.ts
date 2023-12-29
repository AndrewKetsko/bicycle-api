import { Inject } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { Bicycle } from './schemas/bicycle.schema';
import { CreateBicycleDto } from './dtos/create-bicycle.dto';
import { ChangeStatusDto } from './dtos/change-status.dto';

export class BicycleRepository {
  constructor(@Inject('BICYCLE_MODEL') private bicycleModel: Model<Bicycle>) {}

  getBicycles(): Promise<Bicycle[]> {
    return this.bicycleModel.find();
  }

  getBicycleById(id: Types.ObjectId): Promise<Bicycle> {
    return this.bicycleModel.findById(id);
  }

  async postBicycle(body: CreateBicycleDto): Promise<Bicycle> {
    return this.bicycleModel.create(body);
  }

  changeStatus(id: Types.ObjectId, body: ChangeStatusDto): Promise<Bicycle> {
    return this.bicycleModel.findByIdAndUpdate(id, body, { new: true });
  }

  deleteBicycle(id: Types.ObjectId): Promise<any> {
    return this.bicycleModel.findByIdAndDelete(id);
  }
}
