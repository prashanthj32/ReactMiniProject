import React from 'react';
import './ProductsList.css'; 
import { useNavigate } from 'react-router-dom';

const ProductsList = ({ products }) => {
    const navigate = useNavigate();

    const clickHandler = (id) => {
        navigate(`/product/${id}`);
    };
    return (
        <div className='product-list'>
            <h2>Products List</h2>
            <div className='products-container'>
                {products.map((product) => (
                    <div className='product-card' key={product.id} onClick={() => clickHandler(product.id)}>
                        <h3>{product.name}</h3>
                        <p>Category: {product.category}</p>
                        <p>Price: Rs.{product.price}</p>
                        <p>Discount: {product.discount}%</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsList;
