import React from 'react';

const button = ({bgColor, text, hoverColor, onClick})=>{
 
    return(
 
         <button 
         className={` h-10 rounded-full text-white text-lg  mb-3 ${bgColor} ${hoverColor} `}
         onClick={onClick}>         
         {text}    
        </button>
     
    );
} 
export default button;

