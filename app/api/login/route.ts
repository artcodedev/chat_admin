

import jwt from 'jsonwebtoken';
import Token from "@/app/utils/Token"

type Data = {
    login: String
    password: String
}

import { type NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {

    const res: Data = await request.json();

    let login: String = res?.login;
    let password: String = res?.password;
    let private_key: String = Token().toString();

    // // Connect to db
    if (login == "111111" && password == "222222") {

        let token: String = jwt.sign({
            login: login,
            pass: password,
            id_user: "123456"

        }, private_key.toString(), {
            expiresIn: '1h'
        });

        return NextResponse.json({ status: true, token: token })
    }

    return NextResponse.json({ status: false, err: "[+] authorization failed" })
}
