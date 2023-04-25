// const Meal = require('./meal.model');
// const Order = require('./order.model');
// const Restaurant = require('./restaurant.model');
// const Review = require('./review.model');
// const User = require('./user.model');

// const initModel = () => {
//   // 1 Restaurant <-----> Meals
//   Restaurant.hasMany(Meal, {
//     foreignKey: 'restaurantId',
//   });
//   Meal.belongsTo(Restaurant, {
//     foreignKey: 'id',
//   });

//   // Meal 1 - 1 Order
//   Meal.hasOne(Order);
//   Order.belongsTo(Meal);

//   //N Order <-----> 1 User
//   Order.belongsTo(User);
//   User.hasMany(Order);

//   // 1 User <----> N Review
//   User.hasMany(Review, { foreignKey: 'userId' });
//   Review.belongsTo(User, {
//     foreignKey: 'userId',
//   });

//   // N Review <----> 1 Restaurant
//   Review.belongsTo(Restaurant, {
//     foreignKey: 'restaurantId',
//   });
//   Restaurant.hasMany(Review, {
//     foreignKey: 'restaurantId',
//   });
// };

// module.exports = initModel;

const Meal = require('./meal.model');
const Order = require('./order.model');
const Restaurant = require('./restaurant.model');
const Review = require('./review.model');
const User = require('./user.model');

const initModel = () => {
  // 1 Restaurant <-----> Meals
  Restaurant.hasMany(Meal, {
    foreignKey: 'restaurantId',
  });
  Meal.belongsTo(Restaurant, {
    foreignKey: 'id',
  });

  // Meal 1 - 1 Order
  Meal.hasOne(Order);
  Order.belongsTo(Meal);

  // N Order <-----> 1 User
  Order.belongsTo(User);
  User.hasMany(Order);

  // 1 User <----> N Review
  User.hasMany(Review, { foreignKey: 'userId' });
  Review.belongsTo(User, {
    foreignKey: 'userId',
  });

  // N Review <----> 1 Restaurant
  Review.belongsTo(Restaurant, {
    foreignKey: 'restaurantId',
  });
  Restaurant.hasMany(Review, {
    foreignKey: 'restaurantId',
  });
};

module.exports = initModel;
