import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcryptjs'

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
        validate: {
            validator: validator.isEmail,
            message: "please provide valid email"
        },
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

UserSchema.pre('save', async function () {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})
UserSchema.methods.createjwt = function () {
    console.log(this);
}


export default mongoose.model('User', UserSchema)