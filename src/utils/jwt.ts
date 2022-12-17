import jwt from 'jsonwebtoken'
import { User } from '@/resources/interfaces/jwt.interface'
const createToken = (user: User): String => {
    const token = jwt.sign(user, process.env.JWT_SECRET as string, {
        expiresIn: '1d',
    })
    return token
}

export { createToken }
