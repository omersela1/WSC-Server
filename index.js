const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const resultsRouter = require('./Routers/results');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/Results', resultsRouter);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
