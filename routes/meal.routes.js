const express = require('express');

//controllers
const mealController = require('../controllers/meals.controller');

//middlewares

const router = express.Router();

router.get('/', mealController.getAllMeals);

router
  .route('/:id')
  .post(mealController.createMeal)
  .get(mealController.getMealsById)
  .patch(mealController.updateMeal)
  .delete(mealController.deleteMeal);

module.exports = router;
