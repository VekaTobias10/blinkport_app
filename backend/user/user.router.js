import express from 'express';
import { getUserController} from './user.controller.js';
import { apiToAuthorizeMiddleware } from './user.middlewares.js';

const routerUser = express.Router();

routerUser.route('/').get(apiToAuthorizeMiddleware, getUserController);

export default routerUser;