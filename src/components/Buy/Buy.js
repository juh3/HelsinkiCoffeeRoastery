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
    title: 'Robust Joe',
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
        <h3 className="card_heading"> {coffee.title}</h3>
        <div className="card_row">
          <p className="card_country">
            Origin: &nbsp;
            {coffee.country}
          </p>
        </div>
        <div className="card_row">
          <p className="card_variety">
            Variety: &nbsp;
            {coffee.variety}
          </p>
        </div>
        <div className="card_row">
          <p className="card_weight"> {coffee.weight}</p>
          <p className="card_price"> {coffee.price}</p>
        </div>
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
