const express = require('express');
const router = express.Router();
const {
  createRestaurant,
  updateMenu,
  updateAvailability,
  processOrder
} = require('../Controllers/RestaurantController');

router.route('/restaurants').post(createRestaurant);
router.route('/restaurants/:id/menu').put(updateMenu);
router.route('/restaurants/:id/availability').put(updateAvailability);
router.route('/restaurants/:id/orders/:orderId').post(processOrder);

module.exports = router;
