import * as Router from 'koa-router';


//用户模块
import user_router from "./user";
//新闻模块
import news_router from "./news";
//验证模块
import verify_router from "./verify";


const router = new Router();

router.use("/user",user_router);

router.use("/news",news_router);

router.use("/verify",verify_router);






export default router;
