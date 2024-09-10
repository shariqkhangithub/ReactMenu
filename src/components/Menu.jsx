import React from 'react'
import MenuCards from './MenuCards.jsx'
// import "./Menu.css"

export function Menu() {
  return (
    <>
      <div style={{
        // padding: '0',
        // margin: '0',
        // boxSizing: 'border-box',
        height: '100vh',
        width: '100vw',
        backgroundColor: '#fce6a7',
        textAlign: 'center'
      }}>

        <h1 style={{
          color: '#ffab00',
          fontSize: "45px",
          padding: '10px',
        }}>- THE FOOD TIME -</h1>

        <h2 style={{
          textDecoration: 'underline'
        }}>OUR MENU</h2>

        <p>Welcome to The Food Time  Where every meal is a celebration of taste, quality, and comfort. Join us for an unforgettable dining experience!</p>
        <div style={{display:'flex', flexWrap: "wrap", justifyContent:'center'}}>
        <MenuCards />
        <MenuCards />
        <MenuCards />
        <MenuCards />
        <MenuCards />
        <MenuCards />
        </div>


      </div>
    </>
  )
}

export default Menu