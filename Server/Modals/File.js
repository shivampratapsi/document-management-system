const mongoose=requier('mongoose');

const fileSchema=new mongoose.Schema({
    realName:{
        type:String,
        required:true
    },
    
        storageName:{
            type:String,
            required:true
            
        },
        
        filePath:{
            type:String,
            required:true

        },
        size:{
            type:Number,
            required:true
        },

        mimeType:{
            type:String,
            required:true
        },

        version:{
            type:Number,
            default:1
        },

        access:{
            type:String,
            enum:['private','public']//in dono ke alawa koi aur nahi chalega
        }

    },{timestamps:true}

);

module.exports=mongoose.model('File',fileSchema);