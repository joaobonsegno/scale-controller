const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

const User = mongoose.model('User');
const Tech = mongoose.model('Tech');
const Company = mongoose.model('Company');

module.exports = {
    async create(req, res){
        let { username, name, password } = req.body;
        let user = User.find({username});

        if (user.length !== 0)
            return res.send({message: `Username "${username}" is already in use`});

        password = await bcrypt.hash(password, 10);
        req.body.password = password;
        req.body.name_lowerCase = name.toLowerCase();

        user = await User.create(req.body);
        user.password = undefined;
        return res.json(user);
    },

    async findById(req, res) {
        try {
            const user = await User.findById(req.params.id);

            // GETTING 'COMPANY' AND THE 'TECHS' OF THE USER FROM THE DATABASE
            user.company = await Company.findById(user.company);    

            for(let i = 0; i < user.techs.length; i++){
                user.techs[i] = await Tech.findById(user.techs[i]);
            }

            // RETURNING THE USER WITH ALL OF HIS FIELDS
            return res.json(user);
        } catch (ex) {
            return res.status(400).send({error: 'User not found'});
        }
    },

    async findByName(req, res){
        let { search = '', page = 1, limit = 10, status = true } = req.query;

        page = parseInt(page);

        limit = parseInt(limit);

        let users = {};

        if (search === ''){
            users = await User.paginate({status: status}, {sort: 'name_lowerCase', page, limit});
        }else{
            const searchRegex = new RegExp('^' + search.toLowerCase());

            users = await User.paginate({status: status, name_lowerCase: searchRegex}, {sort: 'name_lowerCase', page, limit});
        }

        return res.json(users);
    },

    async changeStatus(req, res){
        const user = await User.findById(req.params.id);

        user.status = !user.status;

        await User.findByIdAndUpdate(user.id, user);

        return res.json(user);
    },

    async update(req, res){
        await User.findByIdAndUpdate(req.params.id, req.body);

        const user = await User.findById(req.params.id);

        return res.json(user);
    },

    async delete(req, res) {
        await User.findByIdAndRemove(req.params.id);

        return res.send("User successfully deleted");
    }
}