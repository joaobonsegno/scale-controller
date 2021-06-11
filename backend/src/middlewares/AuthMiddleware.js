const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');
const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = (req, res, next) => {
    const authorization = req.headers.authorization;

    if (!authorization) {
        return res.status(401).send({error: 'No token provided'});
    }

    const parts = authorization.split(' ');

    if (!parts.length === 2) {
        return res.status(401).send({error: 'Token error'});
    }

    const [ scheme, token ] = parts;

    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).send({error: 'Malformatted token'});
    }

    jwt.verify(token, authConfig.secret, async (err, decoded) => {
        if (err) {
            return res.status(401).send({error: 'Invalid token'});
        } 

        // Verify if the user is activated in the database
        const id = decoded.id;
        const [user] = await User.find({status: true, _id: id});
        
        if (!user) 
            return res.status(401).send({error: 'Forbidden operation'});
        
        req.userId = decoded.id;

        return next();
    });
};