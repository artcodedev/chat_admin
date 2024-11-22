import Link from 'next/link'

import style from '@/app/style/NotFound/NotFound.module.scss'
import Button from 'react-bootstrap/Button';
import '@/app/style/bootstrap.min.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function NotFound() {

    return (

        <div className={style['NotFound']}>
            <div className={`${style['NotFound__wrapper']} ${style['NotFound__flex_p']}`}>

                <div className={style['NotFound__wrapper_gle']}>
                    
                    <h1 className={style['NotFound__404']}>404</h1>
                    <h3 className={style['NotFound__h3']}>Страница не найдена</h3>

                    <Link href="/">
                        <Button variant="primary">На главную</Button>
                    </Link>

                </div>

            </div>
        </div>

    )
}

