import DB from "../utils/DB/db";
const db = DB.creatDB();


export default class User {
    public async login(name: string, password: string) {
        return await db.query('SELECT * FROM users WHERE name = ? and password = ?', [name, password]);
    }
}

