import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateListDto } from './dto/create-list.dto'
import { UpdateItemDto } from './dto/update-items.dto'
import { ListDocument } from './entities/list.entity'

@Injectable()
export class ListService {
  constructor(
    @InjectModel('List') private readonly listModel: Model<ListDocument>
  ) { }
  async create(createListDto: CreateListDto) {
    const list = new this.listModel(createListDto)
    return await list.save()
  }

  async findAll() {
    return await this.listModel.find()
  }

  async findOne(id: string) {
    return await this.listModel.findById(id)
  }

  async findItem(listId: string, itemId: string) {
    const { items } = await this.listModel.findById(listId)
    const index = items.findIndex(_item => _item.id === +itemId)
    if (index >= 0) return items[index]
    return null
  }

  async addItem(id: string, updateItemDto: UpdateItemDto) {
    const { items } = await this.listModel.findById(id)
    console.log(items)
    items.push(updateItemDto)
    console.log(items)
    await this.listModel.updateOne({ _id: id }, { $set: { items } })
    return updateItemDto
  }

  async updateItem(id: string, updateItemDto: UpdateItemDto) {
    const { items } = await this.listModel.findById(id)
    const index = items.findIndex(_item => _item.id === updateItemDto.id)
    if (index >= 0) {
      const newItems = items.map((_item, _index) =>
        index === _index ? updateItemDto : _item
      )
      await this.listModel.updateOne({ _id: id }, { $set: { items: newItems } })
      return newItems[index]
    }
    return null
  }

  async deleteItem(listId: string, itemId: string) {
    const { items } = await this.listModel.findById(listId)
    const index = items.findIndex(_item => _item.id === +itemId)
    if (index >= 0) {
      const item = items[index]
      items.splice(index, 1)
      await this.listModel.updateOne({ _id: listId }, { $set: { items } })
      return item
    }
    return null
  }

  async remove(id: string) {
    return await this.listModel.deleteOne({ _id: id }).exec()
  }
}
