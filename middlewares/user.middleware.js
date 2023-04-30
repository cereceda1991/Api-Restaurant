const User = require('../models/user.model');
const AppError = require('../utils/appError');
const catchAsync = require('./../utils/catchAsync');

exports.validIfExistUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const user = await User.findOne({
    where: {
      id,
      status: 'active',
    },
  });

  if (!user) {
    return next(new AppError('User not found', 404));
  }

  req.user = user;
  next();
});

exports.validEmailUniqueness = catchAsync(async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findOne({
    where: { email: email.toLowerCase() },
  });

  if (user) {
    return next(new AppError('Email already exists', 400));
  }

  next();
});
