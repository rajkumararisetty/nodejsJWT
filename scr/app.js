import express from 'express';
import bodyParser from 'body-parser';
import authRoutes from '../scr/routes/authRoute';
import indexRoutes from '../scr/routes';

import "./config/dbConnection";

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', indexRoutes);
app.use('/user', authRoutes);

export default app;
