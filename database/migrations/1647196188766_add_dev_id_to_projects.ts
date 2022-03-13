import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AddDevIdToProjects extends BaseSchema {
  protected tableName = 'projects'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.integer('dev_id')
        .unsigned()
        .references('projects.id')
        .onDelete('SET NULL')
        .nullable();
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('dev_id')
    })
  }
}
