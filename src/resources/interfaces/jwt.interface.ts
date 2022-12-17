import { Document } from 'mongoose'

interface User extends Document {
    name: string
    email: string
    password: string
    favorite: string[]

    comparePassword(password: string): Promise<Error | boolean>
}
export { User }
