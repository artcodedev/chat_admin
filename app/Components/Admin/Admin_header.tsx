
'use client'

import React from "react"
import { useStore, useHideMessage } from "@/app/Store/store";

import Console from "@/app/utils/Console";

import style from '@/app/style/Components/AdminHeader.module.scss'


const Admin_header: React.FC = () => {

    const [activeIcon, setActiveIcon] = React.useState<boolean>(false);
    const [butClose, setButClose] = React.useState<boolean>(false);
    const { setHideMessage} = useHideMessage()

    const close_message_cont = () => {
        Console.log("[+] Hidden menu");
        setHideMessage(false)
    }

    const open_menu = () => {

        Console.log("[+] Open menu header message");
        setActiveIcon(true);
       
        
        // setActiveIcon("block"); 

        // const width = window.innerWidth;

        // if (width < 560) {
        //     // setButClose
        // }


    }
    const hidden_menu = () => {}

    return (
        <>
            <div className={style['AdminHeader']}>

                <div className={style['AdminHeader__wrap']}>

                    <div className={style['AdminHeader__i']}>


                        <div className={style['AdminHeader__i_item']} >

                            <div className={style['AdminHeader__i_ic_menu']} onClick={close_message_cont}>

                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16" data-darkreader-inline-fill="">
                                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"></path>
                                </svg>
                            </div>

                            <div className={style['AdminHeader__i_uid_ip']}>122.222.222.22</div>
                        </div>

                        <div className={style['AdminHeader__i_item']}>

                            <div className={style['AdminHeader__i_ic_menu']} onClick={open_menu}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16" data-darkreader-inline-fill="">
                                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"></path>
                                </svg>
                            </div>

                            <div className={`${style['AdminHeader__i_ic_menu']} ${activeIcon ? style['AdminHeader__i__show'] : ''}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16" data-darkreader-inline-fill="">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"></path>
                                </svg>
                            </div>

                            <div className={style['AdminHeader__i_ic_menu']}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-wallet" viewBox="0 0 16 16" data-darkreader-inline-fill="">
                                    <path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a2 2 0 0 1-1-.268M1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1"></path>
                                </svg>
                            </div>

                            <div className={style['AdminHeader__i_ic_menu']}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-controller" viewBox="0 0 16 16" data-darkreader-inline-fill="">
                                    <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1z"></path>
                                    <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729q.211.136.373.297c.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466s.34 1.78.364 2.606c.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527s-2.496.723-3.224 1.527c-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.3 2.3 0 0 1 .433-.335l-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a14 14 0 0 0-.748 2.295 12.4 12.4 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.4 12.4 0 0 0-.339-2.406 14 14 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27s-2.063.091-2.913.27"></path>
                                </svg>
                            </div>

                            <div className={style['AdminHeader__i_ic_menu']}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-sign-intersection-t" viewBox="0 0 16 16" data-darkreader-inline-fill="">
                                    <path d="M5 5v1.5h2.25V12h1.5V6.5H11V5z"></path>
                                    <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098zm-1.4.7a.495.495 0 0 1 .7 0l6.516 6.515a.495.495 0 0 1 0 .7L8.35 14.866a.495.495 0 0 1-.7 0L1.134 8.35a.495.495 0 0 1 0-.7L7.65 1.134Z"></path>
                                </svg>
                            </div>

                            <div className={style['AdminHeader__i_ic_menu']}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="rgb(38, 77, 82)" className="bi bi-x-lg" viewBox="0 0 16 16" data-darkreader-inline-fill="">
                                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"></path>
                                </svg>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </>
    );
}


export default Admin_header;
