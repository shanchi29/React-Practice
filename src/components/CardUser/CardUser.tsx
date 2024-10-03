import React from "react";
import Image from '../../assets/images/2.png'
import styles from './CardUser.module.scss'
import {useAppSelector} from "../../store/hook/reduxHooks";
import {selectSelectedRow} from "../../store/selectors/selectors";


const CardUser: React.FC = () => {
    const selectedRow = useAppSelector(selectSelectedRow);

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