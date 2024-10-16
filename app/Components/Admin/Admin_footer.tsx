


import style from '@/app/style/Components/Admin_footer.module.scss'

const Footer_footer = () => {

    return (
        <>
            <div className={style['Footer_admin__footer']}>

                <div className={style['Footer_admin__header__wrap']}>

                    <div className={style['Footer_admin_input']}>
                        <input type="text" placeholder="Введите сообщение..." className={style['Footer_admin_input_input']} />
                    </div>

                    <div className={style['Footer_admin_icon_input']}>

                        <div className={style['Footer_admin_icon_ic']}>
                            <i className="bi bi-paperclip"></i>
                        </div>

                        <div className={style['Footer_admin_icon_ic']}>
                            <i className="bi bi-emoji-smile-fill"></i>
                        </div>
                        <div className={style['Footer_admin_icon_ic']}>
                            <i className="bi bi-send-fill"></i>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )

}


export default Footer_footer;