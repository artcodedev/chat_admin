


'use client'

import style from "@/app/style/Components/AdminPanelRight.module.scss"
import 'bootstrap-icons/font/bootstrap-icons.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import React from 'react';
import { PanelMessage } from "./PanelMessage";


const AdminPanelRight = () => {

    const [search, setSearch] = React.useState<String>('')

    const searchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value)
    }

    const test_message = [
        {
            id_message: "850",
            id_user: "121212121",
            message: "hello some textsdasdasdasdsa",
            new_message: true,
            count_new_message: "10121"
        },
        {
            id_message: "851",
            id_user: "121212121",
            message: "hello some text",
            new_message: true,
            count_new_message: "10"
        },
        {
            id_message: "852",
            id_user: "121212121",
            message: "hello some text",
            new_message: true,
            count_new_message: "10"
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

                            <Form.Control onChange={searchChange} placeholder="Поиск..."/>

                            <Button onClick={serach_but}>
                                <i className="bi bi-search"></i>
                            </Button>

                        </InputGroup>

                    </div>

                    <div className="">

                        {test_message.map((e) => <PanelMessage id_message={e.id_message} id_user={e.id_user} message={e.message} new_message={e.new_message} count_new_message={e.count_new_message}/>)}

                    </div>


                </div>
            </div>
        </>
    );
}

export default AdminPanelRight;