
import style from '@/app/style/Components/AdminPanelLeft.module.scss'
import 'bootstrap-icons/font/bootstrap-icons.css';

import Image from 'next/image'
import ToggleSwitch from "@/app/Components/Admin/Switch"

const AdminPanelLeft = () => {

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

                        <div className={style['AdminPanelLeft__manu__items']}>
                            <i className={`${style['AdminPanelLeft__manu__items__icon']} bi bi-chat-dots-fill`}></i>
                        </div>

                        <div className={style['AdminPanelLeft__manu__items']}>
                            <i className={`${style['AdminPanelLeft__manu__items__icon']} bi bi-archive-fill`}></i>
                        </div>

                        <div className={style['AdminPanelLeft__manu__items']}>
                            <i className={`${style['AdminPanelLeft__manu__items__icon']} bi bi-gear-wide-connected`}></i>
                        </div>

                        <div className={style['AdminPanelLeft__manu__items']}>
                            <i className={`${style['AdminPanelLeft__manu__items__icon']} bi bi-door-open-fill`}></i>
                        </div>

                    </div>


                </div>
            </div>
        </>
    );
}


export default AdminPanelLeft; 