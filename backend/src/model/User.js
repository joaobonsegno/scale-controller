const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Tech = require('./Tech');
const Company = require('./Company');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    name_lowerCase: {
        type: String
    },
    registryDate: {
        type: Date,
        default: Date.now
    },
    email:{
        type: String,
        required: true
    },
    cellphone: {
        type: String,
    },
    telephone: {
        type: String,
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    status: {
        type: Boolean,
        required: true,
        default: true
    },
    techs: [{
        type: mongoose.Schema.ObjectId, ref: 'Tech'
    }],
    company: {
        type: mongoose.Schema.ObjectId, ref: 'Company'
    }
});

UserSchema.plugin(mongoosePaginate);

mongoose.model('User', UserSchema);