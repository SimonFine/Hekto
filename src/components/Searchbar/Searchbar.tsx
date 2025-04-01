import { ReactNode, useContext, useEffect, useRef, useState } from "react";
import styles from "./Searchbar.module.scss";
import Button, { ButtonSize } from "../Buttons/Button";
import { Product } from "../../models/product";
import { ProductContext } from "../../store/ProductContext";
import Autocomplete from "./Autocomplete";

interface SearchbarProps {
    placeholder?: string;
    children: ReactNode;
}

const Searchbar: React.FC<SearchbarProps> = ({ placeholder = "Search", children}) => {
    const [query, setQuery] = useState<string>("");
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

    const divRef = useRef<HTMLDivElement | null>(null);
    const [divVisible, setDivVisible] = useState(true);

    const handleClickOutside = (event: MouseEvent) => {
        if (divRef.current && !divRef.current.contains(event.target as Node)) {
            setDivVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => document.removeEventListener('mousedown', handleClickOutside);
    });

    const productsContext = useContext(ProductContext);

    const { productData } = productsContext;
        
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchQuery = e.target.value;
        setQuery(searchQuery);

        if (searchQuery.length > 0) {
            setDivVisible(true);

            const filtered = (productData ?? []).filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()));
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts([]);
        }
    };

    return (
        <div className={styles.searchbar}>
            <input
                type="text"
                placeholder={placeholder}
                className={`${styles.searchbar__input} body-s body-s--grey-3`}
                value={query}
                onChange={handleInputChange}
            />
            {
                (query !== "" && filteredProducts.length > 0 && query.length > 1 && divVisible) && 
                <div className={styles.searchbar__autocomplete} ref={divRef}>
                    {filteredProducts.map(product =>
                        <Autocomplete {...product} key={product.code}/>
                    )}
                </div>
            }
            <div className={styles.searchbar__button}>
                <Button buttonSize={ButtonSize.Small}>{children}</Button>
            </div>
        </div>
    );
}

export default Searchbar;