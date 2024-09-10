import React from 'react'
import burger from './../assets/burger.png'

export const MenuCards = () => {
    return (
        <>

            <div style={{
                height: '90px',
                width: '430px',
                backgroundColor: '#ffab00',
                margin: '20px',
                borderRadius: '15px',
                display: 'flex'
            }}>

                <div style={{
                    height: '100%',
                    width: 'fit-content',
                    backgroundColor: 'white',
                    borderRadius: '15px 0px 0px 15px'
                }}> <img src={burger}  style={{height:'100%',width:'auto',borderRadius:'15px 0px 0px 15px'}} /> </div>


                <div style={{textAlign: "initial", paddingLeft:'8px'}}>
                    <h4>Burger</h4>
                    <p style={{marginTop: '-15px'}}>This is very delecious food in the world</p>
                    <p style={{marginTop: '-11px', marginLeft: '100px'}}>0</p>
                </div>
            </div>
        </>

    )
}
export default MenuCards
