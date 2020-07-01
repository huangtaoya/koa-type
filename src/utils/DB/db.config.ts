interface DbConfig {
    host: string,
    user: string,
    password: string,
    port: number,
    database: string
}

const DBCONFIG: DbConfig = {
    //数据库地址
    host: "111.67.202.41",
    //数据库用户名
    user: "huangtao",
    //数据库密码
    password: "59520abca11",
    //数据库端口
    port: 3306,
    //数据库 库名
    database: "Test"
}
export default DBCONFIG;
