import { ReactNode, useContext } from "react";
import styles from "./Button.module.scss";
import { GlobalActionKind, GlobalContext } from "../../store/GlobalContext";
import { Product } from "../../models/product";

export enum ButtonSize {
    Big = "Big",
    Small = "Small",
    Medium = "Medium",
    Circle = "Circle"
}

interface ButtonProps {
    children: ReactNode;
    buttonSize: ButtonSize;
    globalAction?: { action: GlobalActionKind, product: Product };
}

const Button: React.FC<ButtonProps> = ({ children, buttonSize, globalAction }) => {

    const { dispatch } = useContext(GlobalContext);

    const handleClick = globalAction ?
        (event: React.MouseEvent) => {
            event.stopPropagation();
            
            if (globalAction.action === GlobalActionKind.AddToCart && globalAction.product) {
                dispatch({ type: globalAction.action, payload: globalAction.product });
            } else if (globalAction.action === GlobalActionKind.AddToWishlist && globalAction.product) {
                dispatch({ type: globalAction.action, payload: globalAction.product });
            } else if (globalAction.action === GlobalActionKind.RemoveFromWishlist && globalAction.product) {
                dispatch({ type: globalAction.action, payload: globalAction.product.code });
            }
        }
        : undefined;

    const buttonClass = (() => {
        switch (buttonSize) {
            case ButtonSize.Big:
                return "bigButton";
            case ButtonSize.Small:
                return "smallButton";
            case ButtonSize.Circle:
                return "circleButton";
            case ButtonSize.Medium:
            default:
                return "mediumButton";
        }
    })();

    return (
        <button className={styles[buttonClass]} onClick={handleClick}>
            {children}
        </button>
    );
}

export default Button;