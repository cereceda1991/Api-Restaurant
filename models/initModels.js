const Meal = require('./meal.model');
const Order = require('./order.model');
const Restaurant = require('./restaurant.model');
const Review = require('./review.model');
const User = require('./user.model');

const initModel = () => {
  // 1 Restaurant <-----> Meals
  Restaurant.hasMany(Meal);
  Meal.belongsTo(Restaurant);

  // Meal 1 - 1 Order
  Meal.hasOne(Order);
  Order.belongsTo(Meal);

  // N Order <-----> 1 User
  Order.belongsTo(User);
  User.hasMany(Order);

  // 1 User <----> N Review
  User.hasMany(Review);
  Review.belongsTo(User);

  // N Review <----> 1 Restaurant
  Review.belongsTo(Restaurant);
  Restaurant.hasMany(Review);
};

module.exports = initModel;
