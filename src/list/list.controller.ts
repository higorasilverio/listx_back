import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'
import { CreateListDto } from './dto/create-list.dto'
import { UpdateItemDto } from './dto/update-items.dto'
import { ListService } from './list.service'

@Controller('list')
export class ListController {
  constructor(private readonly listService: ListService) { }

  @Post()
  create(@Body() createListDto: CreateListDto) {
    return this.listService.create(createListDto)
  }

  @Get()
  findAll() {
    return this.listService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.listService.findOne(id)
  }

  @Get(':listId/item/:itemId')
  findItem(@Param('listId') listId: string, @Param('itemId') itemId: string) {
    return this.listService.findItem(listId, itemId)
  }

  @Patch(':id/new-item')
  addItem(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
    return this.listService.addItem(id, updateItemDto)
  }

  @Patch(':id')
  updateItem(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
    return this.listService.updateItem(id, updateItemDto)
  }

  @Patch(':listId/delete-item/:itemId')
  deleteItem(@Param('listId') listId: string, @Param('itemId') itemId: string) {
    return this.listService.deleteItem(listId, itemId)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.listService.remove(id)
  }
}
