import { Module } from '@nestjs/common';
import { ListController } from './list/list.controller';
import { ListModule } from './list/list.module';
import { ListService } from './list/list.service';

@Module({
  imports: [ListModule],
  controllers: [ListController],
  providers: [ListService],
})

export class AppModule { }
