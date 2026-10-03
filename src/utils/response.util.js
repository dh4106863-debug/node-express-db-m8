const response = (res, statusCode, success, data, message = null) => {
  res.status(statusCode).json({
    success,
    data,
    message,
  });
};

module.exports = response;