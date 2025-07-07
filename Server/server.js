const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const dotenv=require('dotenv');

// jo bhi .env me hoga vo load ho jaayega 
dotenv.config();

const app=use('express');

const port=process.env.port || 3000;
co
mongoose.con
















// // backend/server.js
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const fileRoutes = require('./routes/files');

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json()); // For parsing application/json
// app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// // MongoDB connection
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })a
// .then(() => console.log('MongoDB connected'))
// .catch((err) => console.error(' MongoDB connection failed:', err));
// // Routes
// app.use('/api/files', fileRoutes);

// // Root route
// app.get('/', (req, res) => {
//   res.send(' Welcome to the File Management API');
// });

// // Server listener
// app.listen(PORT, () => {
//   console.log(` Server is running on http://localhost:${PORT}`);
// });