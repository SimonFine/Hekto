import { useContext } from "react";
import styles from "./Wishlist.module.scss";
import { GlobalContext } from "../../store/GlobalContext";
import ProductCardGrid from "../../components/ProductCardGrid/ProductCardGrid";

const Wishlist: React.FC = () => {

    const { state } = useContext(GlobalContext);

    return (
        <div className={styles.wishlist}>
            <h2>Your Wishlist {state.wishlist.length === 0 && <span>Is Empty</span>}</h2>
            <div className={styles.wishlist__items}>
                {state.wishlist.map(wishlistItem =>
                    <ProductCardGrid {...wishlistItem} key={wishlistItem.code}/>
                )}
            </div>
        </div>
    );
}

export default Wishlist;