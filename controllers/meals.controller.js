const Meal = require('../models/meal.model');
const catchAsync = require('../utils/catchAsync');

exports.createMeal = catchAsync(
  async (req, res, next) => {
    const { name, price } = req.body;
    const { restaurant } = req;

    const meal = await Meal.create({
      name,
      price,
      restaurantId: restaurant.id,
    });

    res.status(201).json({
      status: 'success',
      data: {
        meal,
      },
    });
  }
);

exports.getAllMeals = catchAsync(
  async (req, res) => {
    const meals = await Meal.findAll({
      where: {
        status: 'active',
      },
      order: [['id', 'DESC']],
    });

    res.status(200).json({
      status: 'success',
      results: meals.length,
      data: {
        meals,
      },
    });
  }
);

exports.getMealById = catchAsync(
  async (req, res) => {
    const { meal } = req;

    res.status(200).json({
      status: 'success',
      data: {
        meal,
      },
    });
  }
);

exports.updateMeal = catchAsync(
  async (req, res) => {
    const { name, price } = req.body;
    const { meal } = req;

    await meal.update({ name, price });

    return res.status(200).json({
      status: 'success',
      message: 'The meal has been updated',
    });
  }
);

exports.deleteMeal = catchAsync(
  async (req, res) => {
    const { meal } = req;

    await meal.update({ status: 'disabled' });

    return res.status(200).json({
      status: 'success',
      message: 'Meal has been disabled',
    });
  }
);
