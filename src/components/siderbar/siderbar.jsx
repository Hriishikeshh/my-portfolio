import './Siderbar.scss';
import { motion } from 'framer-motion';
import Links from './links/Links';
import Togglebutton from "./toggle/Togglebutton";
import { useState } from 'react';

const Siderbar=()=>{

    const[open,setOpen]=useState(false)   //use statehook

    const variants={
        open:{
            clipPath: "circle(1200px at 50px 50px)",
            transiton:{
                type:"spring",
                stiffness:20,
            },
        },
        closed: {
            clipPath:"circle(30px at 50px 50px)",
            transiton:{
                delay:1,
                type: "spring",
                stiffness: 400,
                damping: 40,
            },
        },

    };

    return(
        <motion.div className="sidebar" animate={open ? "open" : "closed"}>
            <motion.div className="bg" variants={variants}>
               <Links />
            </motion.div>
            <Togglebutton setOpen={setOpen} />
        </motion.div>
    );
}

export default Siderbar;