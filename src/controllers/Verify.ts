import {ExtendableContext} from "koa";
import * as svgCaptcha from "svg-captcha";

type Next = () => Promise<any>;


/**
 * 验证码类
 */

export default class VerifyController {

    /**
     *创建登录验证码
     */
    public login = (ctx: ExtendableContext, next: Next): void => {
        const _data = this.createLetterImage();
        ctx.body = {
            code: 1,
            svg: _data.svg,
        }
    };

    /**
     * 创建字母验证码
     * */
    private createLetterImage(): { svg: string, text: string } {
        const cap = svgCaptcha.create({
            size: 4, // 验证码长度
            width: 160,
            height: 60,
            fontSize: 50,
            ignoreChars: '0oO1ilI', // 验证码字符中排除 0o1i
            noise: 2, // 干扰线条的数量
            color: true, // 验证码的字符是否有颜色，默认没有，如果设定了背景，则默认有
            background: '#eee' // 验证码图片背景颜色
        });

        let svg: string = cap.data // 验证码
        let text: string = cap.text.toLowerCase() // 验证码字符，忽略大小写
        return {
            svg: svg,
            text: text
        }

    }

}

