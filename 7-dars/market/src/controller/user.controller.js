import { User } from "../models/user.model.js";

export async function createUser(req, res, next) {
    try {
        const user = await User.create({ name: req.body.name });
        res.status(201).json(user);
    } catch (err) {
        next(err);
    }
}
