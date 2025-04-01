import { useContext } from "react";
import styles from "./QuantityButton.module.scss";
import { GlobalActionKind, GlobalContext } from "../../store/GlobalContext";
import { Product } from "../../models/product";

const QuantitySelector: React.FC<Product> = (product) => {

    const { state, dispatch } = useContext(GlobalContext);

    const handleAdd = () => {
        dispatch({ type: GlobalActionKind.AddToCart, payload: product });
    }

    const handleRemove = () => {
        dispatch({ type: GlobalActionKind.RemoveFromCart, payload: product.code });
    }

    const productInCart = state.cart.find((item) => item.code === product.code);
    const quantityy = productInCart ? productInCart.quantity : 0;

    return (
        <div className={styles.quantityButton}>
            <button className={`body-s ${styles.button}`} onClick={handleRemove}>-</button>
            <span className="body-s">{quantityy}</span>
            <button className={`body-s ${styles.button}`} onClick={handleAdd}>+</button>
        </div>
    );
};

export default QuantitySelector;
