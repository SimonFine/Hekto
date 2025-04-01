import { useNavigate } from "react-router-dom";
import { ProductCategory } from "../../models/categories";
import Button, { ButtonSize } from "../Buttons/Button";
import styles from "./CategoryCircle.module.scss";

export interface CategoryCircleProps {
    imgUrl: string;
    categoryName: ProductCategory;
}

const CategoryCircle: React.FC<CategoryCircleProps> = ({ imgUrl, categoryName }) => {

    const navigate = useNavigate();

    const handleCategoryClick = () => {
        navigate(`/products?category=${encodeURIComponent(categoryName)}`);
    };

    return (
        <div className={styles.categoryCircle}>
            <div className={styles.categoryCircle__imgBackground}>
                <img src={imgUrl} alt="category-image" className={styles.categoryCircle__image}/>
            </div>
            <div className={styles.categoryCircle__button} onClick={handleCategoryClick}>
                <Button buttonSize={ButtonSize.Medium}>View Category</Button>
            </div>
            <p className={`subtitle-s ${styles.categoryName}`}>{categoryName}</p>
        </div>
    );
}

export default CategoryCircle;