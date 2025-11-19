import express from "express";
import { getUsers,setUsers } from './helpers/file.js'

const app = express();
app.use(express.json());


app.get("/users", async (req, res) => {
    const users = await getUsers();
    res.json(users);
});

app.get("/users/:id", async (req, res) => {
    const users = await getUsers();
    const user = users.find(u => u.id == req.params.id);

    if (!user) return res.status(404).json({ message: "User topilmadi!" });

    res.json(user);
});

app.post("/users", async (req, res) => {
    const users = await getUsers();
    const newUser = {
        id: Date.now(),
        name: req.body.name,
        age: req.body.age
    };

    users.push(newUser);
    await setUsers(users);

    res.status(201).json(newUser);
});

app.put("/users/:id", async (req, res) => {
    const users = await getUsers();
    const idx = users.findIndex(u => u.id == req.params.id);

    if (idx === -1) return res.status(404).json({ message: "User topilmadi!" });

    users[idx] = { ...users[idx], ...req.body };

    await setUsers(users);
    res.json(users[idx]);
});

app.delete("/users/:id", async (req, res) => {
    const users = await getUsers();
    const newUsers = users.filter(u => u.id != req.params.id);

    await setUsers(newUsers);
    res.json({ message: "User o‘chirildi!" });
});


app.listen(5000, () => {
    console.log("Server 5000-portda ishlayapti...");
});
