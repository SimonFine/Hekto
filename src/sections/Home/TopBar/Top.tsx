import { NavLink } from "react-router-dom";
import styles from "./Top.module.scss";
import { useContext } from "react";
import { GlobalContext } from "../../../store/GlobalContext";

const Top: React.FC = () => {
    const { state } = useContext(GlobalContext);

    const cartSize = state.cart.reduce((acc, curr) => acc + (curr.quantity ?? 0), 0);

    return (
        <div className={styles['header-top']}>
            <ul className={styles.contact}>
                <li className={styles.contact__element}>
                    <img src="/assets/icons/icon-mail.svg" alt="mail-icon" className={styles.contact__icon}/>
                    <span className="subtitle-xs subtitle-xs--white">mhhasanul@gmail.com</span>
                </li>
                <li className={styles.contact__element}>
                    <img src="/assets/icons/icon-phone.svg" alt="phone-icon" className={styles.contact__icon}/>
                    <span className="subtitle-xs subtitle-xs--white">(12345)67890</span>
                </li>
            </ul>
            <ul className={styles.settings}>
                <li className={styles['settings__element']}>
                    <span className="subtitle-xs subtitle-xs--white">English</span>
                    <img src="/assets/icons/icon-chevron-down.svg" alt="chevron-down-icon" className={styles.settings__icon}/>
                </li>
                <li className={styles['settings__element']}>
                    <span className="subtitle-xs subtitle-xs--white">USD</span>
                    <img src="/assets/icons/icon-chevron-down.svg" alt="chevron-down-icon" className={styles.settings__icon}/>
                </li>
                <li className={styles['settings__element']}>
                    <span className="subtitle-xs subtitle-xs--white">Login</span>
                    <img src="/assets/icons/icon-chevron-down.svg" alt="chevron-down-icon" className={styles.settings__icon}/>
                </li>
                <li className={styles['settings__element']}>
                    <NavLink to="/wishlist" className={styles.navlink}>
                        <span className="subtitle-xs subtitle-xs--white">Wishlist</span>
                        <img src="/assets/icons/icon-chevron-down.svg" alt="chevron-down-icon" className={styles.settings__icon}/>
                    </NavLink>
                </li>
                <li className={`${styles['settings__element']} ${styles['settings__cartButton']}`}>
                    <NavLink to="/cart">
                        <img src="/assets/icons/icon-cart.svg" alt="cart-icon" />

                        {cartSize > 0 ?
                        <span className={`${styles['settings__cartSize']} label-s`}>{cartSize}</span> 
                        : null}     
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Top;