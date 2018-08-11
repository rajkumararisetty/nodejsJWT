import {createUser, generateToken} from '../services/userService';

export const addUser = async (data) => {
  try {
    const response = await createUser(data);
    return {status: 0, message: 'user successfully created'};
  } catch (error) {
    return {status: 1, message: error};
  }
};

export const getToken = async (data) => {
  try {
    const token = await generateToken(data);
    return {status: 0, message: token};
  } catch (error) {
    return {status: 1, message: error};
  }
};
