import mongoose from 'mongoose';
import env from '../../.env';

const conObject =  `mongodb://${env.username}:${env.password}@ds113692.mlab.com:13692/ms`;

mongoose.Promise = global.Promise;

mongoose.connect(conObject, { useNewUrlParser: true }).then(() => {
  console.log("Successfully connected to the database");
}).catch(err => {
  console.log(conObject);
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});
