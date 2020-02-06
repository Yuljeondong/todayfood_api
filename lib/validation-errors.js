exports.empty = (value) => {
  if (value === '' || value === null || value === undefined)
    // throw new ParameterError( '파라미터 에러')
    return true

  return false
}
