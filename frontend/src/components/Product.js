import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Product = ({ product }) => {
  return (
    <Card className='product' key={product.slug}>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className='card-img-top' alt={product.name} />
      </Link>
      <Card.Body>
        <div className='product-info'>
          <Link to={`/product/${product.slug}`}>
            <Card.Title>{product.name}</Card.Title>
          </Link>
          <Card.Text>${product.price}</Card.Text>
          <Button>Add to cart</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Product;
