import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ListSchema } from './entities/list.entity'
import { ListController } from './list.controller'
import { ListService } from './list.service'

@Module({
  imports: [MongooseModule.forFeature([{ name: 'List', schema: ListSchema }])],
  controllers: [ListController],
  providers: [ListService]
})
export class ListModule { }
