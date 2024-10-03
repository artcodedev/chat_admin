

import style from "@/app/style/Admin/Admin.module.scss"
import 'bootstrap/dist/css/bootstrap.min.css';

import Form from 'react-bootstrap/Form';
import AdminPanelLeft from '@/app/Components/Admin/AdminPanelLeft'


const Admin = () => {

    return (
        <>

            <div className={style['Admin']}>
                <div className={style['Admin__wrapper']}>
                    <div className={style['Admin__cont']}>

                        <div className={style['Admin__panel']}>

                            <AdminPanelLeft />

                        </div>

                        <div className={style['Admin__contant']}>sd</div>

                    </div>
                </div>
            </div>


        </>
    );
}


export default Admin;