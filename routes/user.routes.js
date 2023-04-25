const express = require('express');

//controllers
const userController = require('../controllers/users.controller');

//middlewares

const userMiddleware = require('../middlewares/user.middleware');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.post(
  '/signup',
  userMiddleware.validEmailUniqueness,
  userController.signupUser
);
router.post('/login', userController.loginUser);

router.use(authMiddleware.protect);

router
  .route('/:id')
  .patch(
    userMiddleware.validIfExistUser,
    authMiddleware.protectAccountOwner,
    userController.updateUser
  )
  .delete(
    userMiddleware.validIfExistUser,
    authMiddleware.protectAccountOwner,
    userController.deleteUser
  );

router.get(
  '/orders',
  userController.getOrderUser
);
router.get(
  '/orders/:id',
  userController.getOrderUserById
);

module.exports = router;
