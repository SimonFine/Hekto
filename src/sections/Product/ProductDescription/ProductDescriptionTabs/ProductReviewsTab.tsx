import styles from "./ProductReviewsTab.module.scss"

const ProductReviewsTab: React.FC<{ reviews: string[] }> = ({ reviews }) => {
    return (
        <>
            <ul className={styles.customList}>
                {reviews.map((review, index) => 
                    <li className="subtitle-s subtitle-s--grey-3" key={index}>"{review}"</li>
                )}
            </ul>
        </>
    );
}

export default ProductReviewsTab;