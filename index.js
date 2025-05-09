require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// User model
const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    required: true
  }
});

const User = mongoose.model('User', userSchema);

// GET endpoint for user by ID
app.get('/users/:id', async (req, res) => {
  try {
    const userId = req.params.id;

    // Validate ObjectId format
    if (!ObjectId.isValid(userId)) {
      return res.status(400).json({ error: 'Invalid user ID format' });
    }

    // Find user with age > 21
    const user = await User.findOne({
      _id: new ObjectId(userId),
      age: { $gt: 21 }
    });

    if (!user) {
      return res.status(404).json({ 
        error: 'User not found or does not meet age requirement (must be > 21)' 
      });
    }

    res.json({
      id: user._id,
      name: user.name,
      email: user.email,
      age: user.age
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});