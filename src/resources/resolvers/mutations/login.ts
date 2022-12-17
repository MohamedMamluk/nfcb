import { AuthenticationError } from 'apollo-server'
import jwt from 'jsonwebtoken'
import { verify } from '../../../utils/verifyUser'
interface LoginArgs {
    input: {
        email: string
        password: string
    }
}
export const login = async (
    _: any,
    { input: { email, password } }: LoginArgs,
    context: any
) => {
    let user = await verify(email)
    if (!user) {
        throw new AuthenticationError(
            'User with this email does not exist, please check your email'
        )
    }
    const compare = await user.comparePassword(password)
    if (!compare) {
        throw new AuthenticationError('Password is incorrect')
    }
    try {
        const token = jwt.sign(
            {
                id: user._id,
                email: user.email,
                name: user.name,
            },
            process.env.JWT_SECRET as string,
            { expiresIn: '1d' }
        )
        return {
            id: user._id,
            email: user.email,
            name: user.name,
            favorite: user.favorite,
            token,
        }
    } catch (error: any) {
        throw new Error(error.message)
    }
}
