import * as mysql from "mysql";
import config from "./db.config";







export default class DB {
    private host: string = config.host;
    private user: string = config.user;
    private password: string = config.password;
    private port: number = config.port;
    private database: string = config.database;
    //连接池
    private pool: mysql.Pool;
    //实例DB对象
    private static DBS: DB = new DB;

    private constructor() {
        this.pool = this.createPool();
    }

    static creatDB(): DB {
        return this.DBS
    }

    /**
     * 创建链接池
     */
    private createPool(): mysql.Pool {
        return mysql.createPool({
            host: this.host,
            user: this.user,
            password: this.password,
            port: this.port,
            database: this.database
        })
    };

    /**
     * 执行sql
     * @param sql sql语句
     * @param params sql语句的参数
     */
    public query(sql: string, params: Array<any>): Promise<{ results: any, fields?: mysql.FieldInfo[] }> {
        return new Promise((resolve, reject) => {
            //从连接池里获取一个连接
            this.pool.getConnection((err: mysql.MysqlError, connection: mysql.PoolConnection) => {
                //如果取出连接错误 抛出异常
                if (err) return reject(err);

                //使用连接
                connection.query(sql, params, queryCallback);

                //使用连接的回调函数
                function queryCallback(err: mysql.MysqlError, results: any, fields?: mysql.FieldInfo[]): void {
                    //连接使用完成 不再使用,释放到连接池内
                    connection.release()
                    //如果使用连接错误 抛出异常
                    if (err) return reject(err);
                    //执行完毕
                    resolve({ results, fields });
                }
            });
        })
    }
}

