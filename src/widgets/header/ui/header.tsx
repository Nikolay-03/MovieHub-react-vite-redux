import { CONTENT_NAVIGATION_MENU } from "@/shared/consts";
import {NavLink, useNavigate} from "react-router-dom";
import styles from './header.module.css';
import clsx from "clsx";

export const Header = () => {
    const navigationContent = CONTENT_NAVIGATION_MENU.map(item => (
        <li key={item.path}>
            <NavLink
                to={item.path}
                className={({ isActive }) => clsx(
                    styles.navigation__menu__link,
                    isActive && styles.navigation__menu__link__active
                )}
            >
                {item.title}
            </NavLink>
        </li>
    ));
    const navigate = useNavigate()
    return (
        <div className={styles.header__wrapper}>
            <h1 onClick={() => navigate(CONTENT_NAVIGATION_MENU[0].path)}>MovieHub</h1>
            <nav className={styles.navigation__menu}>
                <ul>
                    {navigationContent}
                </ul>
            </nav>
        </div>
    );
};

