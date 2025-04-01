import { useContext } from "react";
import { Product } from "../../models/product";
import { GlobalActionKind, GlobalContext } from "../../store/GlobalContext";
import Button, { ButtonSize } from "../Buttons/Button";
import styles from "./ProductCardWide.module.scss";

const ProductCardWide: React.FC<Product> = (props) => {

    const { state } = useContext(GlobalContext);
    const isInWishlist = state.wishlist.some(item => item.code === props.code);

    return (
        <div className={styles.card}>
            <img src={props.imgUrl} alt="product-image" className={styles.card__img}/>
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
            <div className={styles.description}>
                <div className={styles.description__left}>
                    <p className="label-default">{props.name}</p>
                </div>
                <div className={styles.description__right}>
                    <p className="label-default">{`$${props.price.toFixed(2)}`}</p>
                    <p className="label-s label-s--primary">{`$${props.oldPrice.toFixed(2)}`}</p>
                </div>
            </div>
        </div>
    );
}

export default ProductCardWide;