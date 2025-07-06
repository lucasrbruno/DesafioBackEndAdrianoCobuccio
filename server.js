require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = require('./src/app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`listening to port ${PORT}`));

const connectDB = require('./src/configs/database');
connectDB();