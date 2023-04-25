const catchAsync = require('../utils/catchAsync');

exports.createOrder = catchAsync(
  async (req, res, next) => {
    return res.status(200).json({
      message: 'createOrder',
    });
  }
);

exports.getAllOrderUser = catchAsync(
  async (req, res, next) => {
    return res.json({
      message: 'getAllOrderUser',
    });
  }
);

exports.updateOrder = catchAsync(
  async (req, res, next) => {
    return res.json({
      message: 'updateOrder',
    });
  }
);

exports.deleteOrder = catchAsync(
  async (req, res, next) => {
    return res.json({
      message: 'deleteOrder',
    });
  }
);
