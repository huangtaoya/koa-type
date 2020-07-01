import * as Koa from "koa";
import * as cors from "koa2-cors";

import router from "./routers";

const app = new Koa();

app.use(cors());

function a(ctx: any, next: any) {
    console.log("中间件a执行");
    
    next();
}

app.use(a);

app.use(router.routes());


app.listen(3001);

