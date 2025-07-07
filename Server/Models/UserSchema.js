const mongoose=require('mongoose');

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'editor', 'viewer'],
        default: 'viewer'
    },
    permissions: {
        canUpload: {
            type: Boolean,
            default: false
        },
        canDownload: {
            type: Boolean,
            default: true
        },
        canManageVersions: {
            type: Boolean,
            default: false
        },
        canShare: {
            type: Boolean,
            default: false
        }
    },
    
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', UserSchema);