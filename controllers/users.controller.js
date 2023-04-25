const catchAsync = require('../utils/catchAsync');
const bcrypt = require('bcryptjs');
const generateJWT = require('../utils/jwt');
const AppError = require('./../utils/appError');
const User = require('../models/user.model');
const Order = require('../models/order.model');

exports.signupUser = catchAsync(
  async (req, res, next) => {
    const { name, email, password, role } =
      req.body;

    const salt = await bcrypt.genSalt(12);
    const encryptedPassword = await bcrypt.hash(
      password,
      salt
    );

    const user = await User.create({
      name: name.toLowerCase(),
      email: email.toLowerCase(),
      password: encryptedPassword,
      role,
    });

    const token = await generateJWT(user.id);

    res.status(201).json({
      status: 'success',
      message:
        'The user has been created succesfully!',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  }
);

exports.loginUser = catchAsync(
  async (req, res, next) => {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: {
        email: email.toLowerCase(),
        status: 'active',
      },
    });

    if (!user) {
      return next(
        new AppError(
          'The user could not be found',
          404
        )
      );
    }

    if (
      !(await bcrypt.compare(
        password,
        user.password
      ))
    ) {
      return next(
        new AppError(
          'Incorrect email or password',
          401
        )
      );
    }

    const token = await generateJWT(user.id);

    res.status(200).json({
      status: 'success',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  }
);

exports.updateUser = catchAsync(
  async (req, res, next) => {
    const { name, email } = req.body;
    const { user } = req;

    await user.update({ name, email });

    return res.status(200).json({
      status: 'success',
      message: 'the user has been updated',
    });
  }
);

exports.deleteUser = catchAsync(
  async (req, res, next) => {
    const { user } = req;

    await user.update({ status: 'disabled' });

    return res.status(200).json({
      status: 'success',
      message: 'User has been disabled',
    });
  }
);

exports.getOrderUser = catchAsync(
  async (req, res, next) => {
    const { sessionUser } = req;
    const orders = await Order.findAll({
      where: {
        userId: sessionUser.id,
      },
    });
    return res.status(200).json({
      status: 'success',
      results: orders.length,
      data: {
        orders,
      },
    });
  }
);

exports.getOrderUserById = catchAsync(
  async (req, res, next) => {
    const { id } = req.params;

    // Buscar la orden en la base de datos
    const order = await Order.findOne({
      where: { id },
    });

    // Verificar si la orden existe
    if (!order) {
      return next(
        new AppError(
          `Order with id ${id} not found.`,
          404
        )
      );
    }

    // Devolver los detalles de la orden
    return res.status(200).json({
      status: 'success',
      order,
    });
  }
);
