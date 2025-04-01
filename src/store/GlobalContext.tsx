import { Product } from "../models/product";
import { createContext, ReactNode, useReducer } from "react";

export enum GlobalActionKind {
    AddToCart = "AddToCart",
    RemoveFromCart = "RemoveFromCart",
    ClearCart = "ClearCart",
    AddToWishlist = "AddToWishlist",
    RemoveFromWishlist = "RemoveFromWishlist"
}

interface GlobalContextState {
    cart: (Product & { quantity: number} )[];
    wishlist: Product[];
}

type GlobalContextAction =
    | { type: GlobalActionKind.AddToCart; payload: Product }
    | { type: GlobalActionKind.RemoveFromCart; payload: string }
    | { type: GlobalActionKind.ClearCart }
    | { type: GlobalActionKind.AddToWishlist; payload: Product }
    | { type: GlobalActionKind.RemoveFromWishlist; payload: string };


export const initialState: GlobalContextState = {
    cart: [],
    wishlist: [],
};

function globalReducer(state: GlobalContextState, action: GlobalContextAction): GlobalContextState {
    switch (action.type) {
        case GlobalActionKind.AddToCart: {
            const updatedCart = [...state.cart];

            const existingItemIndex = updatedCart.findIndex(cartItem => cartItem.code === action.payload.code);

            if (existingItemIndex === -1) {
                updatedCart.push({
                    ...action.payload,
                    quantity: 1
                });
            } else {
                updatedCart[existingItemIndex] = {
                    ...updatedCart[existingItemIndex],
                    quantity: (updatedCart[existingItemIndex].quantity ?? 0) + 1
                }
            }

            return {
                ...state,
                cart: updatedCart
            };
        }
  
        case GlobalActionKind.RemoveFromCart: {
            let updatedCart = [...state.cart];

            const cartItemIndex = updatedCart.findIndex(cartItem => cartItem.code === action.payload);
            const cartItem = updatedCart[cartItemIndex];

            if (cartItem.quantity > 1) {
                updatedCart[cartItemIndex] = {
                    ...cartItem,
                    quantity: cartItem.quantity - 1
                };
            } else {
                updatedCart = updatedCart.filter(cartItem => cartItem.code !== action.payload);
            }

            return {
                ...state,
                cart: updatedCart
            };   
        }

        case GlobalActionKind.ClearCart: {
            return {
                ...state,
                cart: []
            }
        }

        case GlobalActionKind.AddToWishlist: {
            const updatedWishlist = [...state.wishlist];
            
            if (!updatedWishlist.some(wishlistItem => wishlistItem.code === action.payload.code)) {
                updatedWishlist.push(action.payload);
            }

            return {
                ...state,
                wishlist: updatedWishlist
            }
        }

        case GlobalActionKind.RemoveFromWishlist: {
            const updatedWishlist = state.wishlist.filter(wishlistItem => wishlistItem.code !== action.payload);
            return {
                ...state,
                wishlist: updatedWishlist
            }
        }

        default:
            return state;
    }
}

interface GlobalContextProps {
    state: GlobalContextState;
    dispatch: React.Dispatch<GlobalContextAction>;
}
  
const GlobalContext = createContext<GlobalContextProps>({ state: initialState, dispatch: () => {}});
  
const GlobalContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(globalReducer, initialState);

    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalContextProvider, GlobalContext};

