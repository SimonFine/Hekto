import Searchbar from "../../../components/Searchbar/Searchbar";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.top}>
                <div className={styles.top__contact}>
                    <img src="/assets/icons/icon-logo.svg" alt="logo-icon" />
                    <Searchbar placeholder="Enter Email Address">Sign Up</Searchbar>
                    <p className="body-default body-default--grey-3">17 Princess Road, London, Greater London NW1 8JR, UK</p>
                </div>
                <div className={styles.top__column}>
                    <p className="subtitle-m">Categories</p>
                    <p className="body-default body-default--grey-3">Laptops & Computers</p>
                    <p className="body-default body-default--grey-3">Cameras & Photography</p>
                    <p className="body-default body-default--grey-3">Smart Phones & Tablets</p>
                    <p className="body-default body-default--grey-3">Video Games & Consoles</p>
                    <p className="body-default body-default--grey-3">Waterproof Headphones</p>
                </div>
                <div className={styles.top__column}>
                    <p className="subtitle-m">Customer Care</p>
                    <p className="body-default body-default--grey-3">My Account</p>
                    <p className="body-default body-default--grey-3">Discount</p>
                    <p className="body-default body-default--grey-3">Returns</p>
                    <p className="body-default body-default--grey-3">Order History</p>
                    <p className="body-default body-default--grey-3">Order Tracking</p>
                </div>
                <div className={styles.top__column}>
                    <p className="subtitle-m">Pages</p>
                    <p className="body-default body-default--grey-3">Blog</p>
                    <p className="body-default body-default--grey-3">Browse The Shop</p>
                    <p className="body-default body-default--grey-3">Category</p>
                    <p className="body-default body-default--grey-3">Pre-Built Pages</p>
                    <p className="body-default body-default--grey-3">Visual Composer Elements</p>
                </div>
            </div>
            <div className={styles.bottom}>
                <p className="body-s body-s--grey-3">&copy;Webecy - All Rights Reserved</p>
                <div className={styles.bottom__icons}>
                    <img src="/assets/icons/icon-facebook.svg" alt="facebook-icon" />
                    <img src="/assets/icons/icon-twitter.svg" alt="facebook-icon" />
                    <img src="/assets/icons/icon-instagram.svg" alt="instagram-icon" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;