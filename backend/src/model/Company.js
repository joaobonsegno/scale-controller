const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const CompanySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

CompanySchema.plugin(mongoosePaginate);

mongoose.model('Company', CompanySchema);

