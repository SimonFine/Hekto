import StarRoundedIcon from '@mui/icons-material/StarRounded';
import styles from "./StarRating.module.scss";

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    return (
        <div className={styles.rating}>
            {Array.from({ length: 5 }).map((_, index) => (
                <StarRoundedIcon 
                    style={{color: `var(${index < rating ? "--color-secondary-def" : "--color-grey-2"})`, width: "1.6rem", height: "1.6rem"}}
                    key={index}
                />
            ))}
        </div>
    );
}

export default StarRating;