import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Box } from '@mui/material';


const ProductDetails = ({ products }) => {
    const params = useParams();

    return (
        <div className='product-details'>
            <h2>Product Details </h2>
            {products.map((product, index) => (product.id == params.id && <Card variant="outlined" key={index} className='product-details-container'>
                <h3>{product.name}</h3>
                <p>Category: {product.category}</p>
                <p>Price: ${product.price}</p>
                <p>Discount: {product.discount}%</p>
            </Card>))}
        </div>
    );
};

export default ProductDetails;
