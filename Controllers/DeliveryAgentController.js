const DeliveryAgent = require('../models/DeliveryAgentModel');
const Order = require('../models/OrderModel');

exports.createDeliveryAgent = async (req, res) => {
  const { name, available } = req.body;

  try {
    const newDeliveryAgent = new DeliveryAgent({ name, available });
    await newDeliveryAgent.save();
    res.status(201).json(newDeliveryAgent);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.updateDeliveryStatus = async (req, res) => {
  const { id, orderId } = req.params;
  const { status } = req.body;

  try {
    await Order.findByIdAndUpdate(orderId, { status });

    if (status === 'delivered') {
      await DeliveryAgent.findByIdAndUpdate(id, { available: true });
    }

    res.json({ message: 'Delivery status updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};
