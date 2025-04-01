import Button, { ButtonSize } from "../../../components/Buttons/Button";
import styles from "./Slide.module.scss";

export interface SlideProps {
    mainImgUrl: string;
    bodyText: string;
    headerText: string;
    bgColor: "purple" | "red" | "yellow";
}

const Slide: React.FC<SlideProps> = (props) => {
    return (
        <div className={`${styles[props.bgColor]} ${styles.slide}`}>
            <img src="/assets/images/lamp.png" alt="lamp-picture" className={styles.slide__leftPic}/>
                <div className={styles.slide__description}>
                <p className="body-bold body-bold--primary">{props.bodyText}</p>
                <h1>{props.headerText}</h1>
                <p className="body-default body-default--grey-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                <Button buttonSize={ButtonSize.Big}>Shop Now</Button>
            </div>
            <img src={props.mainImgUrl} alt="main-picture" className={styles.slide__mainPic}/>
            <img src={`/assets/images/discount-${props.bgColor}.svg`} alt="discount-icon" className={styles.slide__discount}/>
        </div>
    );
}

export default Slide;