import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import { RouteConstants } from './shared/constants/Route.constants';
import ProductsList from './components/productsList/ProductsList';
import ProductDetails from './components/productDetails/ProductDetails';

function App() {
  const products = [
    { id: 1, name: 'Product 1', category: ' A', price: 10, discount: 5 },
    { id: 2, name: 'Product 2', category: ' B', price: 20, discount: 10 },
    { id: 3, name: 'Product 3', category: ' C', price: 30, discount: 15 },
    { id: 4, name: 'Product 4', category: ' D', price: 40, discount: 20 },
    { id: 5, name: 'Product 5', category: ' E', price: 50, discount: 25 },
    { id: 6, name: 'Product 6', category: ' F', price: 60, discount: 30 },
    { id: 7, name: 'Product 7', category: ' G', price: 70, discount: 35 },
    { id: 8, name: 'Product 8', category: ' H', price: 80, discount: 40 },
  ];
  return (
    <div className="App">
      <Routes>
        <Route path={RouteConstants.LOGIN} element={<Login />} />
        <Route path={RouteConstants.PRODUCTLIST} element={<ProductsList products={products} />} />
        <Route path={RouteConstants.PRODUCTDETAILS} element={<ProductDetails products={products}/>} />
      </Routes>
    </div>
  );
}

export default App;
