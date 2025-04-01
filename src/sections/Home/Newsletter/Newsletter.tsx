import Button, { ButtonSize } from "../../../components/Buttons/Button";
import styles from "./Newsletter.module.scss";

const Newsletter: React.FC = () => {
    return (
        <div className={styles.newsletter}>
            <img src="/assets/images/newsletter-baner.png" alt="newsletter-banner-image" className={styles.newsletter__baner}/>
            <h2>Get Latest Update By Subscribe 0ur Newsletter</h2>
            <div className={styles.newsletter__button}>
                <Button buttonSize={ButtonSize.Big}>Subscribe</Button>
            </div>
        </div>
    );
}

export default Newsletter;