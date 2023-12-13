const response = (status, data, message, res) => {
  res.status(status).json({
    payload: {
      status: status,
      data: data,
      message: message,
    },
    // pagination: {
    //   prev: "",
    //   next: "",
    //   max: "",
    // },
  });
};

module.exports = response;
