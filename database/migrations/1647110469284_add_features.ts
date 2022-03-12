import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AddFeatures extends BaseSchema {
  protected tableName = 'projects'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('features')
        .nullable()

    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('features')
    })
  }
}
