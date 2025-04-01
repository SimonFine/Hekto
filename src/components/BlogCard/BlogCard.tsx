import styles from "./BlogCard.module.scss";

export interface BlogCardProps {
    imgUrl: string;
    author: string;
    date: string;
    title: string;
    text: string;
}

const BlogCard: React.FC<BlogCardProps> = (props) => {
    return (
        <div className={styles.card}>
            <img src={props.imgUrl} alt="blog-image" className={styles.card__photo}/>
            <div className={styles.description}>
                <div className={styles.description__info}>
                    <div className={styles.description__author}>
                        <img src="/assets/icons/icon-pencil-grey.svg" alt="pencil-icon" />
                        <p className="label-s label-s--grey-3">{props.author}</p>
                    </div>
                    <div className={styles.description__date}>
                        <img src="/assets/icons/icon-calendar-grey.svg" alt="calendar-icon" />
                        <p className="label-s label-s--grey-3">{props.date}</p>
                    </div>
                </div>
                <p className={`subtitle-xs ${styles.description__title}`}>{props.title}</p>
                <p className="body-default body-default--grey-3">{props.text}</p>
                <button className={`${styles.description__button} label-bold label-bold--primary`}>Read More</button>
            </div>
        </div>
    );
}

export default BlogCard;