const ProductInfoTab: React.FC<{ additionalInfo: string }> = ({ additionalInfo} ) => {
    return (
        <p className="body-default body-default--grey-3">{additionalInfo}</p>
    );
}

export default ProductInfoTab;