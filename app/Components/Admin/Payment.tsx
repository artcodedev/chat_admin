
import style from "@/app/style/Components/Payment.module.scss"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import React from 'react';
import { useStore } from "@/app/Store/store";

const Payment = () => {

    const [alert, setAlert] = React.useState<string | boolean>(false);
    const {setPayment} = useStore();

    const sendData = () => {
        setAlert('success');

        // send data

        // if ok = success
        // if not ander = primary
        // if err = danger

        setTimeout(() => setAlert(false), 1500);

    }

    const cansel = () => {
        setPayment(false);
    }

    return (
        <>

            <div className={style['Payment']}>
                <div className={`${style['Payment__wrapp']} ${style['Payment__flex_p']}`}>
                    <div className={style['Payment__modal']}>
                        <div className={style['Payment__title']}>
                            <div className={style['Payment__title__txt']}>Ручной ввод средств</div>
                        </div>

                        <div className={style['Payment__message']}>

                            {alert ? <Alert key={alert.toString()} variant={alert.toString()}>This is a  alert—check it out!</Alert> : ''}

                        </div>

                        <div className={style['Payment__input']}>

                            <Form.Control type="text" placeholder="Введите id..." />

                        </div>

                        <div className={style['Payment__but']}>
                            <Button variant="success" className={style['Payment__button']} onClick={sendData}>Ok</Button>
                            <Button variant="danger" className={style['Payment__button']} onClick={cansel}>Отмена</Button>
                        </div>



                    </div>
                </div>
            </div>

        </>
    );
}

export default Payment;