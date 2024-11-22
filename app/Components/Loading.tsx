
import style from "@/app/style/Components/Loading.module.scss"
import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {

    return (
        <>
            <div className={style['Loading']}>
                <Spinner animation="border" variant="success" />
            </div>
        </>
    );
}


export default Loading;