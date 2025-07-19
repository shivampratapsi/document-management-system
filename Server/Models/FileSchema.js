const mongoose = require('mongoose');

const FileSchema = new mongoose.Schema({
    // Basic file information
    fileName: {
        type: String,
        required: true
    },
    originalName: {
        type: String,
        required: true
    },
    filePath: {
        type: String,
        required: true
    },
    fileSize: {
        type: Number,
        required: true
    },
    mimeType: {
        type: String,
        required: true
    },
    
    // Ownership
    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    
    // Version control (basic)
    version: {
        type: Number,
        default: 1
    },
    
    // File status
    isDeleted: {
        type: Boolean,
        default: false
    }
    
}, { 
    timestamps: true 
});

module.exports = mongoose.model('File', FileSchema); 