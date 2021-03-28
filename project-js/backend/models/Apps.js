const mongoose = require('mongoose');
const Schema = mongoose.Schema

let appsSchema = new Schema({
    app_name:{
        type:String
    },
    dev_name:{
        type:String
    },
    icon:{
        type:String
    },
    preview:{
        type:[String]
    },
    des:{
        type:String
    },
    category:{
        type:String
    },
    link:{
        type:String
    },
    create_on:{
        type:Date,
        default:Date.now
    }
},{
    colllection : 'apps'
});
module.exports = mongoose.model('Apps',appsSchema)