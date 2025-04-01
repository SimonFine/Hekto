import Discount from "../sections/Home/Discount/Discount";
import Featured from "../sections/Home/Featured/Featured";
import Hero from "../sections/Home/Hero/Hero";
import Latest from "../sections/Home/Latest/Latest";
import LatestBlog from "../sections/Home/LatestBlog/LatestBlog";
import Newsletter from "../sections/Home/Newsletter/Newsletter";
import TopCategories from "../sections/Home/TopCategories/TopCategories";
import Trending from "../sections/Home/Trending/Trending";
import Unique from "../sections/Home/Unique/Unique";

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <Featured />
            <Latest />
            <Unique />
            <Trending />
            <Discount />
            <TopCategories />
            <Newsletter />
            <LatestBlog />
        </>
    );
}

export default Home;