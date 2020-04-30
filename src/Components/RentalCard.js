import React from 'react';
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
} from 'reactstrap';

function RentalCard({ product, rentNow }) {
  const isRented = () => {
    if (product.renting === false) {
      return (
        <button
          onClick={() => {
            rentNow(product);
          }}
        >
          Rent this Now
        </button>
      );
    } else {
      return (
        <CardText>Some nice person is currently renting this product</CardText>
      );
    }
  };

  return (
    <Card>
      <CardHeader>{product.name}</CardHeader>
      <div className='card-text-container'>
        <CardTitle>Price Per Day: ${product.price}</CardTitle>
        <CardText>Details: {product.details}</CardText>
        <CardText>Rent Timeframe: {product.timeframe} days</CardText>
        {/* If statement for if product is being rented or not */}
        {isRented()}
      </div>
    </Card>
  );
}

export default RentalCard;
