import React from 'react';
import {Link} from 'react-router-dom';


const MenuOfBookList = ({ text, paths}) => {
    return (

        <li className=' p-4 text-sm font-semibold text-gray-800 underline-offset-8 decoration-red-500 hover:underline cursor-pointer'>
           <Link to={paths}>{text}</Link> 
        </li>



    );
}
export default MenuOfBookList;