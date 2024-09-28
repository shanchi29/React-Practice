import React from "react";
import styles from './Header.module.scss'
import {useLocation} from "react-router-dom";

const routes = [
    { id: 1, title: 'Главная', path: '/' },
    { id: 2, title: 'Обо мне', path: '/about' },
    { id: 3, title: 'Рикки и Морти', path: '/RickMorty' },

]

const Header: React.FC = () => {
    const location = useLocation();
    const currentPath = location.pathname
    return (
            <header className={styles.header}>
                 <div className={styles.head}>
                    <nav className={styles.nav}>
                        {routes.map(({id, title, path}) => (
                            <a
                                className={`${currentPath === path ? styles.active : ''}`}
                                key={id}
                                href={path}>
                                {title}
                            </a>
                        ))}
                    </nav>
                </div>
            </header>
    )
};

export default Header;


