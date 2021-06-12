const mongoose = require('mongoose');

const Company = mongoose.model('Company');

module.exports = {
    async create(req, res){
        let { name } = req.body;
        let company = Company.find({name});

        if (company.length !== 0)
            return res.send({message: `Company name "${name}" is already in use`});

        company = await Company.create(req.body);

        return res.json(company);
    },

    async findAll(req, res){
        let { page = 1, limit = 10 } = req.query;

        page = parseInt(page);

        limit = parseInt(limit);

        const companies = await Company.paginate({}, {page, limit});

        return res.json(companies);
    },

    async findById(req, res){
        const company = await Company.findById(req.params.id);

        return res.json(company);
    },

    async update(req, res){
        await Company.findByIdAndUpdate(req.params.id, req.body);

        const company = await Company.findById(req.params.id);

        return res.json(company);
    },

    async delete(req, res) {
        await Company.findByIdAndRemove(req.params.id);

        return res.status(204).send();
    }
}