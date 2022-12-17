import User from '../../../resources/models/User'
import { AuthenticationError } from 'apollo-server'
import jwt from 'jsonwebtoken'
import { verify } from '../../../utils/verifyUser'
interface RegisterArgs {
    input: {
        name: String
        email: string
        password: String
    }
}
export const register = async (
    _p: any,
    { input: { name, email, password } }: RegisterArgs,
    _c: any
) => {
    const checkEmail = verify(email)
    if (!checkEmail) {
        throw new AuthenticationError('Email already exists')
    }
    try {
        const user = await User.create({ name, email, password })
        if (!user) {
            throw new Error('Something went wrong!')
        }
        const token = jwt.sign(
            {
                email: user.email,
                name: user.name,
                password: user.password,
                id: user._id,
            },
            process.env.JWT_SECRET as string,
            {
                expiresIn: '1d',
            }
        )
        return {
            email: user.email,
            name: user.name,
            password: user.password,
            id: user._id,
            favorite: user.favorite,
            token,
        }
    } catch (error: any) {
        throw new Error(error.message)
    }
}
