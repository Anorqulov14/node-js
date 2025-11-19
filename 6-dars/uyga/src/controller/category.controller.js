import Category from '../schema/category.schema.js';

class CategoryController {
    async create(req, res) {
        try {
            const newUser = await Category.create(req.body);
            return res.status(201).json({
                statusCode: 201,
                message: 'success',
                data: newUser
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: error.message || 'Internal server error'
            });
        }
    }

    async findAll(_req, res) {
        try {
            const categories = await Category.find();
            return res.status(200).json({
                statusCode: 200,
                message: 'success',
                data: categories
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: error.message || 'Internal server error'
            });
        }
    }

    async findOne(req, res) {
        try {
            const category = await Category.findById(req.params.id);
            if (!category) {
                return res.status(404).json({
                    message: 'not found'
                });
            }
            return res.status(200).json({
                statusCode: 200,
                message: 'success',
                data: category
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: error.message || 'Internal server error'
            });
        }
    }

    async update(req, res) {
        try {
            const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!category) {
                return res.status(404).json({
                    message: 'not found'
                });
            }
            return res.status(200).json({
                statusCode: 200,
                message: 'success',
                data: category
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: error.message || 'Internal server error'
            });
        }
    }

    async remove(req, res) {
        try {
            const category = await Category.findByIdAndDelete(req.params.id);
            if (!category) {
                return res.status(404).json({
                    message: 'not found'
                });
            }
            return res.status(200).json({
                statusCode: 200,
                message: 'success',
                data: {}
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: error.message || 'Internal server error'
            });
        }
    }
}

export default new CategoryController();