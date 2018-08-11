import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UserAuth from '../models/userAuth';
import env from '../../.env';

const getUser = (username) => UserAuth.findOne({username});
const passwordHash = (password) => bcrypt.hashSync(password, env.saltLength);

export const createUser = async (data) => {
  const user = await getUser(data.username);
  if (!user) {
    const registerData = {
      username: data.username,
      password: passwordHash(data.password),
      isActive: true
    };

    const newUser = new UserAuth(registerData);
    return newUser.save();
  } else {
    throw 'User already exists';
  }
};

export const generateToken = async (data) => {
  const user = await getUser(data.username);
  if(user && bcrypt.compareSync(data.password, user.password)) {
    // create a token
    return jwt.sign({ id: user._id }, env.secret, {
      expiresIn: 86400 // expires in 24 hours
    });
  } else {
    throw 'Invalid Credentials';
  }
};
