import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

const First = ({ addFlavor, cake }) =>{
    const flavors = ['Chocolate', 'Strawberry', 'Butterscotch'];

    return (
        <motion.first
        initial={{ opacity: 0, x: '100vw' }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: 'spring', delay: 0.5 }}>
            <h4 class='heading'>Step 1: Select your Flavor</h4>
            <ul>
            {flavors.map(flavor => {
          let spanClass = cake.flavor === flavor ? 'active' : '';
          return (
            <motion.li key={flavor} onClick={() => addFlavor(flavor)}
              whileHover={{ scale: 1.3, originZ: 0,color: "black" }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className={spanClass}>{ flavor }</span>
            </motion.li>
          )
        })}
            </ul>
            {cake.flavor && (
              <motion.div className="next"
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', stiffness: 120 }}
            >
            <Link to='/second'>
                <motion.button
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0px 0px 4px #222626",
                }}>
                    Next
                </motion.button>
            </Link>
            </motion.div>
            )}
        </motion.first>
    )
}
export default First;