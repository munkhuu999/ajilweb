import React from 'react';


const BottomContent = ({text, pic}) => {
    return (
        <div className=' flex bg-blue-300 h-64 justify-center items-center'>
          <img className=' h-64 w-64 object-contain object-center' src={pic} alt='' />
          <h1 className=' text-3xl text-white mr-6'>{text}</h1> 
        </div>
    );
}
export default BottomContent;