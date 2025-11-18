import { model, Schema } from "mongoose";

const categorySchema = new Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String }
}, {
    versionKey: false,
    timestamps: true
});

export default model('Category', categorySchema);