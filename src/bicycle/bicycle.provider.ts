import { Mongoose } from 'mongoose';
import { BicycleSchema } from './schemas/bicycle.schema';

export const bicycleProvider = [
  {
    provide: 'BICYCLE_MODEL',
    useFactory: (mongoose: Mongoose) =>
      mongoose.model('Bicycle', BicycleSchema),
    inject: ['DB_CONNECTION'],
  },
];
