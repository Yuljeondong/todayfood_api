module.exports = (sequelize, DataTypes) => {
  const food = sequelize.define(
    'Food',
    {
      fid: {
        field: 'fid',
        type: DataTypes.INTEGER(11),
        primaryKey: true
      },
      name: {
        field: 'name',
        type: DataTypes.STRING,
        allowNull: false
      },
      thumb: {
        field: 'thumb',
        type: DataTypes.STRING,
        allowNull: true
      },
      tagList: {
        field: 'tag',
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    {
      classMethods: {},
      tableName: 'food_info',
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
  food.associate = (models) => {
    food.belongsToMany(models.Player, { through: 'FoodPlayer' })
  }

  return food
}
