const Meal = require('../models/meal.model');
const Restaurant = require('../models/restaurant.model');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.createMeal = catchAsync(
  async (req, res, next) => {
    const { id } = req.params;
    const { name, price } = req.body;

    const restaurant = await Restaurant.findByPk(
      id
    );

    if (!restaurant) {
      return next(
        new AppError('Restaurant not found', 404)
      );
    }

    const menuItem = await Meal.create({
      name,
      price,
      restaurantId: restaurant.id,
    });

    res.status(201).json({
      status: 'success',
      message:
        'New menu item created successfully',
      data: {
        menuItem,
      },
    });
  }
);

exports.getAllMeals = catchAsync(
  async (req, res, next) => {
    return res.json({
      message: 'getMeals',
    });
  }
);

exports.getMealsById = catchAsync(
  async (req, res, next) => {
    return res.json({
      message: 'getMealsById',
    });
  }
);

exports.updateMeal = catchAsync(
  async (req, res, next) => {
    return res.json({
      message: 'updateMeal',
    });
  }
);

exports.deleteMeal = catchAsync(
  async (req, res, next) => {
    return res.json({
      message: 'deleteMeal',
    });
  }
);
