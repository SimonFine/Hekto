import styles from "./ProductDescriptionTab.module.scss"

export interface ProductDescriptionTabProps {
    descriptionLong: string;
    moreDetails: string[];
}

const ProductDescriptionTab: React.FC<ProductDescriptionTabProps> = ({ descriptionLong, moreDetails }) => {
    return (
        <>
            <p className="subtitle-m">Varius tempor.</p>
            <p className={`body-default body-default--grey-3 ${styles.descriptionLong}`}>{descriptionLong}</p>
            <p className={`subtitle-m ${styles.moreDetails}`}>More details</p>
            <ul className={styles.customList}>
                {moreDetails.map((detail, index) => 
                    <li className="body-default body-default--grey-3" key={index}>{detail}</li>
                )}
            </ul>
        </>
    );
}

export default ProductDescriptionTab;