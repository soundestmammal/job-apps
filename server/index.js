const express = require('express');
require('./db/mongoose');

const app = express();
const PORT = process.env.PORT || 3030;

// Models
const User = require('./models/user');

// Routers
const userRouter = require('./routes/user');

app.use(express.json());
app.use(userRouter);

app.listen(PORT, () => {
    console.log("The server is up on port", PORT);
});