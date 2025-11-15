import { readJSON, writeJSON } from "../helpers/file.js";

export default class CountryController {

    async getAll(req, res) {
        const countries = await readJSON("countries.json");
        res.json(countries);
    }

    async getById(req, res) {
        const id = Number(req.params.id);
        const countries = await readJSON("countries.json");

        const country = countries.find(c => c.id === id);
        if (!country) {
            return res.status(404).json({ message: "Country not found" });
        }

        res.json(country);
    }

    async create(req, res) {
        const countries = await readJSON("countries.json");

        const newItem = {
            id: countries.length ? countries.at(-1).id + 1 : 1,
            name: req.body.name,
            code: req.body.code
        };

        countries.push(newItem);
        await writeJSON("countries.json", countries);

        res.status(201).json(newItem);
    }

    async update(req, res) {
        const id = Number(req.params.id);
        const countries = await readJSON("countries.json");

        const index = countries.findIndex(c => c.id === id);
        if (index === -1) {
            return res.status(404).json({ message: "Country not found" });
        }

        countries[index] = {
            ...countries[index],
            ...req.body
        };

        await writeJSON("countries.json", countries);
        res.json(countries[index]);
    }

    async delete(req, res) {
        const id = Number(req.params.id);
        const countries = await readJSON("countries.json");

        const index = countries.findIndex(c => c.id === id);
        if (index === -1) {
            return res.status(404).json({ message: "Country not found" });
        }

        const deleted = countries[index];
        countries.splice(index, 1);

        await writeJSON("countries.json", countries);

        res.json({ message: "Deleted successfully", deleted });
    }
}
