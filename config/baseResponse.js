const baseResponse = ({ message = '', data = null, status = 200 }) => {
  const response = {
    message,
    status,
    data,
  };
  return response;
};

module.exports = baseResponse;
