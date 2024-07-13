const User = require('../models/UserModel');
const Order = require('../models/OrderModel');
const Rating = require('../models/RatingModel');
const Restaurant = require('../models/RestaurantModel');

exports.createUser = async (req, res) => {
  const { username, email } = req.body;

  try {
    const newUser = new User({ username, email });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find({ online: true });
    res.json(restaurants);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.placeOrder = async (req, res) => {
  const { userId, restaurantId, items } = req.body;

  try {
    const order = new Order({ user: userId, restaurant: restaurantId, items, status: 'pending' });
    await order.save();
    await User.findByIdAndUpdate(userId, { $push: { orders: order._id } });
    res.json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.leaveRating = async (req, res) => {
  const { orderId } = req.params;
  const { rating, comment } = req.body;

  try {
    const newRating = new Rating({ order: orderId, rating, comment });
    await newRating.save();
    await Order.findByIdAndUpdate(orderId, { rating: newRating._id });
    res.json(newRating);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};
