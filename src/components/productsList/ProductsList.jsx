import React, { useState } from 'react';
import './ProductsList.css'; 
import { useNavigate } from 'react-router-dom';

const ProductsList = ({ products }) => {
    const navigate = useNavigate();
    const [search, setSearch] = useState('');

    const clickHandler = (id) => {
        navigate(`/product/${id}`);
    };
    return (
        <div className='product-list'>
            <h2>Products List</h2><h3>Search Filter</h3><input type='text' value={search} onChange={(e)=>setSearch(e.target.value) } />
            <div className='products-container'>
                {products.filter(product => product.name.toLowerCase().includes(search.toLowerCase())).map((product) => (
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
