
'use client'

import style from '@/app/style/Components/AdminPanelLeft.module.scss'
import 'bootstrap-icons/font/bootstrap-icons.css';

import Image from 'next/image'
import ToggleSwitch from "@/app/Components/Admin/Switch"
import Console from "@/app/utils/Console"

import useStore from '@/app/utils/store';

import React from 'react';

const AdminPanelLeft = () => {

    const [active, setActive] = React.useState<string>('');

    const { setLogout, setPayment } = useStore()

    const menu = [
        {type: "chat", icon: "bi-chat-dots-fill"},
        {type: "archive", icon: "bi-archive-fill"},
        {type: "credit", icon: "bi-credit-card-2-back-fill"},
        {type: "gear", icon: "bi-gear-wide-connected"},
        {type: "door", icon: "bi-door-open-fill"}
    ]


    const menu_action = (e: React.MouseEvent<HTMLElement>) => {

        const type_action: string = e.currentTarget.attributes[1].value;

        setActive(type_action)

        switch (type_action) {

            case "door":
                Console.log("[+] Change door")
                setLogout(true)
                setActive('')
                break
            
            case "credit":
                Console.log("[+] Change payment")
                setPayment(true)
                setActive('')
                break
        }
    }

    return (
        <>
            <div className={style['AdminPanelLeft']}>
                <div className={style['AdminPanelLeft__wrapper']}>

                    <div className={style['AdminPanelLeft__logo']}>
                        <Image src="/operator.png" width={60} height={60} alt="" />
                    </div>

                    <div className={style['AdminPanelLeft__toggleSwiper']}>

                        <ToggleSwitch />

                    </div>

                    <div className={style['AdminPanelLeft__manu']}>

                        {menu.map((e) => <div className={`${style['AdminPanelLeft__manu__items']} ${active == e.type ? style['AdminPanelLeft__active'] : ''}` } data-type={e.type} onClick={menu_action}>
                            <i className={`${style['AdminPanelLeft__manu__items__icon']} bi ${e.icon}`}></i>
                        </div>)}

                    </div>


                </div>
            </div>
        </>
    );
}


export default AdminPanelLeft; 