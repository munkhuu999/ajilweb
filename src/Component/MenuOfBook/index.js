import React from 'react';
import MenuOfBookList from '../generals/MenuOfBookList';


const MenuOfBook = () => {
    return (
        
            <div className=' flex flex-row justify-between items-center'>
                <ul className=' flex flex-row'>
                <MenuOfBookList text='ЭХЛЭЛ' paths='/'/>
                <MenuOfBookList text='НОМ' paths='/onebook'/>
                <MenuOfBookList text='МЭРГЭЖЛИЙН НОМ' paths='/book'/>
                <MenuOfBookList text='ЭРДМИЙН АЖИЛ' paths='/book'/>
                <MenuOfBookList text='СУДАЛГАА' paths='/book'/>
                <MenuOfBookList text='СОНИН' paths='/book'/>
                <MenuOfBookList text='СЭТГҮҮЛ' paths='/book'/>
                </ul>
                <h1 className=' p-1 bg-slate-400 rounded-lg hover:bg-slate-500 cursor-pointer'>Бүтээл борлуулах</h1>
               
            </div>
        
     
    );
}
export default MenuOfBook;