import { createServer } from 'http'
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const mypath = join(process.cwd(),'data/users.json');
async function getUsers() {
    try {
        const user = await readFile(mypath,"utf-8")
        return JSON.parse(user)
    } catch (error) {
        console.log("user olishda xato", error.message)
    }
}

async function writeUsers(data) {
    try {
        await writeFile(mypath, JSON.stringify(data,null,2))
    } catch (error) {
        console.log("xato",error.message);
    }
}
const server = createServer(async (req,res)=>{
    res.setHeader('Content-Type','application/json')
    if (req.url === '/users' && req.method ==='GET') {
        const myuser = await getUsers()
        res.writeHead(200)
        return res.end(JSON.stringify(myuser));
    }
    if (req.url === '/users' && req.method === 'POST') {
        let body = ''
        req.on('data', async chunk =>{
            body += chunk
        })
        req.on('end', async ()=>{
            const users = await getUsers()
            const newUser = { id : users.at(-1)?.id +1, ...JSON.parse(body)}
            users.push(newUser)
            await writeUsers(users)
            res.writeHead(201)
            return []
        })
    }
    else{
        res.writeHead(404)
        res.end("not found")
    }
})

server.listen(3000, ()=>console.log("server listening"))
