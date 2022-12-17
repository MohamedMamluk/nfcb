import { Schema, model } from 'mongoose'
import { User } from '../interfaces/jwt.interface'
import bcrypt from 'bcrypt'
const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
        ],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: 6,
    },
    favorite: {
        type: [],
    },
})
UserSchema.pre('save', async function () {
    this.password = await bcrypt.hash(this.password, 10)
})
UserSchema.methods.comparePassword = async function (
    password: string
): Promise<Error | Boolean> {
    const valid = await bcrypt.compare(password, this.password)
    return valid
}
export default model<User>('User', UserSchema)
