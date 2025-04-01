import styles from "./ProductDescription.module.scss";
import ProductDescriptionTab from "./ProductDescriptionTabs/ProductDescriptionTab";
import ProductInfoTab from "./ProductDescriptionTabs/ProductInfoTab";
import ProductReviewsTab from "./ProductDescriptionTabs/ProductReviewsTab";
import ProductVideoTab from "./ProductDescriptionTabs/ProductVideoTab";
import { Product } from "../../../models/product";
import Tabs, { Tab, TabStyle } from "../../../components/Tabs/Tabs";

const ProductDescription: React.FC<Product> = (product) => {
    const tabData: Tab[] = [
        {
            label: "Description",
            content: (
                <ProductDescriptionTab descriptionLong={product.descriptionLong} moreDetails={product.moreDetails}/>
            ),
        },
        {
            label: "Additional Info",
            content: (
                <ProductInfoTab additionalInfo={product.additionalInfo}/>
            ),
        },
        {
            label: "Reviews",
            content: (
                <ProductReviewsTab reviews={product.reviews}/>
            ),
        },
        {
            label: "Video",
            content: (
                <ProductVideoTab />
            ),
        },
    ];

    return (
        <div className={styles.description}>
            <Tabs tabs={tabData} tabStyle={TabStyle.Underline}/>
        </div>
    );
}

export default ProductDescription;