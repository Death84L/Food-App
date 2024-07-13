const Restaurant = require('../models/RestaurantModel');
const Order = require('../models/OrderModel');
const DeliveryAgent = require('../models/DeliveryAgentModel');

exports.createRestaurant = async (req, res) => {
  const { name, menu, online } = req.body;

  try {
    const newRestaurant = new Restaurant({ name, menu, online });
    await newRestaurant.save();
    res.status(201).json(newRestaurant);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.updateMenu = async (req, res) => {
  const { id } = req.params;
  const { menu } = req.body;

  try {
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(id, { menu }, { new: true });
    res.json(updatedRestaurant);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.updateAvailability = async (req, res) => {
  const { id } = req.params;
  const { online } = req.body;

  try {
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(id, { online }, { new: true });
    res.json(updatedRestaurant);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.processOrder = async (req, res) => {
  const { id, orderId } = req.params;
  const { accept } = req.body;

  try {
    const status = accept ? 'accepted' : 'rejected';
    await Order.findByIdAndUpdate(orderId, { status });

    if (accept) {
      const availableAgent = await DeliveryAgent.findOne({ available: true });
      await Order.findByIdAndUpdate(orderId, { deliveryAgent: availableAgent._id });
      await DeliveryAgent.findByIdAndUpdate(availableAgent._id, { available: false });
    }

    res.json({ message: 'Order updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};
