const Restaurant = require('../models/restaurant.model');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.createRestaurant = catchAsync(
  async (req, res, next) => {
    const { name, address, rating } = req.body;

    const newRestaurant = await Restaurant.create(
      {
        name,
        address,
        rating,
      }
    );

    res.status(201).json({
      status: 'success',
      message: 'New restaurant created',
      data: {
        restaurant: newRestaurant,
      },
    });
  }
);

exports.getAllRestaurant = catchAsync(
  async (req, res, next) => {
    const restaurants = await Restaurant.findAll({
      where: {
        status: 'active',
      },
      order: [['id', 'DESC']],
    });

    res.status(200).json({
      status: 'success',
      results: restaurants.length,
      data: {
        restaurants,
      },
    });
  }
);

exports.getRestaurantById = catchAsync(
  async (req, res, next) => {
    const { restaurant } = req;

    res.status(200).json({
      status: 'success',
      restaurant,
    });
  }
);

exports.updateRestaurant = catchAsync(
  async (req, res, next) => {
    const { name, address } = req.body;
    const { restaurant } = req;

    await restaurant.update({ name, address });

    res.status(200).json({
      status: 'success',
      message: 'Restaurant updated successfully',
      data: {
        restaurant,
      },
    });
  }
);

exports.deleteRestaurant = catchAsync(
  async (req, res, next) => {
    const { restaurant } = req;

    await restaurant.update({
      status: 'disabled',
    });

    res.status(200).json({
      status: 'success',
      message: 'Restaurant has been disabled',
      data: {
        restaurant,
      },
    });
  }
);
