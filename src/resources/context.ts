import { Request } from 'express'

type RequestType = {
    req: Request
}
export const context = ({ req }: RequestType) => {
    return { req }
}
