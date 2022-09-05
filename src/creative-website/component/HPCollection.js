import React from 'react'
import HPCardItem from './HPCardItem'
const HPCollection = () => {
  return (
    <>
      <div className="cards">
        <h1>Checkout these EPIC Destination</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <HPCardItem src="http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/debris3_brown.png" 
              text="Ride through the Sahara Desert on a guided camel tour" 
              label="Adventure" 
              path="/About" />
              <HPCardItem src="https://www.w3schools.com/images/picture.jpg" 
              text="Explore the hidden waterfall deep inside the Amazon Jungle" 
              label="Luxury" 
              path="/Contact" />
              <HPCardItem src="http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/debris3_brown.png" 
              text="Ride through the Sahara Desert on a guided camel tour" 
              label="Mystery" 
              path="/Quiz" />
              <HPCardItem src="https://www.w3schools.com/images/picture.jpg" 
              text="Explore the hidden waterfall deep inside the Amazon Jungle" 
              label="Adventure" 
              path="/products" />
              <HPCardItem src='http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/debris3_brown.png'
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

export default HPCollection