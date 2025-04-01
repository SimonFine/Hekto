import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.scss';
import { ProductContextProvider } from './store/ProductContext';
import RootLayout from './pages/RootLayout';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import { GlobalContextProvider } from './store/GlobalContext';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/products', element: <ProductsPage /> },
      { path: '/products/:productCode', element: <ProductPage /> },
      { path: '/cart', element: <CartPage /> },
      { path: '/wishlist', element: <WishlistPage /> }
    ],
  }
]);

function App() {
  return (
    <ProductContextProvider>
      <GlobalContextProvider>
        <RouterProvider router={router} />
      </GlobalContextProvider>
    </ProductContextProvider>
  );
}

export default App;