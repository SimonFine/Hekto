import { Product } from "../../models/product";
import { GlobalActionKind, GlobalContext } from "../../store/GlobalContext";
import Button, { ButtonSize } from "../Buttons/Button";
import styles from "./ProductCardSimple.module.scss";
import useNavigateToProduct from "../../hooks/useNavigateToProduct";
import { useContext } from "react";

const ProductCardSimple: React.FC<Product> = (props) => {
    const goToProduct = useNavigateToProduct();

    const { state } = useContext(GlobalContext);
    const isInWishlist = state.wishlist.some(item => item.code === props.code);

    return (
        <div className={styles.card}>
            <img src={props.imgUrl} alt="product-image" className={styles.card__img}/>
            <div className={styles.card__button} onClick={() => goToProduct(props.code)}>
                <Button buttonSize={ButtonSize.Medium}>View Details</Button>
            </div>
            <div className={styles.card__circleButtons}>
                <Button buttonSize={ButtonSize.Circle} globalAction={ { action: GlobalActionKind.AddToCart, product: props} }>
                    <img src="/assets/icons/icon-cart-purple.svg" alt="purple-cart-icon" />
                </Button>
                <Button buttonSize={ButtonSize.Circle} globalAction={{ action: isInWishlist ? GlobalActionKind.RemoveFromWishlist : GlobalActionKind.AddToWishlist, product: props} }>
                    <img src={isInWishlist ? '/assets/icons/icon-heart-red.svg' : '/assets/icons/icon-heart-purple.svg'} alt="heart-icon" />
                </Button>
                <Button buttonSize={ButtonSize.Circle}>
                    <img src="/assets/icons/icon-magnifier-purple.svg" alt="purple-magnifier-icon" />
                </Button>
            </div>
            <p className={`label-bold label-bold--primary ${styles.card__name}`}>{props.name}</p>
            <p className={`label-s label-s--grey-3 ${styles.card__code}`}>Code - {props.code}</p>
            <p className={`label-bold ${styles.card__price}`}>{`$${props.price.toFixed(2)}`}</p>
        </div>
    );
}

export default ProductCardSimple;