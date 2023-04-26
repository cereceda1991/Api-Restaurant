const express = require('express');

//controllers
const mealController = require('../controllers/meals.controller');

//middlewares
const restaurantMiddleware = require('../middlewares/restaurant.middleware');
const mealMiddleware = require('../middlewares/meal.middleware');
const authMiddleware = require('../middlewares/auth.middleware');
const validationMiddleware = require('../middlewares/validation.middleware');

const router = express.Router();

router.get('/', mealController.getAllMeals);

router
  .route('/:id')
  .get(
    mealMiddleware.validIfExistMeal,
    mealController.getMealById
  )
  .all(
    authMiddleware.protect,
    authMiddleware.restrictTo('admin')
  )
  .post(
    validationMiddleware.createMealValidation,
    restaurantMiddleware.validIfExistRestaurant,
    mealController.createMeal
  )
  .all(mealMiddleware.validIfExistMeal)
  .patch(mealController.updateMeal)
  .delete(mealController.deleteMeal);

module.exports = router;
