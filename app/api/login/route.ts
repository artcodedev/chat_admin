

import jwt from 'jsonwebtoken';
import Token from "@/app/utils/Token"

type Data = {
    login: string
    password: string
}

import { type NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {

    const res: Data = await request.json();

    const login: string = res?.login;
    const password: string = res?.password;
    const private_key: string = Token().toString();

    // // Connect to db
    if (login == "111111" && password == "222222") {

        const token: string = jwt.sign({
            login: login,
            pass: password,
            id_user: "123456"

        }, private_key.toString(), {
            expiresIn: '10h'
        });

        return NextResponse.json({ status: true, token: token })
    }

    return NextResponse.json({ status: false, err: "[+] authorization failed" })
}
