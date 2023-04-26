const Meal = require('../models/meal.model');
const Order = require('../models/order.model');
const Restaurant = require('../models/restaurant.model');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.validIfExistOrder = catchAsync(
  async (req, res, next) => {
    const { id } = req.params;

    const order = await Order.findOne({
      where: {
        id,
        status: 'active',
      },
      include: [
        {
          model: Meal,
          include: [Restaurant],
        },
      ],
    });

    if (!order) {
      return next(
        new AppError(
          'Order with the provided ID was not found.',
          404
        )
      );
    }

    req.order = order;
    next();
  }
);
