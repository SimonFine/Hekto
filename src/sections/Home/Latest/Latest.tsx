import { useContext } from "react";
import Tabs, { Tab, TabStyle } from "../../../components/Tabs/Tabs";
import styles from "./Latest.module.scss";
import { ProductContext } from "../../../store/ProductContext";
import ProductCardWide from "../../../components/ProductCardWide/ProductCardWide";
import { Skeleton } from "@mui/material";
import Error from "../../Error/Error";

const Latest: React.FC = () => {
    const productsContext = useContext(ProductContext);
    
    let { productData, isLoading, error } = productsContext;
    productData = productData ?? [];
    
    if (error) return <Error message={error} />

    const tabData: Tab[] = [
      {
        label: "New Arrival",
        content: (
          <div className={styles.latest__tab}>
            {(productData).slice(0, 6).map((product, index) => {
              return <ProductCardWide {...product} key={index}/>;
            })}
          </div>
        ),
      },
      {
        label: "Best Seller",
        content: (
          <div className={styles.latest__tab}>
            <ProductCardWide {...productData[6]} />
            <ProductCardWide {...productData[7]} />
          </div>
        ),
      },
      {
        label: "Featured",
        content: (
          <div className={styles.latest__tab}>
            <ProductCardWide {...productData[8]} />
          </div>
        ),
      },
      {
        label: "Special Offer",
        content: (
          <div className={styles.latest__tab}>
            <ProductCardWide {...productData[9]} />
          </div>
        ),
      },
    ];

    return (
        <div className={styles.latest}>
            <h2>Latest Products</h2>
            { 
              isLoading ? (
                <div className={`${styles.latest__tab} ${styles.skeletons}`}>
                  {Array.from({ length: 6 }).map((_, index) => (
                    <Skeleton variant="rectangular" sx={{ width: "41.6rem", height: "30.4rem", borderRadius: ".8rem" }} key={index}/>
                  ))}
                </div>
              ) : (
                <Tabs tabs={tabData} tabStyle={TabStyle.Primary}/>
              )
            }
        </div>
    );
}

export default Latest;