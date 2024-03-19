// server/routes/auth.js
import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'
const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) throw new Error('User not found');
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) throw new Error('Invalid password');
    const token = jwt.sign({ userId: user._id }, 'secret_key');
    res.status(200).json({ message: "sucess" });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

// router.post("/register", async (req, res) => {
//   const { email, password } = req.body;
//   const user = await User.findOne({ email }).exec();
//   if (user) {
//     res.status(500);
//     res.json({
//       message: "user already exists",
//     });
//     return;
//   }
//   await User.create({ email, password });
//   res.json({
//     message: "success",
//   });
// });

// router.post("/login", async (req, res) => {
//   const { username, password } = req.body;
//   const user = await User.findOne({ username }).exec();
//   if (!user || user.password !== password) {
//     res.status(403);
//     res.json({
//       message: "invalid login",
//     });
//     return;
//   }
//   res.json({
//     message: "success",
//   });
// });


export default router
