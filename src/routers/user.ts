import * as Router from 'koa-router';

import UserController from "../controllers/User";

var U = new UserController();

const router = new Router();



router.get('/login', U.login);




export default router.routes();