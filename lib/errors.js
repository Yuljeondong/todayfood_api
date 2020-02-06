/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
/* ModelError - error thrown by model includes http status to return when error is thrown in API  */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

/**
 * Extend Error with ModelError which includes (http) status.
 *
 * @param {Number} status - HTTP status for API return status
 * @param {String} message - Message associated with error
 */

class DataBaseError extends Error {
  constructor(status, message) {
    super(message)
    this.name = 'DataBase Error'
    this.status = status || 500
  }
}

class ModelError extends Error {
  constructor(status, message) {
    super(message)
    this.name = this.constructor.name
    this.status = status || 500
  }
}

class ServiceError extends Error {
  constructor(message) {
    super(message)
    this.name = 'Service Error'
    this.status = 500
  }
}

class ParameterError extends Error {
  constructor(message) {
    super(message)
    this.name = 'Parameter Error'
    this.status = 400
  }
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

module.exports = { DataBaseError, ModelError, ParameterError, ServiceError }



// var JsonWebTokenError = require('./JsonWebTokenError');

// var NotBeforeError = function (message, date) {
//   JsonWebTokenError.call(this, message);
//   this.name = 'NotBeforeError';
//   this.date = date;
// };

// NotBeforeError.prototype = Object.create(JsonWebTokenError.prototype);

// NotBeforeError.prototype.constructor = NotBeforeError;

// module.exports = NotBeforeError;