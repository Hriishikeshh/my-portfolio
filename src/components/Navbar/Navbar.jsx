import React from 'react';
import './Navbar.scss';
import Siderbar from '../siderbar/siderbar';
import { motion } from 'framer-motion';

const Navbar=()=>{
    return(
        <div className='navbar'>
            <div className='wrapper'>
            <Siderbar />
            <motion.span
                initial={{opacity:0,scale:0.5}}
                animate={{opacity:1,scale:1}}
                transition={{duration:1}}
                >
                 hrishi
                </motion.span>
                <div className='social'>
                    <a href="#"><img src="/facebook.png" alt="" /></a>
                    <a href="#"><img src="/instagram.png" alt="" /></a>
                    <a href="#"><img src="/youtube.png" alt="" /></a>
                    <a href="#"><img src="/dribbble.png" alt="" /></a>

                </div>
            </div>

        </div>

    )
}

export default Navbar;

