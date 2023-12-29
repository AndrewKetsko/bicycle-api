import { Module } from '@nestjs/common';
import { BicycleController } from './bicycle.controller';
import { BicycleService } from './bicycle.service';
import { DatabaseModule } from 'src/database/database.module';
import { BicycleRepository } from './bicycle.repository';
import { bicycleProvider } from './bicycle.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [BicycleController],
  providers: [BicycleService, BicycleRepository, ...bicycleProvider],
})
export class BicycleModule {}
