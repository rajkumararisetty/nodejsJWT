import express from 'express';
const router = express.Router();
import {addUser, getToken} from '../controllers/userAuth';

router.get('/register/:username/:password', async (req, res) => {
    const response = await addUser(req.params);
    if (response.status) {
      return res.status(500).send(response);
    }
    return res.send(response);
});

router.get('/auth/:username/:password', async (req, res) => {
  const response = await getToken(req.params);
  if (response.status) {
    return res.status(500).send(response);
  }
  return res.send(response);
});

export default router;
