import React from 'react';
import './App.module.css'

import {Link}from "react-router-dom";

function Nav() {
    const navStyle = {
        color:'white'
    }
  return (
   <nav >
       <h3>COVID-19 Tracker and Map</h3>
           <ul className="nav-links">
            <Link style={navStyle} to='/Tracker'>
             <li >Tracker</li>
             </Link>
             <Link style={navStyle} to='/Map'>
             <li>Map</li>
             </Link>
           </ul>
   </nav>
  );
}

export default Nav;
 