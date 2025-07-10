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
    permissions: {
        canUpload: {
            type: Boolean,
            default: true
        },
        canDownload: {
            type: Boolean,
            default: true
        },
        canManageVersions: {
            type: Boolean,
            default: true
        },
        canShare: {
            type: Boolean,
            default: true
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