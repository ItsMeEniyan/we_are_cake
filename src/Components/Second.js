import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

const Second = ({ addTopping, cake }) => {
    let toppings = ['Shredded coconut', 'Chocolate flakes', 'Fresh fruit', 'Chocolate curls', 'Powdered sugar'];
  
    return (
      <motion.first
      initial={{ opacity: 0, x: '100vw' }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ type: 'spring', delay: 0.5 }}>
            <h4 className='heading'>Step 2: Select your Toppings</h4>
            <ul>
            {toppings.map(topping => {
          let spanClass = cake.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li key={topping} onClick={() => addTopping(topping)}
            whileHover={{ scale: 1.3, originZ: 0,color: "black" }}
            transition={{ type: 'spring', stiffness: 300 }}
              >
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
            </ul>
            <Link to='/thank'>
                <motion.button
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0px 0px 4px #222626",
                }}>
                    Order
                </motion.button>
            </Link>
        </motion.first>
    )
}
export default Second;