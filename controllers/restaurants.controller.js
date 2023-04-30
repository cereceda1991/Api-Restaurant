const Restaurant = require('../models/restaurant.model');
const Review = require('../models/review.model');
const catchAsync = require('../utils/catchAsync');

exports.createRestaurant = catchAsync(async (req, res, next) => {
  const { name, address, rating } = req.body;

  const newRestaurant = await Restaurant.create({
    name,
    address,
    rating,
  });

  res.status(201).json({
    status: 'success',
    message: 'New restaurant created',
    data: {
      restaurant: newRestaurant,
    },
  });
});

exports.getAllRestaurant = catchAsync(async (req, res, next) => {
  const restaurants = await Restaurant.findAll({
    where: {
      status: 'active',
    },
    include: [{ model: Review }],
    order: [['id', 'DESC']],
  });

  res.status(200).json({
    status: 'success',
    results: restaurants.length,
    data: {
      restaurants,
    },
  });
});

exports.getRestaurantById = catchAsync(async (req, res, next) => {
  const { restaurant } = req;
  const foundRestaurant = await Restaurant.findOne({
    include: [{ model: Review }],
    where: { id: restaurant.id },
    order: [['id', 'DESC']],
  });
  res.status(200).json({
    status: 'success',
    restaurant: foundRestaurant,
  });
});

exports.updateRestaurant = catchAsync(async (req, res, next) => {
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
});

exports.deleteRestaurant = catchAsync(async (req, res, next) => {
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
});
