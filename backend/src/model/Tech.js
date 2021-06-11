const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const TechSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

TechSchema.plugin(mongoosePaginate);

mongoose.model('Tech', TechSchema);