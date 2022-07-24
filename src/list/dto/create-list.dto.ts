import { UnitEnum } from "src/types/unitEnum"

export class CreateListDto {
  id: string
  quantity: number
  description: string
  unit: UnitEnum
}
