module.exports = (sequelize, DataTypes) => {
  const favorite = sequelize.define(
    'Favorite',
    {
      uid: {
        field: 'uid',
        type: DataTypes.INTEGER(11),
        primaryKey: true
      },
      fid: {
        field: 'fid',
        type: DataTypes.INTEGER(11),
      },
    },
    {
      classMethods: {},
      tableName: 'ys_user_favorites',
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
  // Masternode.associate = function(models) {
  //   // associations can be defined here
  // };

  return favorite

}
