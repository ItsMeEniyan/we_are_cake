import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

function home() {
    return (
        <motion.home
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0,duration: 2}}
        >
            <h4 className='home-text'>Welcome to We are Cake</h4>
            <Link to='/first'>
                <motion.button className='button-start'
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0px 0px 4px #222626",
                }}
                >
                    Create your cake
                </motion.button>
            </Link>
        </motion.home>
    )
}
export default home;