const express = require('express');

//Controllers

const orderControllers = require('../controllers/orders.controller');

//Middlewares
const authMiddleware = require('../middlewares/auth.middleware');
const orderMiddleware = require('../middlewares/order.middleware');

const router = express.Router();

// Proteger todas las rutas con authMiddleware.protect
router.use(authMiddleware.protect);

router.post('/', orderControllers.createOrder);

router.get('/me', orderControllers.getAllOrderUser);

router
  .route('/:id')
  .all(
    // authMiddleware.protectAccountOwner,
    orderMiddleware.validIfExistOrder
  )
  .patch(orderControllers.updateOrder)
  .delete(orderControllers.deleteOrder);

module.exports = router;
