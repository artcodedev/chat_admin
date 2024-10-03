
import style from '@/app/style/Components/AdminPanelLeft.module.scss'


import Image from 'next/image'

import Form from 'react-bootstrap/Form';

const AdminPanelLeft = () => {


    const some = () => {
        console.log("SPE")
    }

    return (
        <>
            <div className={style['AdminPanelLeft']}>
                <div className={style['AdminPanelLeft__wrapper']}>


                    <div className={style['AdminPanelLeft__logo']}>
                        <Image src="/operator.webp" width={60} height={60} alt="" />
                    </div>

                    <div className={style['AdminPanelLeft__toggleSwiper']}>

                        <Form.Check
                            type="switch"
                            className={style['AdminPanelLeft__switch']}
                        />


                    </div>

                    <div className={style['AdminPanelLeft__manu']}></div>


                </div>
            </div>
        </>
    );
}


export default AdminPanelLeft; 