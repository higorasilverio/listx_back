import { ItemUnit } from 'src/types/itemUnit'

export class UpdateItemDto {
  id: number
  quantity: number
  description: string
  unit: ItemUnit
}
