import React from 'react';
import './Navbar.css';
import gaming from '../../gaming.jfif';

import search from '../../search.jfif';
import home from '../../home.jfif';
import person from '../../prson.jfif';

 const Navbar = () => {
   return (
     <nav class='flex-div'>
       <div class='nav-left'>
         <img src={home} class='nav-logo-home' />
       </div>
       <div class='nav-center'>
         <div class='nav-top'>
           <input type='text' placeholder='search'></input>
           <img src={search} class='nav-logo-search' />
         </div>
       </div>
       <div class='nav-right'>
         <img src={person} class='nav-logo-person' />
       </div>
     </nav>

   )
 }
export default Navbar