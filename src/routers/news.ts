import * as Router from 'koa-router';
import user_router from "./user";

const router = new Router();

router.get('/', (ctx, next) => {
    ctx.body = '我是新闻模块的路由';
});

export default router.routes();