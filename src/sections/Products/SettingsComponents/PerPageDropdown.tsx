import { Dropdown } from "primereact/dropdown"
import styles from "./SettingsComponents.module.scss";

interface PerPageProps {
    selectedPerPage: number;
    setSelectedPerPage: (val: number) => void;
}

const perPageOptions = [
    { name: '5', value: 5 },
    { name: '10', value: 10 },
    { name: '15', value: 15 },
];

const PerPageDropdown: React.FC<PerPageProps> = ({ selectedPerPage, setSelectedPerPage }) => {
    return (
        <div className={styles.section}>
            <p className="body-default body-default--grey-3">Per Page</p>
            <Dropdown value={selectedPerPage} onChange={(e) => setSelectedPerPage(e.value)} options={perPageOptions} optionLabel="name" 
                className={`${styles.dropdown} ${styles['dropdown--small']}`} />
        </div>
    );
}

export default PerPageDropdown;