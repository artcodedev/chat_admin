import { useHideMessage } from "@/app/Store/store"
import style from "@/app/style/Components/PanelMessage.module.scss"
import Console from '@/app/utils/Console'

type Props = {
    id_message: string
    id_user: string
    message: string
    new_message: boolean
    count_new_message: string
}

export const PanelMessage = ({ ...pr }: Props) => {


    const { setHideMessage} = useHideMessage()

    const show_message = () => {
        Console.log(pr.id_message);
        setHideMessage(true)
    }


    return (

        <div className={style['PanelMessage__wrapper__messages']} onClick={show_message}>

            <div className={style['PanelMessage__wrapper__messages__cont']} id-message={pr.id_message}>

                <div className={style['PanelMessage__wrapper__messages__uid']}>ID {pr.id_user}</div>
                <div className={style['PanelMessage__wrapper__messages__message']}>{pr.message}</div>
                {pr.new_message ? <div className={style['PanelMessage__wrapper__messages__newMess']}>{pr.count_new_message}</div> : ""}

            </div>

        </div>
    );

}