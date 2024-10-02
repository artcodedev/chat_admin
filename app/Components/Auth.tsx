

'use client'

import { useEffect } from "react"
import { useRouter } from 'next/navigation';

import style from "@/app/style/Auth/Auth.module.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import React from 'react';

import { useCookies } from 'react-cookie';


export default function Auth() {

    const router = useRouter()

    const [showPass, setShowPass] = React.useState<boolean>(true);
    const [checkPass, setCheckPass] = React.useState<boolean>(false)
    const [isValidePass, setIsValidePass] = React.useState<boolean>(false)
    const [isValideLogin, setIsValideLogin] = React.useState<boolean>(false)
    const [reload, setReload] = React.useState<boolean>(false)
    const [danger, setDanger] = React.useState<boolean>(false);
    const [login, setLogin] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const [cookies, setCookie] = useCookies(['token']);
    

    useEffect(() => {
        if(reload) router.replace("/admin")
    })

    const show_pass = () => setShowPass(showPass ? false : true);

    const sendData = () => {

        if (login.length < 3) setIsValideLogin(true)
        if (password.length < 3) setIsValidePass(true)

        if (login.length > 5 && password.length > 5) {

            setCheckPass(checkPass == false ? true : false)

            fetch("/api/login", {
                method: "POST",
                mode: "no-cors",
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
              
                body: JSON.stringify({
                  login: login,
                  password: password
                })
            })
            .then( (response) => response.json())
            .then(r => {

                console.log(r)

                if (r.status) {
                    setCookie("token", r.token)
                    setReload(true);
                }
                else {
                    
                    setIsValidePass(true);
                    setIsValideLogin(true);
                    setCheckPass(false)
                }

            })
            .catch((err) => {
                setDanger(true);
                setCheckPass(false)
                setTimeout(() => {setDanger(false)}, 3000);
            })


        }
        // setTimeout(() => {setDanger(false)}, 3000);
        // setCheckPass(checkPass == false ? true : false)
    }

    const loginFocus = () => { setIsValideLogin(false) }
    const passFocus = () => { setIsValidePass(false) }


    const loginChange = (e: any) => {
        setLogin(e.target.value)
    }

    const passChange = (e: any) => {
        setPassword(e.target.value)
    }


    return (


        <div className={style['Auth']}>

            <div className={`${style['Auth__wrapper']} ${style['Auth__flex_p']}`}>

                <div className={style['Auth__modal']}>

                    <div className={style['Auth__title']}>
                        <div className={style['Auth__title__txt']}>Войти</div>
                    </div>

                    {danger ? <Alert key={"danger"} variant={"danger"}>Произошла ошибка!</Alert> : ""}

                    <div className={style["Auth__pole"]}>

                        <Form.Control type="email"
                            placeholder="Логин"
                            disabled={checkPass}
                            className={style["Auth__pole__input"]}
                            onChange={loginChange}
                            onFocus={loginFocus}
                            isInvalid={isValideLogin} />

                    </div>

                    <div className={style["Auth__pole"]}>

                        <InputGroup className="mb-3">
                            <Form.Control
                                type={showPass ? "password" : "text"}
                                placeholder="Пароль"
                                disabled={checkPass}
                                onChange={passChange}
                                onFocus={passFocus}
                                isInvalid={isValidePass} />
                            <Button variant="outline-secondary" onClick={show_pass}>
                                {showPass ? <i className="bi bi-eye"></i> : <i className="bi bi-eye-slash"></i>}
                            </Button>
                        </InputGroup>
                    </div>

                    <div className={style['Auth__pole']}>
                        <div className="d-grid gap-2">
                            <Button variant="primary" className="Auth__pole__button" disabled={checkPass} onClick={sendData}>
                                {checkPass ? <Spinner animation="grow" /> : "Войти"}
                            </Button>
                        </div>

                    </div>



                </div>
            </div>
        </div>

    );


}
