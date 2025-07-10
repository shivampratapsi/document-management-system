const mongoose = require('mongoose');
const FileShareSchema=mongoose.Schema({
    fileId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'File',
        required:true
    },
    sharedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    sharedWith:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    permission:{
        type: String,
        enum: ['read', 'write', 'admin'],
        default: 'read'
    },
  
  
}, { timestamps: true });

// agar user firse same file share karega toh error aayega
// warna duplicate ho jaayega 
FileShareSchema.index({ fileId: 1, sharedWith: 1 }, { unique: true });




module.exports = mongoose.model('FileSharePermission', FileShareSchema); 