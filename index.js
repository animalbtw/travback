require('dotenv').config();
const express = require('express');
const cors = require('cors')
const sequelize = require('./db');

const PORT = process.env.PORT || 5001;

const app = express();
app.use(cors());
app.use(express.json());

const bootstrap = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        await app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

bootstrap()
