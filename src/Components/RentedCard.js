import React from 'react';
import {
  Card,
  Button,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
} from 'reactstrap';

function RentedCard({ product, remove }) {
  return (
    <Card>
      <CardHeader>{product.name}</CardHeader>
      <CardBody>
        <CardTitle>Price: {product.price}</CardTitle>
        <CardText>Details: {product.details}</CardText>
        <div className='owner-button-container'>
          <Button onClick={() => remove(product.id)}>Return</Button>
        </div>
      </CardBody>
    </Card>
  );
}

export default RentedCard;
