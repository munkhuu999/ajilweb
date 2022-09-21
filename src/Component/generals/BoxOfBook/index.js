import React from 'react';
import {useNavigate} from 'react-router-dom'

const BoxOfBook = ({ name, pic, id, type }) => {
    const navigate = useNavigate();

    return (

        <div className=' h-64 md:h-52 lg:h-48 xl:h-44 w-52 md:w-40 lg:w-32 xl:w-28 xl:bg-red-300 bg-yellow-100 flex-none m-6 rounded-lg cursor-pointer transform hover:scale-110'
        onClick={()=>navigate('/onebook', {state:{id:id, type: type}})}>

            <img src={pic} alt='' />
            <div className=' text-center text-sm '>{name}</div>            
        </div>
    );
}
export default BoxOfBook;



// <div className=' flex-none h-64 w-1/2 bg-yellow-100 m-2 hover:cursor-pointer'>
// <div className=' flex flex-col items-center justify-center'>
//     {name} and {story}
//     <div>feefs</div>
//     <div>feefs</div>
//     <div>feefs</div>
// </div>

// </div>