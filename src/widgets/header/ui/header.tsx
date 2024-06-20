import { CONTENT_NAVIGATION_MENU } from "@/shared/consts";
import { NavLink } from "react-router-dom";
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

    return (
        <div className={styles.header__wrapper}>
            <h1>MovieHub</h1>
            <nav className={styles.navigation__menu}>
                <ul>
                    {navigationContent}
                </ul>
            </nav>
        </div>
    );
};

