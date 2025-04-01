import styles from "./SettingsComponents.module.scss";
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';import { IconButton } from "@mui/material";

export enum Views {
    List = "List",
    Grid = "Grid"
}

interface ViewProps {
    selectedView: Views;
    setSelectedView: (val: Views) => void;
}

const ViewSelector: React.FC<ViewProps> = ({ selectedView, setSelectedView }) => {
    return (
        <div className={styles.section}>
            <p className="body-default body-default--grey-3">View</p>
            <IconButton
                disableRipple
                aria-label="grid-view"
                style={{color: `var(${selectedView === Views.Grid ? "--color-primary-def" : "--color-black"})`}}
                onClick={() => setSelectedView(Views.Grid)}
            >
                <GridViewIcon style={{ width: "2.4rem", height: "2.4rem" }} />
            </IconButton>
            <IconButton
                disableRipple
                aria-label="grid-view"
                style={{color: `var(${selectedView === Views.List ? "--color-primary-def" : "--color-black"})`}}
                onClick={() => setSelectedView(Views.List)}
            >
                <ViewAgendaOutlinedIcon style={{ width: "2.4rem", height: "2.4rem" }} />
            </IconButton>
        </div>
    );
}

export default ViewSelector;