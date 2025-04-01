import { useContext } from "react";
import { GlobalActionKind, GlobalContext } from "../../store/GlobalContext";
import QuantitySelector from "../../components/QuantityButton/QuantityButton";
import styles from "./Cart.module.scss";
import Button, { ButtonSize } from "../../components/Buttons/Button";
import { NavLink } from "react-router-dom";

const SHIPPING_PRICE = 100; 

const Cart: React.FC = () => {
    const { state, dispatch } = useContext(GlobalContext);
    
    const handleClearCart = () => {
        dispatch({ type: GlobalActionKind.ClearCart});
    }

    const subtotal = state.cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);

    return (
        <>
            {state.cart.length > 0 ?
                (
                    <div className={styles.cart}>
                        <div className={styles.left}>
                            {state.cart.map(product =>
                                <div className={styles.product} key={product.code}>
                                    <img src={product.imgUrl} alt="product-image" className={styles.product__img} />
                                    <div className={styles.product__namePrice}>
                                        <p className={`${styles.product__name} subtitle-m`}>{product.name}</p>
                                        <p className={`${styles.product__price} label-default`}>{`$${product.price.toFixed(2)}`}</p>
                                    </div>
                                    <QuantitySelector {...product}/>
                                    <p className={`${styles.product__totalPrice} label-default`}>{`$${(product.price * product.quantity).toFixed(2)}`}</p>
                                </div>
                            )}
                        </div>
                        <div className={styles.right}>
                            <div className={styles.grey}>
                                <div className={styles.grey__prices}>
                                    <div className={styles.grey__price}>
                                        <span className="body-bold">Subtotal:</span>
                                        <span className="label-bold">{`$${subtotal.toFixed(2)}`}</span>
                                    </div>
                                    <div className={styles.grey__price}>
                                        <span className="body-bold">Total:</span>
                                        <span className="label-bold">{`$${(subtotal + SHIPPING_PRICE).toFixed(2)}`}</span>
                                    </div>
                                    <div className={styles.grey__price}>
                                        <span className="body-s body-s--grey-3">Shipping:</span>
                                        <span className="label-s label-s--grey-3">{`$${SHIPPING_PRICE.toFixed(2)}`}</span>
                                    </div>
                                </div>
                                <div className={styles.grey__button}>
                                    <Button buttonSize={ButtonSize.Big}>Proceed to checkout</Button>        
                                </div>
                            </div>
                            <div className={styles.clearCart}>
                                <button className={`${styles.clearCart__button} body-default body-default--primary`} onClick={handleClearCart}>Clear cart</button>
                            </div>
                        </div>

                    </div>
                )
                :
                (
                    <div className={styles.cartEmpty}>
                        <img src="/assets/images/cart-empty.svg" alt="cart-empty-image" className={styles.cartEmpty__img}/>
                        <h3>Your Cart Is Empty</h3>
                        <NavLink to="/products">
                            <Button buttonSize={ButtonSize.Big}>Start Shopping</Button>        
                        </NavLink>
                    </div>
                )
            }
        </>
    );
}

export default Cart;