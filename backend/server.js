const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

app.use(cors());
app.use(express.json());

const conn = "mongodb+srv://smitp1597:smit01051997@nodejs.kjau2.mongodb.net/MERN-exercise?retryWrites=true&w=majority";
mongoose.connect(conn, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true})
.then((result) => app.listen(5000, () => {console.log('Server is running on port: 5000');}))
.catch((err) => console.log(err));

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter); 