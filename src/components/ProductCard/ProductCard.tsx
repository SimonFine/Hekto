import { Product } from "../../models/product";
import Button, { ButtonSize } from "../Buttons/Button";
import StarRating from "../StarRating/StarRating";
import styles from "./ProductCard.module.scss";
import useNavigateToProduct from "../../hooks/useNavigateToProduct";
import { GlobalActionKind, GlobalContext } from "../../store/GlobalContext";
import { useContext } from "react";

const ProductCard: React.FC<Product> = (props) => {
    const goToProduct = useNavigateToProduct();

    const { state } = useContext(GlobalContext);
    const isInWishlist = state.wishlist.some(item => item.code === props.code);

    return (
        <div className={styles.card} onClick={() => goToProduct(props.code)}>
            <img src={props.imgUrl} alt="product-image" className={styles.card__img}/>
            <div className={styles.right}>
                <div className={styles.right__nameRating}>
                    <span className="subtitle-s">{props.name}</span>
                    <StarRating rating={props.rating}/>
                </div>
                <div className={styles.right__prices}>
                    <p className={`label-default ${styles.right__price}`}>{`$${props.price.toFixed(2)}`}</p>
                    <p className={`label-s label-s--grey-3 ${styles.right__oldPrice}`}><s>{`$${props.oldPrice.toFixed(2)}`}</s></p>
                </div>
                <p className={`body-default body-default--grey-3 ${styles.right__description}`}>{props.description}</p>
                <div className={styles.right__circleButtons}>
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
            </div>
        </div>
    );
}

export default ProductCard;