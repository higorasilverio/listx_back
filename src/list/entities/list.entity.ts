import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import { ListItem } from 'src/types/listItem'

export type ListDocument = List & Document

@Schema()
export class List {
  @Prop()
  name: string

  @Prop()
  items: ListItem[]
}

export const ListSchema = SchemaFactory.createForClass(List)
