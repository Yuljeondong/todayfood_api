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
      favorList: {
        field: 'favorite',
        type: DataTypes.STRING,
        allowNull: false,
        // get() {
        //   const value = this.getDataValue('favorList')
        //   var values = value.split(',')
        //   var results = []
        //   values.forEach(async (element) => {

        //     results.push( await historyService.getHistoryInfo(element))
        //   });
        //   const capsuledValue =  results === undefined ? '[]' : '['+value.toString()+']'
        //   const parsedValue = JSON.parse(capsuledValue)
        //   return parsedValue
        // },
      },
      historyList: {
        field: 'history',
        type: DataTypes.STRING,
        allowNull: true,
        // get() {
        //   const value = this.getDataValue('historyList')
        //   const capsuledValue =
        //     value === undefined ? '[]' : `[${value.toString()}]`
        //   const parsedValue = JSON.parse(capsuledValue)
        //   return parsedValue
        // },
      },
    },
    {
      classMethods: {},
      tableName: 'user_info',
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
    player.hasMany(models.History, { as: 'History',foreignKey:'uid' })
    player.hasMany(models.Favorite, { as: 'Favorite',foreignKey:'uid' })
  }

  return player
}
