const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require('./routes/user.route.js')
const {authRouter} =require('./routes/auth.route.js')
mongoose
  .connect(
    "mongodb+srv://vicky105126:KuvKaHgho5Tzh7NT@mern-blog.t3btrlz.mongodb.net/"
  )
  .then(() => {
    console.log("mongoDB is connected ");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/user", userRouter);
app.use('/api/auth', authRouter);

app.use((err, req, res, next )=> {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal server Error'
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  })

})

app.listen(3000, () => {
  console.log("server is running on the port 3000!");
});




