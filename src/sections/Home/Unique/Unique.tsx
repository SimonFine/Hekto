
import Button, { ButtonSize } from "../../../components/Buttons/Button";
import styles from "./Unique.module.scss";

const Unique: React.FC = () => {
    return (
        <div className={styles.unique}>
            <img src="/assets/images/sofa.png" alt="sofa-image" className={styles.unique__img}/>
            <div className={styles.description}>
                <h3 className={styles.description__header}>Unique Features Of leatest & Trending Poducts</h3>
                <ul className={styles.description__list}>
                    <li className={`${styles.description__red} body-default body-default--grey-3`}>All frames constructed with hardwood solids and laminates</li>
                    <li className={`${styles.description__purple} body-default body-default--grey-3`}>Reinforced with double wood dowels, glue, screw - nails corner </li>
                    <li className={`${styles.description__green} body-default body-default--grey-3`}>Arms, backs and seats are structurally reinforced</li>
                </ul>
                <div className={styles.description__bottom}>
                    <Button buttonSize={ButtonSize.Big}>Add To Cart</Button>
                    <div>
                        <p className="label-s">B&B Italian Sofa</p>
                        <p className="label-s">$32.00</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Unique;