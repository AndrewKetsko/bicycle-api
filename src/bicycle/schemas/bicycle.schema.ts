import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema({ versionKey: false })
export class Bicycle {
  _id: Types.ObjectId;

  @Prop({ required: true, min: 5 })
  name: string;

  @Prop({ required: true, min: 5 })
  type: string;

  @Prop({ required: [true, 'color is required'], min: 3 })
  color: string;

  @Prop({ required: true })
  wheelSize: number;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true, min: 5, max: 200 })
  description: string;

  @Prop({ required: true, min: 5 })
  id: string;

  @Prop({ enum: ['available', 'busy', 'unavailable'], default: 'available' })
  status: string;
}

export const BicycleSchema = SchemaFactory.createForClass(Bicycle);
