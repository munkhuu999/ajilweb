import React from 'react';
import Button from '../../Component/generals/UserButton';


const User = () => {

    const handler = () => { };

    return (
        <div className=' w-full sm:max-w-sm'>
            <form className=' bg-gray-100 mx-4 px-4 border-4 border-purple-200 rounded-2xl flex flex-col' >
                <br />
                <h1 className=' text-2xl text-black font-bold text-center mb-5'>Нэвтрэх</h1>
                <input
                    type='text'
                    className=' w-auto rounded-full h-10 text-center text-lg'
                    placeholder='Утасны дугаар эсвэл И-Мэйл'
                    onChange={handler} />
                <br />
                <input
                    type='password'
                    className=' w-auto rounded-full h-10 text-center text-lg'
                    placeholder='Нууц үг'
                    onChange={handler} />
                <h1 className=' mt-1 mb-2 text-left text-base font-bold hover:underline'>Нууц үгээ мартсан</h1>
                <Button hoverColor='hover:bg-purple-600' bgColor='bg-purple-800' text='Нэвтрэх' />
                <h1 className=' mb-2 text-center text-lg'>Эсвэл</h1>
                <Button hoverColor='hover:bg-gray-600' bgColor='bg-gray-800' text='Continue with Facebook' onClick={handler} />
                <Button hoverColor='hover:bg-gray-600' bgColor='bg-gray-800' text='Continue with Google' onClick={handler}/>
                <Button hoverColor='hover:bg-gray-600' bgColor='bg-gray-800' text='Continue with Apple' onClick={handler}/>
                <h1 className=' mb-2 text-center text-lg'>Бүртгэлгүй бол</h1>
                <Button hoverColor='hover:bg-purple-600' bgColor='bg-purple-800' text='Бүртгүүлэх' onClick={handler} />
                <br />


            </form>
        </div>
    );
    // https://esan.mn/auth/signin
}
export default User;