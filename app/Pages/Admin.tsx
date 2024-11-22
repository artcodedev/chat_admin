
'use client'


import style from "@/app/style/Admin/Admin.module.scss"
import '@/app/style/bootstrap.min.css'

import AdminPanelLeft from '@/app/Components/Admin/AdminPanelLeft'
import AdminPanelRight from "@/app/Components/Admin/AdminPanelRight"
import Admin_header from "@/app/Components/Admin/Admin_header";
import Message from '@/app/Components/Admin/Message'
import Logout from "@/app/Components/Logout";
import Payment from "@/app/Components/Admin/Payment";
import Loading from "@/app/Components/Loading"
import {useStore, useHideMessage } from "@/app/Store/store";
import Footer_admin from "@/app/Components/Admin/Admin_footer"



const Admin = () => {
    
    const { logout, payment, loading } = useStore()
    const { hide } = useHideMessage()

    return (
        <>

            {logout ? <Logout /> : ''}

            {payment ? <Payment /> : ''}

            <div className={style['Admin']}>
                <div className={style['Admin__wrapper']}>
                    <div className={style['Admin__cont']}>

                        <div className={style['Admin__panel']}>

                            <AdminPanelLeft />

                            <AdminPanelRight />

                        </div>

                        <div className={`${style['Admin__content']} ${hide ? style['Admin__notactive'] : ''}`}>


                            <div className={style['Admin__content__wrapper']}>

                                {loading ? <Loading /> :    

                                    <div className={style['Admin__content__cont']}>

                                        <Admin_header />

                                        <div className={style['Admin__message']}>

                                            <div className={style['Admin__message__wrapp']}>
                                                <div className={style['Admin_all_message']}>

                                                    <Message time="1.12.12.12" type_user="admin" message="hellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfsl" />

                                                    <Message time="1.12.12.12" type_user="admin" message="hellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfsl" />

                                                    <Message time="1.12.12.12" type_user="admin" message="hellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfsl" />

                                                    <Message time="1.12.12.12" type_user="admin" message="hellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfsl" />

                                                    <Message time="1.12.12.12" type_user="admin" message="hellol" />

                                                    <Message time="1.12.12.12" type_user="user" message="hellol" />

                                                    <Message time="1.12.12.12" type_user="admin" message="hellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfsl" />

                                                    <Message time="1.12.12.12" type_user="admin" message="hellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfsl" />

                                                    <Message time="1.12.12.12" type_user="admin" message="hellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfsl" />

                                                    <Message time="1.12.12.12" type_user="admin" message="hellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfsl" />

                                                    <Message time="1.12.12.12" type_user="admin" message="hellol" />

                                                    <Message time="1.12.12.12" type_user="user" message="hellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfslhellofsdfsfdsfsdfsl" />

                                                </div>
                                            </div>

                                        </div>

                                        <Footer_admin />

                                    </div>}

                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </>
    );
}


export default Admin;