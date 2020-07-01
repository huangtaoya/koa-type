import { ExtendableContext } from "koa";
import User from "../dbhelpers/User";




/**
 * 登录请求参数
 */
interface LoginReq {
    name: string, //登录名
    password: string,//登录密码
    verify: string,//验证码
}
/**
 * 登录返回参数
 * */
interface LoginRes {

}
type Next = () => Promise<any>;







export default class UserController {
    userServe: User;
    constructor() {
        this.userServe = new User();
        this.login = this.login.bind(this);
    }

    /**
     * 登录接口
     * */
    public async login(ctx: ExtendableContext, next: Next): Promise<void> {

        const { name, password } = <LoginReq>ctx.request.query;

        if (name === "") {
            ctx.body = {
                code: 0,
                data: {},
                msg: "name字段不能为空!"
            }
            return;
        }
        if (typeof name != "string") {
            ctx.body = {
                code: 0,
                data: {},
                msg: "name字段应该是string类型!"
            }
            return;
        }
        if (password === "") {
            ctx.body = {
                code: 0,
                data: {},
                msg: "password字段不能为空!"
            }
            return;
        }
        if (typeof password != "string") {
            ctx.body = {
                code: 0,
                data: {},
                msg: "password字段应该是string类型!"
            }
            return;
        }






        try {

            const { results } = await this.userServe.login(name, password);

            if (results.length == 0) {
                ctx.body = {
                    code: 0,
                    data: {},
                    msg: "账号或密码错误!"
                }
            }

        } catch (error) {
            ctx.body = {
                code: 0,
                data: {},
                msg: "服务错误!"
            }
        }

    };

    /**
     * 注册接口
     */
    public reg(ctx: ExtendableContext, next: Next): void {

    }

}