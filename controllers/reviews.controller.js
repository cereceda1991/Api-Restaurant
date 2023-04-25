const Review = require('../models/review.model');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.createReview = catchAsync(
  async (req, res, next) => {
    const { comment, rating } = req.body;
    const { restaurant } = req;

    const user = req.sessionUser;

    const review = await Review.create({
      userId: user.id,
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
    const user = req.sessionUser;
    const { review } = req;

    if (review.userId !== user.id) {
      return next(
        new AppError(
          'You are not authorized to update this review',
          401
        )
      );
    }

    await Review.update(
      { comment, rating },
      {
        where: {
          id: req.params.id,
          restaurantId: req.params.restaurantId,
          userId: user.id,
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
    const user = req.sessionUser;
    const { review } = req;

    if (review.userId !== user.id) {
      return next(
        new AppError(
          'You are not authorized to update this review',
          401
        )
      );
    }

    await Review.update(
      { status: 'deleted' },
      {
        where: {
          id: req.params.id,
          restaurantId: req.params.restaurantId,
          userId: user.id,
        },
      }
    );

    res.status(200).json({
      status: 'success',
      message: 'Review has been deleted',
    });
  }
);
