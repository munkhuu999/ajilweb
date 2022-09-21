import React from 'react';


const TypeOfBookButton = ({ text }) => {
    return (
        <div className='h-32 bg-white flex flex-col justify-center items-center rounded-lg hover:bg-gray-300 cursor-pointer'>
            {text}
        </div>
    );

};
export default TypeOfBookButton;