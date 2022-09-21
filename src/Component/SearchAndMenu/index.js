import React from "react";
import Logo from '../../asset/logo/logo.png'
import SearchAndMenuButton from "../generals/SearchAndMenuButton";

const SearchMenu = () => {
    return (
        <div className=" flex flex-row items-center justify-evenly border-b-2 border-red-500 pb-5 ">
            <img className=" w-14 rounded-lg ml-10 md:ml-10" src={Logo} />
            <input type='text' className=" h-11 flex-1 max-w-2xl mx-10 rounded-lg text-center" placeholder="Хайх ..." />
            <div className=" ">
                <SearchAndMenuButton onClick={'###'} text='Хуулбар шалгуур' />
                <SearchAndMenuButton onClick={'###'} text='Гишүүнчлэл' />
                <SearchAndMenuButton onClick={'###'} text='Нэвтрэх' />

            </div>
        </div>
    );
};
export default SearchMenu;