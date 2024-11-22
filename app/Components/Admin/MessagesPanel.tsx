
import style from "@/app/style/Components/AdminPanelRight.module.scss"

type Props = {

    uid: string
    message: string
    newMessage?: string
    class: string
    onClick: () => void;

}

const MessagesPanel = ({ ...pr }: Props) => {


    return (
        <>
           <div className={pr.class} onClick={pr.onClick}>{pr.message}</div>
        </>
    )
}

export default MessagesPanel;