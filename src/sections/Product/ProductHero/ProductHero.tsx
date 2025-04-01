import styles from "./ProductHero.module.scss";
import StarRating from "../../../components/StarRating/StarRating";
import Button, { ButtonSize } from "../../../components/Buttons/Button";
import { Product } from "../../../models/product";
import { GlobalActionKind, GlobalContext } from "../../../store/GlobalContext";
import { useContext } from "react";

const ProductHero: React.FC<Product> = (product) => {

  const { state } = useContext(GlobalContext);
  const isInWishlist = state.wishlist.some(item => item.code === product.code);

  return (
    <div className={styles.product}>
        <div className={styles.left}>
            <div className={styles.left__smallImgs}>
                <img src={product.imgUrl} alt="product-small-image" className={styles.left__smallImg}/>
                <img src={product.imgUrl} alt="product-small-image" className={styles.left__smallImg}/>
                <img src={product.imgUrl} alt="product-small-image" className={styles.left__smallImg}/>
            </div>
            <img src={product.imgUrl} alt="product-big-image" className={styles.left__bigImg}/>
        </div>
        <div className={styles.right}>
            <h3 className={styles.right__name}>{product.name}</h3>
            <StarRating rating={product.rating} />
            <div className={styles.right__prices}>
               <p className="label-default">{`$${product.price.toFixed(2)}`}</p> 
               <p className="label-s label-s--primary">{`$${product.oldPrice.toFixed(2)}`}</p> 
            </div>
            <p className={`body-default body-default--grey-3 ${styles.right__description}`}>{product.description}</p>
            <div className={styles.right__buttons}>
                <Button buttonSize={ButtonSize.Big} globalAction={{action: GlobalActionKind.AddToCart, product: product}}>Add To Cart</Button>
                <div className={styles.right__iconButton}>
                    <Button buttonSize={ButtonSize.Circle} globalAction={{ action: isInWishlist ? GlobalActionKind.RemoveFromWishlist : GlobalActionKind.AddToWishlist, product: product} }>
                        <img src={isInWishlist ? '/assets/icons/icon-heart-red.svg' : '/assets/icons/icon-heart-purple.svg'} alt="heart-icon" />
                    </Button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ProductHero;
