import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { BicycleRepository } from './bicycle.repository';
import { CreateBicycleDto } from './dtos/create-bicycle.dto';
import { ChangeStatusDto } from './dtos/change-status.dto';
import { Types } from 'mongoose';

@Injectable()
export class BicycleService {
  constructor(private bicycleRepository: BicycleRepository) {}

  async getBicycles() {
    const data = await this.bicycleRepository.getBicycles();
    const total = data.length;
    const available = data.filter((e) => e.status === 'available').length;
    const booked = total - available;
    const avCost =
      Math.round(data.reduce((acc, e) => acc + e.price, 0) / total) || 0;
    return { status: 200, data, stat: { total, available, booked, avCost } };
  }

  async postBicycle(body: CreateBicycleDto) {
    const list = await this.bicycleRepository.getBicycles();
    const falseId = list.find((e) => e.id === body.id);
    if (falseId) {
      throw new ConflictException('id must be unique');
    }
    const data = await this.bicycleRepository.postBicycle(body);
    return { status: 201, data };
  }

  async changeStatus(id: Types.ObjectId, body: ChangeStatusDto) {
    try {
      const bicycle = await this.bicycleRepository.getBicycleById(id);
      if (!bicycle) {
        throw new BadRequestException('wrong ID');
      }
      const data = await this.bicycleRepository.changeStatus(id, body);
      return { status: 200, data };
    } catch (error) {
      throw new BadRequestException('wrong ID');
    }
  }

  async deleteBicycle(id: Types.ObjectId) {
    try {
      const bicycle = await this.bicycleRepository.getBicycleById(id);
      if (!bicycle) {
        throw new BadRequestException('wrong ID');
      }
      const data = await this.bicycleRepository.deleteBicycle(id);
      return { status: 200, data };
    } catch (error) {
      throw new BadRequestException('wrong ID');
    }
  }
}
