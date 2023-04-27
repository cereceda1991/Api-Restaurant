const Review = require('../models/review.model');
const catchAsync = require('../utils/catchAsync');

exports.createReview = catchAsync(
  async (req, res, next) => {
    const { comment, rating } = req.body;
    const { sessionUser, restaurant } = req;

    const review = await Review.create({
      userId: sessionUser.id,
      comment,
      restaurantId: restaurant.id,
      rating,
    });

    res.status(201).json({
      status: 'success',
      data: {
        review,
      },
    });
  }
);

exports.updateReview = catchAsync(
  async (req, res, next) => {
    const { comment, rating } = req.body;
    const { sessionUser, review } = req;

    await Review.update(
      { comment, rating },
      {
        where: {
          id: review.id,
          restaurantId: req.params.restaurantId,
          userId: sessionUser.id,
        },
      }
    );

    res.status(200).json({
      status: 'success',
      message: 'Review has been updated',
    });
  }
);

exports.deleteReview = catchAsync(
  async (req, res, next) => {
    const { sessionUser, review } = req;

    await Review.update(
      { status: 'deleted' },
      {
        where: {
          id: review.id,
          restaurantId: req.params.restaurantId,
          userId: sessionUser.id,
        },
      }
    );

    res.status(200).json({
      status: 'success',
      message: 'Review has been deleted',
    });
  }
);
