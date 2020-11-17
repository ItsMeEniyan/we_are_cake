import React from 'react';

const Thank = ({cake}) =>{
    return (
        <first>
            <h4 className='heading'>Thank You for your Order</h4>
            <p>You ordered a {cake.flavor} cake with:</p>
            {cake.toppings.map(topping => <div key={topping}>{topping}</div>)}
        </first>
    )
}
export default Thank;