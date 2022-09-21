import React from "react";

const SearchAndMenuButton = ({ text, onClick }) => {
    return (
        <button
             className=' bg-gray-700 mr-3 px-5 py-2 rounded-md hover:bg-gray-400 text-white'             
             onClick={onClick}>
            {text}
        </button>
    );
}
export default SearchAndMenuButton;