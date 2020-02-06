const mysql = require('mysql2/promise')
const appconfig = require('../config/appconfig')
const {
    DataBaseError
} = require('./errors.js')

// create the pool
let pool
exports.pool = () => {
    if (pool) return pool

    pool = mysql.createPool({
        host: appconfig.dbconfig.host,
        user: appconfig.dbconfig.user,
        password: appconfig.dbconfig.password,
        database: appconfig.dbconfig.database,
        waitForConnections: true,
        port: appconfig.dbconfig.port,
        connectionLimit: 5,
        namedPlaceholders: true,
        typeCast: function (field, next) {
            if (field.type == 'VAR_STRING') {
                return field.string();
            }
            return next()
        }
    })

    return pool
}


// * out => data object
exports.get = async (sql, parameter, transaction) => {
    try {

        let conn = transaction
        if (!transaction) conn = await this.pool().getConnection()

        const q = conn.format(sql, parameter)
        // console.log(q)

        const [result] = await conn.query(q)



        if (!transaction) await conn.release()
        return result[0] 
    } catch (error) {
        switch (error.code) { // just use default MySQL messages for now
        case 'ER_BAD_NULL_ERROR':
        case 'ER_DUP_ENTRY':
        case 'ER_ROW_IS_REFERENCED_2':
        case 'ER_NO_REFERENCED_ROW_2':
            throw new DataBaseError(403, error.message) // Forbidden
        case 'ER_BAD_FIELD_ERROR':
            throw new DataBaseError(500, error.message) // Internal Server Error for programming errors
        default:
        // Log.exception('Reservation.cancle', e)
            throw new DataBaseError(500, error.message) // Internal Server Error for uncaught exception
        }
    }
}

// * out => data list
exports.list = async (sql, parameter, transaction) => {
    try {

        let conn = transaction
        if (!transaction) conn = await this.pool().getConnection()

        const [result] = await conn.query(sql, parameter)

        if (!transaction) await conn.release()
        return result

    } catch (error) {
        switch (error.code) { // just use default MySQL messages for now
        case 'ER_BAD_NULL_ERROR':
        case 'ER_DUP_ENTRY':
        case 'ER_ROW_IS_REFERENCED_2':
        case 'ER_NO_REFERENCED_ROW_2':
            throw new DataBaseError(403, error.message) // Forbidden
        case 'ER_BAD_FIELD_ERROR':
            throw new DataBaseError(500, error.message) // Internal Server Error for programming errors
        default:
        // Log.exception('Reservation.cancle', e)
            throw new DataBaseError(500, error.message) // Internal Server Error for uncaught exception
        }
    }
}


// * out => insertId
exports.create = async (sql, parameter, transaction) => {
    try {

        let conn = transaction
        if (!transaction) conn = await this.pool().getConnection()

        const q = conn.format(sql, parameter)
        
        const [result] = await conn.query(q)
        // const [result] = await conn.query(sql, parameter)

        if (!transaction) await conn.release() 
        return result.insertId

    } catch (error) {
        switch (error.code) { // just use default MySQL messages for now
        case 'ER_BAD_NULL_ERROR':
        case 'ER_DUP_ENTRY':
        case 'ER_ROW_IS_REFERENCED_2':
        case 'ER_NO_REFERENCED_ROW_2':
            throw new DataBaseError(403, error.message) // Forbidden
        case 'ER_BAD_FIELD_ERROR':
            throw new DataBaseError(500, error.message) // Internal Server Error for programming errors
        default:
        // Log.exception('Reservation.cancle', e)
            throw new DataBaseError(500, error.message) // Internal Server Error for uncaught exception
        }
    }
}

// * out => true, false
exports.update = async (sql, parameter, transaction) => {
    try {

        let conn = transaction
        if (!transaction) conn = await this.pool().getConnection()

        const [result] = await conn.query(sql, parameter)

        if (result.affectedRows === 0) throw new DataBaseError(500, 'UpdateFail')
        if (!transaction) await conn.release()

    } catch (error) {
        switch (error.code) { // just use default MySQL messages for now
        case 'ER_BAD_NULL_ERROR':
        case 'ER_DUP_ENTRY':
        case 'ER_ROW_IS_REFERENCED_2':
        case 'ER_NO_REFERENCED_ROW_2':
            throw new DataBaseError(403, error.message) // Forbidden
        case 'ER_BAD_FIELD_ERROR':
            throw new DataBaseError(500, error.message) // Internal Server Error for programming errors
        default:
        // Log.exception('Reservation.cancle', e)
            throw new DataBaseError(500, error.message) // Internal Server Error for uncaught exception
        }
    }
}

// * out => true, false
exports.delete = async (sql, parameter, transaction) => {
    try {

        let conn = transaction
        if (!transaction) conn = await this.pool().getConnection()

        const [result] = await conn.query(sql, parameter)
        if (result.affectedRows === 0) throw new DataBaseError(500, 'Delete Fail')
        if (!transaction) await conn.release()

    } catch (error) {
        switch (error.code) { // just use default MySQL messages for now
        case 'ER_BAD_NULL_ERROR':
        case 'ER_DUP_ENTRY':
        case 'ER_ROW_IS_REFERENCED_2':
        case 'ER_NO_REFERENCED_ROW_2':
            throw new DataBaseError(403, error.message) // Forbidden
        case 'ER_BAD_FIELD_ERROR':
            throw new DataBaseError(500, error.message) // Internal Server Error for programming errors
        default:
        // Log.exception('Reservation.cancle', e)
            throw new DataBaseError(500, error.message) // Internal Server Error for uncaught exception
        }
    }
}


// https://github.com/sidorares/node-mysql2/blob/master/documentation/Promise-Wrapper.md`