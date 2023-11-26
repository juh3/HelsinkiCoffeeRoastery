import React from 'react';
import './Buy.css';

const coffees = [
  {
    title: 'Esperanza',
    weight: '250g',
    price: '14€',
    variety: 'Pink Bourbon',
    country: 'Columbia',
  },
  {
    title: 'San Silvestre',
    weight: '250g',
    price: '12€',
    variety: 'San Silvestre',
    country: 'Brazil',
  },
  {
    title: 'Java A Good Time',
    weight: '250g',
    price: '10€',
    variety: 'Robusta',
    country: 'India',
  },
];

const Card = ({ coffee }) => {
  return (
    <div className="card">
      <div className="card_content">
        <h3> {coffee.title}</h3>
        <p> {coffee.price}</p>
        <p> {coffee.weight}</p>
      </div>
    </div>
  );
};

const Buy = () => {
  return (
    <div className="Buy">
      <div className="Buy_wrapper">
        {coffees.map((coffee, index) => (
          <div key={index}>
            <Card coffee={coffee} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Buy;
