//model for quote
const mongoose = require('mongoose');
const quoteSchema = new mongoose.Schema({
    seller_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    buyer_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    product_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    history:[{
        price:{
            type:Number,
            required:true
        },
        quantity:{
            type:Number,
            required:true
        },
        date:{
            type:Date,
            default:Date.now
        }
    }],
    status:{
        type:String,
        default:'pending',
        possible_status:['pending','accepted','rejected','negotiating'] 
    },
    deal_finalized:{
        type:Boolean,
        default:false
    },
    deal_finalized_details:
        {
            price:{
                type:Number,
                required:true
            },
            quantity:{
                type:Number,
                required:true
            }
        }
    
});