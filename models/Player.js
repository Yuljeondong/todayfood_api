module.exports = (sequelize, DataTypes) => {
  const player = sequelize.define(
    'Player',
    {
      uid: {
        field: 'uid',
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        get() {
          const value = this.getDataValue('uid')
          return value === undefined ? null : value.toString()
        },
      },
      name: {
        field: 'name',
        type: DataTypes.STRING,
        allowNull: false,
        get() {
          const value = this.getDataValue('name')
          return value === undefined ? null : value.toString()
        },
      },
    },
    {
      classMethods: {},
      tableName: 'ys_user_info',
      freezeTableName: true,
      underscored: true,
      timestamps: true,
      hooks: {
        beforeCreate() {
          // TODO; create작업 전에 해야할 사항들.
        },
      },
      getterMethods: {},
      setterMethods: {},
    },
  )
  player.associate = (models) => {
    player.hasMany(models.History, { as: 'historyList',foreignKey:'uid' })
    player.hasMany(models.Favorite, { as: 'favorList',foreignKey:'uid' })
  }

  return player
}
