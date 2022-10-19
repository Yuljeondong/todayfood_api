const mongoose = require('mongoose')
const appconfig = require('../config/appconfig')

module.exports = () => {
    function connect() {
        var db = mongoose.connect(appconfig.mdbconfig.host + appconfig.mdbconfig.database, function (err) {
            if (err) {
                console.error('mongodb connection error', err);
            }
            console.log('mongodb connected');
        });
    }
    connect();
    mongoose.connection.on('disconnected', connect);
    // const { Player, History, Favorite, Food } = require('../models')
    require('../models/Player');
};