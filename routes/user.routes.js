const express = require('express');

//controllers
const userController = require('../controllers/users.controller');

//middlewares

const userMiddleware = require('../middlewares/user.middleware');
const authMiddleware = require('../middlewares/auth.middleware');
const validationMiddleware = require('../middlewares/validation.middleware');
const orderMiddleware = require('../middlewares/order.middleware');

const router = express.Router();

router.post(
  '/signup',
  validationMiddleware.createUserValidation,
  userMiddleware.validEmailUniqueness,
  userController.signupUser
);
router.post(
  '/login',
  validationMiddleware.loginValidation,
  userController.loginUser
);

router.use(authMiddleware.protect);

router
  .route('/:id')
  .patch(
    userMiddleware.validIfExistUser,
    authMiddleware.protectAccountOwner,
    validationMiddleware.updateUserValidation,
    userController.updateUser
  )
  .delete(
    userMiddleware.validIfExistUser,
    authMiddleware.protectAccountOwner,
    userController.deleteUser
  );

router
  .route('/orders')
  .get(userController.getOrdersUser);

router
  .route('/orders/:id')
  .get(
    orderMiddleware.validIfExistOrder,
    userController.getOrderUserById
  );

module.exports = router;
