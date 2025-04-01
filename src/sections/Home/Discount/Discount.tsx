import Tabs, { Tab, TabStyle } from "../../../components/Tabs/Tabs";
import styles from "./Discount.module.scss";
import DiscountTab, { DiscountTabProps } from "./DiscountTab";

const Discount: React.FC = () => {


    const tab1Props: DiscountTabProps = {
        imgUrl: "/assets/images/headphones2.png",
        productName: "Headphones Compact",
        features: ["Material expose like metals", "Clear lines and geomatric figures", "Simple neutral colours", "Material expose like metals"]
    }

    const tab2Props: DiscountTabProps = {
        imgUrl: "/assets/images/laptop-big.png",
        productName: "Macbook",
        features: ["Works", "Silver", "Has speakers", "Can run Crysis 3 on 30fps fhd"]
    }

    const tab3Props: DiscountTabProps = {
        imgUrl: "/assets/images/sofa.png",
        productName: "Sofa Premium",
        features: ["Very cozy", "Looks like Rolls Royce seats", "Sky Blue colour", "Weighs only 300kg"]
    }

    const tabData: Tab[] = [
        {
            label: "Headphones",
            content: (
                <DiscountTab {...tab1Props}/>
            ),
        },
        {
            label: "Laptop",
            content: (
                <DiscountTab {...tab2Props}/>
            ),
        },
        {
            label: "Other",
            content: (
                <DiscountTab {...tab3Props}/>
            ),
        }
    ];

    return (
        <div className={styles.discount}>
            <h2>Discount Item</h2>
            <Tabs tabs={tabData} tabStyle={TabStyle.Primary}/>
        </div>
    );
}

export default Discount;