import React from "react";
import styles from "./Header.module.scss";
import {useLocation, useNavigate} from "react-router-dom";
import {Button} from "antd";
import {useAppDispatch} from "store/hook/reduxHooks";
import {setIsAuth, setIsAuthLogout} from "store/slices/auth/authSlice";


const routes = [
  { id: 1, title: "Главная", path: "/" },
  { id: 2, title: "Обо мне", path: "/about" },
  { id: 3, title: "Рикки и Морти", path: "/RickMorty" },
];

const Header: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(setIsAuth(false));
    navigate("/login");
  };


  return (
    <header className={styles.header}>
      <div className={styles.head}>
        <nav className={styles.nav}>
          {routes.map(({ id, title, path }) => (
            <a
              className={`${currentPath === path ? styles.active : ""}`}
              key={id}
              href={path}
            >
              {title}
            </a>
          ))}
        </nav>
        <Button style={{marginRight:"40px"}}
            color="default"
            variant="outlined"
            onClick={handleLogout}
        >
            Выйти
        </Button>
      </div>
    </header>
  );
};

export default Header;
