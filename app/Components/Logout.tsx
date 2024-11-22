
'use client'

import style from "@/app/style/Components/Logout.module.scss"
import Button from 'react-bootstrap/Button';
import Console from "@/app/utils/Console";
import React from 'react';
import { useRouter } from 'next/navigation';
import { useEffect } from "react"
import useStore from "@/app/utils/store";
import { useCookies } from 'react-cookie';

const Logout = () => {

    const {setLogout} = useStore();
    const router = useRouter();

    const [reload, setReload] = React.useState<boolean>(false);
    const [cookie, setCookie] = useCookies(['token']);

    useEffect(() => {
        if(reload) router.replace("/auth");
    })

    const cancellation = () => {
        Console.log("cancel");
        setLogout(false)
    }

    const logout_f = () => {
        Console.log("logout");
        setCookie('token', '');
        setLogout(false);
        router.replace("/auth");

    }

    return (
        <>
            <div className={style['Logout']}>
                <div className={`${style['Logout__wrapp']} ${style['Logout__flex_p']}`}>

                    <div className={style['Logout__modal']}>

                        <div className={style['Logout__title']}>
                            <div className={style['Logout__title__txt']}>Выйти ?</div>
                        </div>

                        <div className={style['Logout__but']}>

                            <Button variant="success" className={style['Logout__button']} onClick={logout_f}>Да</Button>
                            <Button variant="danger" className={style['Logout__button']} onClick={cancellation}>Отмена</Button>

                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}


export default Logout;