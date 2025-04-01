import BlogCard, { BlogCardProps } from "../../../components/BlogCard/BlogCard";
import styles from "./LatestBlog.module.scss";

const LatestBlog: React.FC = () => {

    const blogs: BlogCardProps[] = [
        {
            imgUrl: "/assets/images/blog-1.png",
            author: "Jon Doe",
            date: "21 August, 2023",
            title: "Top essential Trends in 2023",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit hendrerit ex."
        },
        {
            imgUrl: "/assets/images/blog-2.png",
            author: "Jon Doe",
            date: "21 August, 2021",
            title: "Top essential Trends in 2021",
            text: "Nullam nec fringilla erat, ac dapibus nunc. Integer semper ipsum in fermentum aliquam. "
        },
        {
            imgUrl: "/assets/images/blog-3.png",
            author: "Jon Doe",
            date: "21 August, 2023",
            title: "Top essential Trends in 2023",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit hendrerit ex."
        }
    ]


    return (
        <div className={styles.latestBlog}>
            <h2>Latest Blog</h2>
            <div className={styles.blogs}>
                {blogs.map((blog, index) => 
                    <BlogCard {...blog} key={index}/>
                )}
            </div>
        </div>
    );
}

export default LatestBlog;