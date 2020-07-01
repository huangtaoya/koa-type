import * as Router from 'koa-router';

import VerifyController from "../controllers/Verify";

const V = new VerifyController();

const router = new Router();



router.get('/login',V.login);


export default router.routes(); 