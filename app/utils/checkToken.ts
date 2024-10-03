
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken';
import Token from "@/app/utils/Token"



interface TokenInterface {
    login: String
    pass: String
    id_user: String
    iat?: Number
    exp?: Number
}


const checkToken = () => {

    try {

        const cookieStore = cookies()
        const token = cookieStore.get('token')?.value

        if (token) {

            const token_decode = jwt.verify(token, Token());

            if ((token_decode as TokenInterface).id_user) { return true }
        }

    } catch (e) {
        return false
    }

    return false

}

export default checkToken;