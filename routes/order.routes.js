const express = require('express');

//Controllers

const orderControllers = require('../controllers/orders.controller');

//Middlewares

const router = express.Router();

router.post('/', orderControllers.createOrder);

router.get(
  '/me',
  orderControllers.getAllOrderUser
);

router
  .route('/:id')
  .patch(orderControllers.updateOrder)
  .delete(orderControllers.deleteOrder);


  

module.exports = router;
