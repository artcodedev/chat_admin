


'use client'

import style from "@/app/style/Components/AdminPanelRight.module.scss"
import 'bootstrap-icons/font/bootstrap-icons.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import React from 'react';

import MessagesPanel from "@/app/Components/Admin/MessagesPanel"

const AdminPanelRight = () => {

    const [search, setSearch] = React.useState<String>('')

    const searchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value)
    }

    const test_message = [
        {
            id_message: "850",
            id_user: 121212121,
            message: "hello some text",
            new_message: true,
            count_new_message: 10
        },
        {
            id_message: "851",
            id_user: 121212121,
            message: "hello some text",
            new_message: true,
            count_new_message: 10
        },
        {
            id_message: "852",
            id_user: 121212121,
            message: "hello some text",
            new_message: true,
            count_new_message: 10
        }
    ]

    const getAllMessage = () => {
        console.log("HELLLLO")
    }

    const serach_but = () => {
        console.log(search)
    }

    return (
        <>
            <div className={style['AdminPanelRight']}>

                <div className={style['AdminPanelRight__wrapper']}>

                    <div className={style['AdminPanelRight__wrapper__search']}>

                        <InputGroup>

                            <Form.Control onChange={searchChange} />

                            <Button onClick={serach_but}>
                                <i className="bi bi-search"></i>
                            </Button>

                        </InputGroup>

                    </div>

                    <div className="">

                        {test_message.map((e) => <div className={style['AdminPanelRight__wrapper__messages']}>

                            <div className={style['AdminPanelRight__wrapper__messages__cont']} id-message={e.id_message} onClick={getAllMessage}>

                                <div className={style['AdminPanelRight__wrapper__messages__uid']}>ID {e.id_user}</div>
                                <div className={style['AdminPanelRight__wrapper__messages__message']}>{e.message}</div>
                                {e.new_message ? <div className={style['AdminPanelRight__wrapper__messages__newMess']}>{e.count_new_message}</div> : ""}
                                
                            </div>

                        </div>)}

                        {/* <div className={style['AdminPanelRight__wrapper__messages']}>

                            <div className={style['AdminPanelRight__wrapper__messages__cont']}>
                                <div className={style['AdminPanelRight__wrapper__messages__uid']}>ID 12121212</div>
                                <div className={style['AdminPanelRight__wrapper__messages__message']}>Some text message text messagetext message</div>
                                <div className={style['AdminPanelRight__wrapper__messages__newMess']}>1</div>
                            </div>

                        </div>

                        <div className={style['AdminPanelRight__wrapper__messages']}>

                            <div className={style['AdminPanelRight__wrapper__messages__cont']}>
                                <div className={style['AdminPanelRight__wrapper__messages__uid']}>ID 12121212</div>
                                <div className={style['AdminPanelRight__wrapper__messages__message']}>Some text message text messagetext message</div>
                                <div className={style['AdminPanelRight__wrapper__messages__newMess']}>1</div>
                            </div>

                        </div>

                        <div className={style['AdminPanelRight__wrapper__messages']}>

                            <div className={style['AdminPanelRight__wrapper__messages__cont']}>
                                <div className={style['AdminPanelRight__wrapper__messages__uid']}>ID 12121212</div>
                                <div className={style['AdminPanelRight__wrapper__messages__message']}>Some text message text messagetext message</div>
                                <div className={style['AdminPanelRight__wrapper__messages__newMess']}>1</div>
                            </div>

                        </div> */}

                    </div>


                </div>
            </div>
        </>
    );
}

export default AdminPanelRight;