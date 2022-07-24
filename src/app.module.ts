import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ListModule } from './list/list.module';

@Module({
  imports: [
    ListModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB),
  ]
})

export class AppModule { }
