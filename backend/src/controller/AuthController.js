const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const authConfig = require('../config/auth.json');

function generateToken(userId) {
    return jwt.sign({ id: userId }, authConfig.secret, {
        expiresIn: 86400
    });
}

async function authenticate(req, res) {
    const { username, password } = req.body;
    const fields = 'techs name email cellphone telephone username password company name_lowerCase registryDate';

    let [user] = await User.find({status: true, username}).select(fields);

    if (!user) {
        return res.status(400).send({ error: 'User not found' });
    } else if (!await bcrypt.compare(password, user.password)) {
        return res.status(400).send({ error: 'Invalid password' });
    } else {
        user.password = undefined
        return res.send({
            user, 
            token: generateToken(user._id)
        });
    }
}

async function getCurrentSession(req, res) {
    const { userId } = req;

    const [user] = await User.find({status: true, _id: userId});

    if (user) {
        return res.send({user});
    } else {
        return res.status(400).send({ error: 'User not found' });
    }
}

module.exports = { authenticate, getCurrentSession }