const mongoose = require('mongoose');

const Tech = mongoose.model('Tech');

module.exports = {
    async create(req, res){
        let { name } = req.body;
        let tech = Tech.find({name});

        if (tech.length !== 0)
            return res.send({message: `Tech name "${name}" is already in use`});

        tech = await Tech.create(req.body);

        return res.json(tech);
    },

    async findAll(req, res){
        let { page = 1, limit = 10 } = req.query;

        page = parseInt(page);

        limit = parseInt(limit);

        const techs = await Tech.paginate({},{ page, limit});

        return res.json(techs);
    },

    async findById(req, res){
        const tech = await Tech.findById(req.params.id);

        return res.json(tech);
    },

    async update(req, res){
        await Tech.findByIdAndUpdate(req.params.id, req.body);

        const tech = await Tech.findById(req.params.id);

        return res.json(tech);
    },

    async delete(req, res) {
        await Tech.findByIdAndRemove(req.params.id);

        return res.send("Tech successfully deleted");
    }
}