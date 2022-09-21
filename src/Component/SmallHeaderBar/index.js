import React from 'react';
import Searchlogo from '../../asset/logo/search.png';
import MenuLogo from '../../asset/logo/menu.png';
import Logo from '../../asset/logo/logo.png';

const HeaderBar = () => {
    return (
        <div className=' p-5 bg-white w-auto h-20 items-center'>
            <ul className='  flex flex-row justify-between items-center'>
                <li className=' hover:bg-gray-200'><img src={MenuLogo} className=' w-9' /></li>
                <li><img src={Logo} className=' w-12' /></li>
                <li className=' hover:bg-gray-200 rounded-md'><img src={Searchlogo} className=' w-9' /></li>
            </ul>
        </div>
    );

};
export default HeaderBar;