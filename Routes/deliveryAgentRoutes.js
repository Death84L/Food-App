const express = require('express');
const router = express.Router();
const {
  createDeliveryAgent,
  updateDeliveryStatus
} = require('../Controllers/DeliveryAgentController');

router.route('/delivery-agents').post(createDeliveryAgent);
router.route('/delivery-agents/:id/orders/:orderId/status').put(updateDeliveryStatus);

module.exports = router;
