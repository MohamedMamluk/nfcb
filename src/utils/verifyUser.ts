import User from '../resources/models/User'
export const verify = async (email: string) => {
    let state = false
    const user = await User.findOne({ email })
    if (user) {
        return user
    }
    return state
}
