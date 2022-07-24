import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateListDto } from './dto/create-list.dto'
import { UpdateListDto } from './dto/update-list.dto'
import { ListDocument } from './entities/list.entity'

@Injectable()
export class ListService {
  constructor(
    @InjectModel('List') private readonly listModel: Model<ListDocument>
  ) { }
  create(createListDto: CreateListDto) {
    const list = new this.listModel(createListDto)
    return list.save()
  }

  findAll() {
    return this.listModel.find()
  }

  findOne(id: string) {
    return this.listModel.findById(id)
  }

  update(id: string, updateListDto: UpdateListDto) {
    //TODO: update this method to update the list items only
    const list = this.listModel.findById(id)
    console.log('list updated', updateListDto)
    console.log('list found', list)
    return `Ok`;
  }

  remove(id: string) {
    return this.listModel.deleteOne({ _id: id }).exec()
  }
}
