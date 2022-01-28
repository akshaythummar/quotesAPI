require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const QuoteRoutes = require('./routes/quote');
const app = express();

const cors = require('cors');

app.use(cors());

const url = process.env.DB_URL; // Database url is here

mongoose
	.connect(url)
	.then(() => console.log('Connected'))
	.catch((error) => console.log(error));

app.use(express.json());

app.get('/', (req, res) => {
	res.send("Let's build an API");
});

app.use('/quote', QuoteRoutes); //middleware

app.listen(process.env.PORT || 3000);
