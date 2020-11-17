import React from 'react';
import logo from '../Assets/We are Cake.png'
import {motion } from 'framer-motion';

const Header = () =>
{
    return(
        <motion.div
            initial={{y:-100}}
            animate={{y:0}}
            transition={{type: 'tween' , duration:1}}
        >
            <header>
            <img className="logo" src={logo} alt="We are Cake"/>
            </header>
        </motion.div>

    );
}
export default Header;