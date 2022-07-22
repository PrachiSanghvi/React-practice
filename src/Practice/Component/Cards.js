import React from 'react'
import './Cards.css';
import CardItem from './CartItem';

const Cards = () => {
  return (
    <>
      <div className="cards">
        <h1>Checkout these EPIC Destination</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem src="http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/debris3_brown.png" 
              text="Explore the hidden waterfall deep inside the Amazon Jungle" 
              label="Adventure" 
              path="/services" />
              <CardItem src="https://www.w3schools.com/images/picture.jpg" 
              text="Explore the hidden waterfall deep inside the Amazon Jungle" 
              label="Luxury" 
              path="/services" />
              <CardItem src="https://www.w3schools.com/images/picture.jpg" 
              text="Explore the hidden waterfall deep inside the Amazon Jungle" 
              label="Mystery" 
              path="/services" />
              <CardItem src="https://www.w3schools.com/images/picture.jpg" 
              text="Explore the hidden waterfall deep inside the Amazon Jungle" 
              label="Adventure" 
              path="/products" />
              <CardItem src='https://www.w3schools.com/images/picture.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up' />
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards