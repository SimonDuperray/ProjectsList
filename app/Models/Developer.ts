import { BaseModel, beforeSave, column } from '@ioc:Adonis/Lucid/Orm';
import Hash from '@ioc:Adonis/Core/Hash';

export default class Developer extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public password: string

  @beforeSave()
  public static async hashPassword(developer: Developer) {
    if(developer.$dirty.password){
      developer.password = await Hash.make(developer.password);
    }
  }
}
