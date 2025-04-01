import styles from "./PageButton.module.scss";

interface PageButtonProps {
    pageNumber: number;
    currentPage: number;
    setPageNumber: (pageNumber: number) => void;
}

const PageButton: React.FC<PageButtonProps> = ({ pageNumber, currentPage, setPageNumber }) => {
    return (
        <button className={`${styles.button} ${currentPage === pageNumber ? styles['button--active'] : ''} label-default`} onClick={() => setPageNumber(pageNumber)}>{pageNumber}</button>
    );
}

export default PageButton;