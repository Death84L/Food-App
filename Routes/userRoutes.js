const express = require('express');
const router = express.Router();
const {
  createUser,
  getRestaurants,
  placeOrder,
  leaveRating
} = require('../Controllers/UserController');

router.route('/users').post(createUser);
router.route('/restaurants').get(getRestaurants);
router.route('/orders').post(placeOrder);
router.route('/orders/:orderId/ratings').post(leaveRating);

module.exports = router;
