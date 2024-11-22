


import style from "@/app/style/Components/Message.module.scss"
import Console from "@/app/utils/Console";
import '@/app/style/bootstrap.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css';


type Props = {
    time: string
    type_user: string
    message: string

}

const Message = ({ ...pr }: Props) => {


    return (

        <>

            <div className={style['Message__mess']}>

                <div className={style['Message__mess__' + pr.type_user]}>
                    <div className={`${style['Message__mess_wrapp__utr']} ${style['Message__mess_wrapp__' + pr.type_user]}`}>

                        <div className={style['Message__message_info']}>
                            <div className={style['Message__message_title']}>{pr.type_user}</div>
                            <div className={style['Message__message_time']}>{pr.time}</div>
                        </div>

                        <div className={style['Message__message_mes']}>{pr.message}</div>
                    </div>
                </div>

            </div>
        </>
        
    );
}


export default Message;