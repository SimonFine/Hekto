import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '../models/product';

interface ProductContextState {
  productData: Product[] | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: ProductContextState = {
  productData: [],
  isLoading: false,
  error: null
}

const ProductContext = createContext<ProductContextState>(initialState);

const ProductContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [productData, setProductData] = useState<Product[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
        try {
            const response = await fetch('https://superlative-elf-5b80fd.netlify.app/db.json')
            const resData = await response.json();

            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }

            setProductData(resData);

        } catch (err) {
            setError('Error fetching products data');
        }
        setIsLoading(false);
    })();
  }, []);

  return (
    <ProductContext.Provider value={{ productData, isLoading, error }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContextProvider, ProductContext};
