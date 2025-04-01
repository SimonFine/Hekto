import styles from "./CheckboxGroup.module.scss";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import React, { memo, useEffect, useState } from "react";
import { ProductFilterEntry, FiltersState } from "../../sections/Products/ProductsList";
import { useSearchParams } from "react-router-dom";

interface CheckboxGroupProps {
    identifier: keyof FiltersState;
    checkboxHeader: string;
    options: string[];
    color: "purple" | "red";
    onFilterChange: <K extends keyof FiltersState>(entry: ProductFilterEntry<K>) => void;
}

const colorMap = {
    purple: 'var(--color-info-def)',
    red: 'var(--color-primary-def)',
};

const CheckboxGroup: React.FC<CheckboxGroupProps> = memo(({ identifier, checkboxHeader: name, options, color, onFilterChange }) => {
    const [searchParams] = useSearchParams();
    const categoryFromURL = searchParams.get("category");

    const [selectedValues, setSelectedValues] = useState<Set<string>>(new Set(categoryFromURL ? [categoryFromURL] : []));

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValues((prev) => {
            const updatedSet = new Set(prev);
            event.target.checked ? updatedSet.add(event.target.name) : updatedSet.delete(event.target.name);
            return updatedSet;
        });
    };

    useEffect(() => {
        onFilterChange({ filter: identifier, filterValues: [...selectedValues] });
    }, [selectedValues, identifier, onFilterChange]); 

    return (
        <div className={styles.group}>
            <p className={`subtitle-s ${styles.group__header}`}>{name}</p>
            <FormGroup>
                {options.map(option => 
                    <FormControlLabel
                        control={<Checkbox onChange={handleChange} size="large" sx={{
                            color: colorMap[color],
                            '&.Mui-checked': {
                            color: colorMap[color],
                            },
                        }}/>}
                        checked={selectedValues.has(option)}
                        name={option}
                        label={<span className="body-default body-default--grey-3">{option}</span>}
                        className={styles.group__checkbox}
                        key={option}
                    />
                )}
            </FormGroup>
        </div>
    );
});

export default CheckboxGroup;
