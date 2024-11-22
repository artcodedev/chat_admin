
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

        const token = cookies().get('token')?.value

        return token && (jwt.verify(token, Token()) as TokenInterface)?.id_user ? true : false

    } catch (e) {
        return false
    }

}

export default checkToken;