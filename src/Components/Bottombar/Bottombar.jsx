import React from 'react';
import './Bottombar.css'; // You may need to adjust this based on your project structure
import animated from '../../1.jfif';
import action from '../../2.jfif';
import thrill from '../../3.jfif';
import comedy from '../../4.jfif';


const Bottombar = () => {
  return (
    <div>
    <div className='main-div'>
    <div className='wrapper'>
    <li className='kids'><img src={animated} className='kid-image' /></li>
       <li className='kids'><img src={action} className='kid-image' /></li>
       <li className='kids'><img src={thrill} className='kid-image' /></li>
       <li className='kids'><img src={comedy} className='kid-image' /></li>
  
    </div> 
    </div>
   
      </div>
  )
}
export default Bottombar