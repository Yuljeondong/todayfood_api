module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'History',
    {
      hid: {
        field: 'hid',
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        get() {
          const value = this.getDataValue('hid')
          return value === undefined ? null : value.toString()
        },
      },
      fid: {
        field: 'fid',
        type: DataTypes.INTEGER(11),
        allowNull: false,
        get() {
          const value = this.getDataValue('fid')
          return value === undefined ? null : value.toString()
        },
      },
      date: {
        field: 'date',
        type: DataTypes.INTEGER(11),
        allowNull: true,
        get() {
          const value = this.getDataValue('date')
          return value === undefined ? null : value.toString()
        },
      },
      // ,
      // thumb: {
      //   field: 'pt_thumb',
      //   type: DataTypes.STRING,
      //   allowNull: true,
      //   get() {
      //     const value = this.getDataValue('thumb')
      //     return value === undefined ? null : value.toString()
      //   },
      // },       
      // link: {
      //   field: 'pt_link1',
      //   type: DataTypes.STRING,
      //   allowNull: true,
      //   get() {
      //     const value = this.getDataValue('link')
      //     return value === undefined ? null : value.toString()
      //   },
      // },     
      // use: {
      //   field: 'it_use',
      //   type: DataTypes.BOOLEAN,
      // },        
      // hits: {
      //   field: 'it_hit',
      //   type: DataTypes.INTEGER(11),
      // },         
      // created: {
      //   field: 'it_time',
      //   type: DataTypes.DATE,
      // },      
      // updated: {
      //   field: 'it_update_time',
      //   type: DataTypes.DATE,
      // },     
      // priceBTC: {
      //   field: 'price_btc',
      //   type: DataTypes.INTEGER(11),
      // },
      // priceKRW: {
      //   field: 'price_krw',
      //   type: DataTypes.INTEGER(11),
      // },      
      // priceChanged: {
      //   field: 'price_changed',
      //   type: DataTypes.STRING,
      //   allowNull: true,
      //   get() {
      //     const value = this.getDataValue('priceChanged')
      //     return value === undefined ? null : value.toString()
      //   },
      // },    
      // roi: {
      //   field: 'roi',
      //   type: DataTypes.INTEGER(11),
      // },         
      // requiredBTC: {
      //   field: 'required_btc',
      //   type: DataTypes.FLOAT(16,5),
      // },                                                    
      // requiredKRW: {
      //   field: 'required_krw',
      //   type: DataTypes.INTEGER(20),
      // },         
      // requiredCoin: {
      //   field: 'required_coin',
      //   type: DataTypes.INTEGER(20),
      // },               
      // nodes: {
      //   field: 'nodes',
      //   type: DataTypes.INTEGER(10),
      // },      
      // dailyIncome: {
      //   field: 'daily_income',
      //   type: DataTypes.INTEGER(20),
      // },
      // weeklyIncome: {
      //   field: 'weekly_income',
      //   type: DataTypes.INTEGER(20),
      // },
      // monthlyIncome: {
      //   field: 'monthly_income',
      //   type: DataTypes.INTEGER(20),
      // },
      // yearlyIncome: {
      //   field: 'yearly_income',
      //   type: DataTypes.INTEGER(20),
      // },            
      // frequency: {
      //   field: 'frequency',
      //   type: DataTypes.TEXT,
      //   get() {
      //       const value = this.getDataValue('frequency')
      //       return value === undefined ? null : value.toString()
      //     },          
      // },                  
      // supply: {
      //   field: 'supply',
      //   type: DataTypes.INTEGER(20),
      // },                 
      // homepage: {
      //   field: 'homepage',
      //   type: DataTypes.STRING(255),
      //   get() {
      //       const value = this.getDataValue('homepage')
      //       return value === undefined ? null : value.toString()
      //     },        
      // },             
      // totalRequiredBTC: {
      //   type: DataTypes.VIRTUAL,
      //   get () {
      //     return (this.getDataValue('requiredBTC') + (this.getDataValue('requiredBTC') * (15 / 100))).toFixed(6)
      //   }                      
      // }
    },
    {
      classMethods: {},
      tableName: 'history_list',
      freezeTableName: true,
      underscored: true,
      timestamps: false,
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

}
