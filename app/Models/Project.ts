import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Developer from 'App/Models/Developer'

export default class Project extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public description: string

  @column()
  public technos: string

  @column()
  public features: string

  @column()
  public dev_id: number

  @belongsTo(() => Developer)
  public developer: BelongsTo<typeof Developer>
}
