import { Snackbar, SnackbarContent } from "@mui/material";
import { useContext, useEffect, useRef, useState } from "react";
import { GlobalContext } from "../../store/GlobalContext";
import { useLocation } from "react-router-dom";

const SnackBar: React.FC = () => {
    const { state } = useContext(GlobalContext);

    const cartSize = state.cart.reduce((acc, curr) => acc + (curr.quantity ?? 0), 0);
    const previousCartSize = useRef(cartSize);

    const location = useLocation();

    const [openSnackbar, setOpenSnackbar] = useState(false);

    useEffect(() => {
        if (cartSize > previousCartSize.current) {
            setOpenSnackbar(true);
            previousCartSize.current = cartSize;
        } else if (location.pathname === "/cart") {
            setOpenSnackbar(false);
        } else {
            previousCartSize.current = cartSize;
        }
    }, [cartSize, location]);

    if (location.pathname === "/cart") return null;

    const handleClose = () => {
        setOpenSnackbar(false);
    };

    return (
        <Snackbar
            anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
            open={openSnackbar}
            autoHideDuration={1500}
            onClose={handleClose}
        >
            <SnackbarContent
                message="Item added to cart!"
                sx={{
                    fontFamily: "Josefin Sans, sans-serif",
                    fontSize: "16px",
                    margin: "0 auto",
                    backgroundColor: "var(--color-grey-2)",
                    color: "var(--color-black)",

                }}
            />
        </Snackbar>
    );
};

export default SnackBar;
