import React from "react";
import Image from '../../assets/images/2.png'
import {FormData} from "../Forms/ReactHookForm/types";
import styles from './CardUser.module.scss'

interface CardUserProps {
    selectedRow: FormData;
}

const CardUser: React.FC<CardUserProps> = ({selectedRow}) => {
    const { name, age, email, password, comments } = selectedRow
    return (
        <div className={styles.card}>
            <h1>Профиль Сотрудника</h1>
            <div className={styles.cardInfo}>
                <div>
                    <img className={styles.avatar} src={Image}/>
                </div>
                <div className={styles.userInfo}>
                    <div>
                        <span className={styles.headlines}>Name: </span>
                        {name}
                    </div>
                    <div>
                        <span className={styles.headlines}>Age: </span>
                        {age}
                    </div>
                    <div>
                        <span className={styles.headlines}>Email: </span>
                        {email}
                    </div>
                    <div>
                        <span className={styles.headlines}>Password: </span>
                        {password}
                    </div>
                    <div>
                        <span className={styles.headlines}>Comments: </span>
                        {comments}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CardUser;