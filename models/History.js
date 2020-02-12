module.exports = (sequelize, DataTypes) => {
  const history = sequelize.define(
    'History',
    {
      hid: {
        field: 'hid',
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },
      // fid: {
      //   field: 'fid',
      //   type: DataTypes.INTEGER(11),
      //   allowNull: false
      // },
      date: {
        field: 'date',
        type: DataTypes.INTEGER(11),
        allowNull: true
      }
    },
    {
      classMethods: {},
      tableName: 'user_history',
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
  history.associate = (models) => {
    history.hasOne(models.Food, { as: 'food',foreignKey:'fid' })
  };
    return history

























}
