import { useCallback, useContext, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./ProductsList.module.scss";
import { ProductContext } from "../../store/ProductContext";
import CheckboxGroup from "../../components/CheckboxGroup/CheckboxGroup";
import CheckboxRatingGroup from "../../components/CheckboxGroup/CheckboxRatingGroup";
import CheckboxPriceGroup, { CheckboxPriceGroupOption } from "../../components/CheckboxGroup/CheckboxPriceGroup";
import ViewSelector, { Views } from "./SettingsComponents/ViewSelector";
import SortByDropdown, { SortBy } from "./SettingsComponents/SortByDropdown";
import PerPageDropdown from "./SettingsComponents/PerPageDropdown";
import PageButton from "../../components/PageButton/PageButton";
import ProductCardGrid from "../../components/ProductCardGrid/ProductCardGrid";
import { Skeleton } from "@mui/material";
import Error from "../Error/Error";

export interface FiltersState {
    brands: string[];
    discounts: string[];
    ratings: number[];
    categories: string[];
    priceRanges: [number, number][];
}

export interface SettingsState {
    view: Views;
    sortBy: SortBy;
    perPage: number;
    currentPage: number;
}

export type ProductFilterEntry<K extends keyof FiltersState> = {
    filter: K;
    filterValues: FiltersState[K];
};

const prices: CheckboxPriceGroupOption[] = [
    {
        label: "$0 - $20",
        value: [0, 20]
    },
    {
        label: "$20 - $40",
        value: [20, 40]
    },
    {
        label: "$40 - $60",
        value: [40, 60]
    },
    {
        label: "$60 - $80",
        value: [60, 80]
    },
    {
        label: "$80+",
        value: [80, Infinity]
    }
];

const ProductsList: React.FC = () => {
    const productsContext = useContext(ProductContext);
    const [filters, setFilters] = useState<FiltersState>({
        brands: [],
        discounts: [],
        ratings: [],
        categories: [],
        priceRanges: [],
    });

    const [settings, setSettings] = useState<SettingsState>({
        view: Views.List,
        sortBy: SortBy.PriceHighLow,
        perPage: 5,
        currentPage: 1
    });

    const updateSettings = <K extends keyof SettingsState>(key: K, value: SettingsState[K]) => {
        setSettings((prev) => ({ ...prev, [key]: value }));
        if (key !== 'currentPage') { setSettings(prev => ({ ...prev, currentPage: 1 })); }
    };
      
    const handleFilterChange = useCallback((<K extends keyof FiltersState>(filterEntry: ProductFilterEntry<K>) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filterEntry.filter]: filterEntry.filterValues,
        }));
        setSettings(prev => ({ ...prev, currentPage: 1 }));
    }), []);
    
    const { productData, isLoading, error } = productsContext;
    
    if (error) return <Error message={error} />

    const sortedAndFilteredProducts = productData ? 
        productData.filter(product => {
            const isCategoryMatch = filters.categories.length === 0 || filters.categories.includes(product.category);
            const isRatingMatch = filters.ratings.length === 0 || filters.ratings.includes(product.rating);
            const isPriceRangeMatch = filters.priceRanges.length === 0 || filters.priceRanges.some(([min, max]) => product.price >= min && product.price <= max);
        
            return isCategoryMatch && isRatingMatch && isPriceRangeMatch;
        }).sort((a, b) => {
            switch (settings.sortBy) {
                case SortBy.PriceHighLow:
                    return b.price - a.price;
                case SortBy.PriceLowHigh:
                    return a.price - b.price;
                case SortBy.RatingHighLow:
                    return b.rating - a.rating;
                case SortBy.RatingLowHigh:
                    return a.rating - b.rating;
                default:
                    return 0;
            }
        }) : [];

    const numberOfPages = Math.ceil(sortedAndFilteredProducts.length / settings.perPage);

    const paginatedProducts = sortedAndFilteredProducts.slice(
        (settings.currentPage - 1) * settings.perPage,
        settings.currentPage * settings.perPage
    );

    
    return (
        <div className={styles.products}>
            <div className={styles.settings}>
                <PerPageDropdown selectedPerPage={settings.perPage} setSelectedPerPage={(val) => updateSettings("perPage", val)}/>
                <SortByDropdown selectedSortBy={settings.sortBy} setSelectedSortBy={(val) => updateSettings("sortBy", val)}/>
                <ViewSelector selectedView={settings.view} setSelectedView={(val) => updateSettings("view", val)}/>
            </div>
            <section className={styles.productsSection}>
                <div className={styles.productsSection__filters}>
                    <CheckboxGroup 
                        identifier="brands"
                        checkboxHeader="Product Brand"
                        options={["Casio", "Apple", "Sony", "Nike", "Vke", "Glossiness"]}
                        color="purple"
                        onFilterChange={handleFilterChange}
                    />
                    <CheckboxGroup 
                        identifier="discounts"
                        checkboxHeader="Discount Offer"
                        options={["20% Cashback", "5% Cashback", "25% Discount Offer"]}
                        color="red"
                        onFilterChange={handleFilterChange}
                    />
                    <CheckboxRatingGroup
                        checkboxHeader="Rating"
                        onFilterChange={handleFilterChange}
                    />
                    <CheckboxGroup 
                        identifier="categories"
                        checkboxHeader="Categories"
                        options={["Watches", "Headphones", "Laptop", "Game Console", "Clothe", "Jewellery", "Perfume"]}
                        color="red"
                        onFilterChange={handleFilterChange}
                    />
                    <CheckboxPriceGroup 
                        checkboxHeader="Price"
                        options={prices}
                        onFilterChange={handleFilterChange}
                    />
                </div>
                <div className={settings.view === Views.List ? styles.productsSection__listView : styles.productsSection__gridView}>
                    {
                        isLoading ? (
                            <div className={styles.skeletons}>
                                <Skeleton variant="rectangular" sx={{ width: 'max(97.6rem, 50vw)', height: "23.2rem" }} />
                                <Skeleton variant="rectangular" sx={{ width: 'max(97.6rem, 50vw)', height: "23.2rem" }} />
                                <Skeleton variant="rectangular" sx={{ width: 'max(97.6rem, 50vw)', height: "23.2rem" }} />
                                <Skeleton variant="rectangular" sx={{ width: 'max(97.6rem, 50vw)', height: "23.2rem" }} />
                                <Skeleton variant="rectangular" sx={{ width: 'max(97.6rem, 50vw)', height: "23.2rem" }} />
                            </div>
                        ) : (
                            paginatedProducts.map((product, index) => 
                                settings.view === Views.List ? (
                                    <ProductCard {...product} key={index} />
                                ) : (
                                    <ProductCardGrid {...product} key={index} />
                                )
                            )
                        )
                    }
                </div>
            </section>
            <div className={styles.pagination}>
                {Array.from({ length: numberOfPages }).map((_, index) => 
                    <PageButton pageNumber={index + 1} currentPage={settings.currentPage} setPageNumber={(val) => updateSettings("currentPage", val)} key={index}/>
                )}
            </div>
        </div>
    );
}

export default ProductsList;