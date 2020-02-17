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
      fid: {
        field: 'fid',
        type: DataTypes.INTEGER(11),
        allowNull: false
      },
      date: {
        field: 'date',
        type: DataTypes.DATE(),
        allowNull: true
      },
      uid: {
        field: 'uid',
        type: DataTypes.INTEGER(11),
        allowNull: false

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
    // history.hasOne(models.Food, { as: 'food',foreignKey:'fid' })
    history.belongsTo(models.Food, { foreignKey:'fid' })
  };
    return history

























}
