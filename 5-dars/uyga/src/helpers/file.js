import { readFile, writeFile } from "fs/promises";
import { join } from "path";

const dataPath = (file) => join(process.cwd(), "src", "data", file);

export async function readJSON(file) {
    const data = await readFile(dataPath(file), "utf-8");
    return JSON.parse(data);
}

export async function writeJSON(file, data) {
    await writeFile(dataPath(file), JSON.stringify(data, null, 4));
}
