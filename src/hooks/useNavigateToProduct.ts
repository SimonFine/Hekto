import { useNavigate } from "react-router-dom";

const useNavigateToProduct = () => {
    const navigate = useNavigate();
    
    const goToProduct = (code: string) => {
        navigate(`/products/${code}`);
    };

    return goToProduct;
};

export default useNavigateToProduct;
