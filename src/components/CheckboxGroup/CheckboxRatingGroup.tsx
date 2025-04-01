import styles from "./CheckboxGroup.module.scss";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import React, { memo, useEffect, useState } from "react";
import { ProductFilterEntry, FiltersState } from "../../sections/Products/ProductsList";
import StarRating from "../StarRating/StarRating";

interface CheckboxRatingGroupProps {
    checkboxHeader: string;
    onFilterChange: <K extends keyof FiltersState>(entry: ProductFilterEntry<K>) => void;
}

const CheckboxRatingGroup: React.FC<CheckboxRatingGroupProps> = memo(({ checkboxHeader, onFilterChange }) => {
    const [selectedValues, setSelectedValues] = useState<Set<number>>(new Set());

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValues((prev) => {
            const updatedSet = new Set(prev);
            event.target.checked ? updatedSet.add(Number.parseInt(event.target.value)) : updatedSet.delete(Number.parseInt(event.target.value));
            return updatedSet;
        });
    };

    useEffect(() => {
        onFilterChange({ filter: "ratings", filterValues: [...selectedValues] });
    }, [selectedValues, onFilterChange]); 

    return (
        <div className={styles.group}>
            <p className={`subtitle-s ${styles.group__header}`}>{checkboxHeader}</p>
            <FormGroup>
                {Array.from({ length: 5} ).map((_, index) => 
                    <FormControlLabel
                        control={<Checkbox onChange={handleChange} size="large" sx={{
                            color: 'var(--color-secondary-def)',
                            '&.Mui-checked': {
                            color: 'var(--color-secondary-def)'
                            },
                        }}/>}
                        value={5 - index}
                        label={<span className="body-default body-default--grey-3"><StarRating rating={5 - index} /></span>}
                        className={styles.group__checkbox}
                        key={index}
                    />
                )}
            </FormGroup>
        </div>
    );
});

export default CheckboxRatingGroup;
