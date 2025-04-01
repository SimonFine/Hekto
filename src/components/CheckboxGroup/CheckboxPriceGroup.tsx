import styles from "./CheckboxGroup.module.scss";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import React, { memo, useEffect, useState } from "react";
import { ProductFilterEntry, FiltersState } from "../../sections/Products/ProductsList";

export interface CheckboxPriceGroupOption {
    label: string;
    value: [number, number];
}

interface CheckboxRatingGroupProps {
    checkboxHeader: string;
    options: CheckboxPriceGroupOption[];
    onFilterChange: <K extends keyof FiltersState>(entry: ProductFilterEntry<K>) => void;
}

const CheckboxPriceGroup: React.FC<CheckboxRatingGroupProps> = memo(({ checkboxHeader, options, onFilterChange }) => {
    const [selectedValues, setSelectedValues] = useState<Set<[number, number]>>(new Set());

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, selectedOption: CheckboxPriceGroupOption) => {
        setSelectedValues((prev) => {
            const updatedSet = new Set(prev);
            event.target.checked ? updatedSet.add(selectedOption.value) : updatedSet.delete(selectedOption.value);
            return updatedSet;
        });
    };

    useEffect(() => {
        onFilterChange({ filter: "priceRanges", filterValues: [...selectedValues] });
    }, [selectedValues, onFilterChange]); 

    return (
        <div className={styles.group}>
            <p className={`subtitle-s ${styles.group__header}`}>{checkboxHeader}</p>
            <FormGroup>
                {options.map(option => 
                    <FormControlLabel
                        control={<Checkbox onChange={(e) => handleChange(e, option)} size="large" sx={{
                            color: 'var(--color-primary-def)',
                            '&.Mui-checked': {
                            color: 'var(--color-primary-def)'
                            },
                        }}/>}
                        name={option.label}
                        label={<span className="body-default body-default--grey-3">{option.label}</span>}
                        className={styles.group__checkbox}
                        key={option.label}
                    />
                )}
            </FormGroup>
        </div>
    );
});

export default CheckboxPriceGroup;
