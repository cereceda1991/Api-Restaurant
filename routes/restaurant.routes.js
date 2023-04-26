const express = require('express');

//Controllers

const restaurantController = require('../controllers/restaurants.controller');
const reviewController = require('../controllers/reviews.controller');
//Middlewares
const valitationMiddleware = require('../middlewares/validation.middleware');
const restaurantMiddleware = require('../middlewares/restaurant.middleware');
const authMiddleware = require('../middlewares/auth.middleware');
const reviewMiddleware = require('../middlewares/review.middleware');

const router = express.Router();

router
  .route('/')
  .post(
    valitationMiddleware.createRestaurantValidation,
    authMiddleware.protect,
    authMiddleware.restrictTo('admin'),
    restaurantController.createRestaurant
  )
  .get(restaurantController.getAllRestaurant);

router
  .route('/:id')
  .all(
    restaurantMiddleware.validIfExistRestaurant
  )
  .get(restaurantController.getRestaurantById)
  .patch(
    authMiddleware.protect,
    authMiddleware.restrictTo('admin'),
    restaurantController.updateRestaurant
  )
  .delete(
    authMiddleware.protect,
    authMiddleware.restrictTo('admin'),
    restaurantController.deleteRestaurant
  );

router.post(
  '/reviews/:id',
  authMiddleware.protect,
  restaurantMiddleware.validIfExistRestaurant,
  reviewController.createReview
);

router
  .route('/reviews/:restaurantId/:id')
  .patch(
    authMiddleware.protect,
    reviewMiddleware.validIfExistReview,
    reviewController.updateReview
  )
  .delete(
    authMiddleware.protect,
    reviewMiddleware.validIfExistReview,
    reviewController.deleteReview
  );

module.exports = router;
