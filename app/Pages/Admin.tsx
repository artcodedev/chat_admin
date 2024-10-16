
'use client'
import style from "@/app/style/Admin/Admin.module.scss"
import 'bootstrap/dist/css/bootstrap.min.css';

import AdminPanelLeft from '@/app/Components/Admin/AdminPanelLeft'
import AdminPanelRight from "@/app/Components/Admin/AdminPanelRight"
import Message from '@/app/Components/Admin/Message'
import Logout from "@/app/Components/Logout";
import Payment from "@/app/Components/Admin/Payment";
import Loading from "@/app/Components/Loading"
import useStore from "@/app/utils/store";
import Footer_admin from "@/app/Components/Admin/Admin_footer" 


const Admin = () => {

    const { logout, payment, loading } = useStore()

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

                        <div className={style['Admin__content']}>
                            <div className={style['Admin__content__wrapper']}>

                                {loading ? <Loading /> :
                                
                                <div className={style['Admin__content__cont']}>



                                    <div className={style['Admin__header']}>

                                        <div className={style['Admin__header__wrap']}>

                                            <div className={style['Admin__header__i']}>ssd</div>

                                        </div>

                                    </div>




                                    <div className={style['Admin__message']}>

                                        <div className={style['Admin__message__wrapp']}>
                                            <div className={style['Admin_all_message']}>

                                                <Message time="1.12.12.12" type_user="admin" message="hellol" />

                                                <Message time="1.12.12.12" type_user="admin" message="hellol" />

                                                <Message time="1.12.12.12" type_user="user" message="hellol" />

                                            </div>
                                        </div>

                                    </div>

                                    <Footer_admin />




                                    {/* <div className={style['Admin__footer']}>

                                        <div className={style['Admin__header__wrap']}>

                                            <div className={style['Admin_input']}>
                                                <input type="text" placeholder="Введите сообщение..." className={style['Admin_input_input']} />
                                            </div>

                                            <div className={style['Admin_icon_input']}>

                                                <div className={style['Admin_icon_ic']}>
                                                    <i className="bi bi-paperclip"></i>
                                                </div>

                                                <div className={style['Admin_icon_ic']}>
                                                    <i className="bi bi-emoji-smile-fill"></i>
                                                </div>
                                                <div className={style['Admin_icon_ic']}>
                                                    <i className="bi bi-send-fill"></i>
                                                </div>
                                            </div>

                                        </div>
                                    </div> */}





                                </div>}



                                {/* <div className={style['Admin__content__cont']}>



                                    <div className={style['Admin__header']}>

                                        <div className={style['Admin__header__wrap']}>

                                            <div className={style['Admin__header__i']}>ssd</div>

                                        </div>

                                    </div>




                                    <div className={style['Admin__message']}>

                                        <div className={style['Admin__message__wrapp']}>
                                            <div className={style['Admin_all_message']}>

                                                <Message time="1.12.12.12" type_user="admin" message="hellol" />

                                                <Message time="1.12.12.12" type_user="admin" message="hellol" />

                                                <Message time="1.12.12.12" type_user="user" message="hellol" />

                                            </div>
                                        </div>

                                    </div>




                                    <div className={style['Admin__footer']}>

                                        <div className={style['Admin__header__wrap']}>

                                            <div className={style['Admin_input']}>
                                                <input type="text" placeholder="Введите сообщение..." className={style['Admin_input_input']} />
                                            </div>

                                            <div className={style['Admin_icon_input']}>

                                                <div className={style['Admin_icon_ic']}>
                                                    <i className="bi bi-paperclip"></i>
                                                </div>

                                                <div className={style['Admin_icon_ic']}>
                                                    <i className="bi bi-emoji-smile-fill"></i>
                                                </div>
                                                <div className={style['Admin_icon_ic']}>
                                                    <i className="bi bi-send-fill"></i>
                                                </div>
                                            </div>

                                        </div>
                                    </div>





                                </div> */}

                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </>
    );
}


export default Admin;