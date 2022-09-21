import React from 'react';
import TypeOfBookButton from '../generals/TypeOfBookButton';

const TypeOfBook = () => {
    return (
        <div className=' w-full grid grid-cols-2 gap-5 p-3 md:grid-cols-4 lg:grid-cols-8'>
            <TypeOfBookButton text='Аудио ном' />
            <TypeOfBookButton text='Үнэгүй' />
            <TypeOfBookButton text='Хувь хүний хөгжил' />
            <TypeOfBookButton text='Мэргэжлийн ном' />
            <TypeOfBookButton text='Уран зохиол' />
            <TypeOfBookButton text='Үнэн сонин' />
            <TypeOfBookButton text='Түүх' />
            <TypeOfBookButton text='Эрдмийн ажил' />
        </div>
    );

};
export default TypeOfBook;