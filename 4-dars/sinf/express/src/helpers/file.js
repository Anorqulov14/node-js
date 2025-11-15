import { readFile,writeFile } from "fs";
import { join } from "path";


const path = join('data/users')

export async function getUsers() {
    try {
        const user = await readFile(path,"utf-8")
        return JSON.parse(user)
    } catch (error) {
        console.log("user olishda xato", error.message)
    }
}

export async function setUsers(data) {
    try {
        await writeFile(path, JSON.stringify(data,null,2))
    } catch (error) {
        console.log("xato",error.message);
    }
}
