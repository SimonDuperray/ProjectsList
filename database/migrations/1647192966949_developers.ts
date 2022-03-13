import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class DevelopersSchema extends BaseSchema {
  protected tableName = 'developers'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name', 255).notNullable()
      table.string('password', 180).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
