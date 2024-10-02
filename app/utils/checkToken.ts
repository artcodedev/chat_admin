
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken';
import privatKey from "@/app/utils/Token"

const checkToken = () => {
    const cookieStore = cookies()
    const token = cookieStore.get('token')?.value


    if (token) {
        let decode = jwt.decode(token)

        let varify = jwt.verify(token, "32424crecj@#$%^&*())%nUGBsam?>0097^(*)&()982340", (err, decoded) => {
    
            console.log(decoded) // John
        });

        console.log("=====================================================")
        // console.log(varify)
        console.log(decode)
        console.log("=====================================================")

        // if (varify === privatKey)



        // console.log("=====================================================")
        // console.log(token_v) eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6IjExMTExMSIsInBhc3MiOiIyMjIyMjIiLCJpZF91c2VyIjoiMTIzNDU2IiwiaWF0IjoxNzI3ODY2ODk5fQ.5_A0i0Zpz9KVWgHyW609gPdiztpM8tnRF5oj-GK4JUA
        // console.log("=====================================================")

        return true
    }

    return false;
}

export default checkToken;