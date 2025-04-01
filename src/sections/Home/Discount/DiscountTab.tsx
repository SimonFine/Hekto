import { NavLink } from "react-router-dom";
import Button, { ButtonSize } from "../../../components/Buttons/Button";
import styles from "./DiscountTab.module.scss";

export interface DiscountTabProps {
    imgUrl: string;
    productName: string;
    features: [string, string, string, string];
}

const DiscountTab: React.FC<DiscountTabProps> = ({ imgUrl, productName, features}) => {
    return (
        <div className={styles.tab}>
            <div className={styles.description}>
                <h3>20% Discount Of All Products</h3>
                <p className="subtitle-m subtitle-m--primary">{productName}</p>
                <p className="body-l body-l--grey-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
                <ul className={styles.features}>
                    {features.map((feature, index) => 
                        <li className="body-default body-default--grey-3" key={index}>
                            <img src="/assets/icons/icon-check.svg" alt="check-icon" />
                            {feature}
                        </li>
                    )}
                </ul>
                <NavLink to={"/products"}>
                    <Button buttonSize={ButtonSize.Big}>Shop Now</Button>
                </NavLink>
            </div>
            <img src={imgUrl} alt="tab-image" className={styles.img}/>
        </div>
    );
}

export default DiscountTab;