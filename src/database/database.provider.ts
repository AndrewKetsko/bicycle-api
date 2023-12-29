import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DB_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(process.env.DB_HOST),
  },
];
