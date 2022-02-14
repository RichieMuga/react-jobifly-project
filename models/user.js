import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please provide name'],
        minlength: 3,
        maxlength: 20,
        trim: true
    },
    email: {
        type: String,
        required: [true, 'please provide email'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'please provide password'],
        minlength: 6
    },
    LastName: {
        type: String,
        trim: true,
        default: 'lastname',
        maxlength: 20
    },
    location: {
        type: String,
        trim: true,
        maxlength: 20,
        default: 'my city'
    }
})

export default mongoose.model('User', UserSchema)