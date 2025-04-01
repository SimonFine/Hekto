import { NavLink } from "react-router-dom";
import Searchbar from "../../../components/Searchbar/Searchbar";
import styles from "./Bottom.module.scss";

const Bottom: React.FC = () => {
    return (
        <div className={styles['header-bottom']}>
            <nav className={styles.nav}>
                <img src="/assets/icons/icon-logo.svg" alt="logo-icon" className={styles.nav__logo}/>
                <ul className={styles.nav__buttons}>
                    <li className={styles.nav__button}>
                        <NavLink to="/" className={({ isActive }) => `${isActive ? styles['nav__button-active'] : undefined} nav__button`}>
                            Home
                        </NavLink>
                    </li>
                    <li className={styles.nav__button}>
                        <NavLink to="/products" className={({ isActive }) => `${isActive ? styles['nav__button-active'] : undefined} nav__button`}>
                            Products
                        </NavLink>
                    </li>
                    <li className={styles.nav__button}>
                        <span className="label-default">Blog</span>
                    </li>
                    <li className={styles.nav__button}>
                        <span className="label-default">Contact</span>
                    </li>
                </ul>
            </nav>
            <Searchbar>
                <img src="/assets/icons/icon-magnifier.svg" alt="magnifier-icon" />
            </Searchbar>
        </div>
    );
}

export default Bottom;