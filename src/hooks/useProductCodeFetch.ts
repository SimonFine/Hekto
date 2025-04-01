import { useEffect, useState } from 'react';
import { Product } from '../models/product';

export function useProductCodeFetch(code: string) {
  const [productData, setProductData] = useState<Product[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      (async () => {
          try {
              const response = await fetch(`http://localhost:5000/products?code=${code}`);
              const resData = await response.json();
  
              if (!response.ok) {
                  throw new Error('Failed to fetch product');
              }
  
              setProductData(resData);

          } catch (err) {
              setError('Error fetching data');
          }
          setIsLoading(false);
      })();
    }, [code]);

    return {productData, isLoading, error};
}