import { Dropdown } from "primereact/dropdown";
import styles from "./SettingsComponents.module.scss";

export enum SortBy {
    PriceHighLow = "PriceHighLow",
    PriceLowHigh = "PriceLowHigh",
    RatingHighLow = "RatingHighLow",
    RatingLowHigh = "RatingLowHigh"
}

interface SortByProps {
    selectedSortBy: SortBy;
    setSelectedSortBy: (val: SortBy) => void;
}

const sortByOptions = [
    { name: 'Price: High -> Low', value: SortBy.PriceHighLow },
    { name: 'Price: Low -> High', value: SortBy.PriceLowHigh },
    { name: 'Rating: High -> Low', value: SortBy.RatingHighLow },
    { name: 'Rating: Low -> High', value: SortBy.RatingLowHigh },
];

const SortByDropdown: React.FC<SortByProps> = ({ selectedSortBy, setSelectedSortBy }) => {

    return (
        <div className={styles.section}>
            <p className="body-default body-default--grey-3">Sort By</p>
            <Dropdown value={selectedSortBy} onChange={(e) => setSelectedSortBy(e.value)} options={sortByOptions} optionLabel="name" 
                className={styles.dropdown} />
        </div>
    );
}

export default SortByDropdown;