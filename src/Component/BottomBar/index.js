import React from 'react';
import MenuServer from '../MenuServer';


const BottomBar = () => {
    return (
        <div className=' bg-slate-400 pl-5 md:flex md:flex-row justify-evenly'>
            <div>
                <h1 className=' text-lg font-bold mb-3'>Бидний тухай</h1>
                <ul className=' mb-4'>
                    <MenuServer text='Үйлчилгээний нөхцөл' />
                    <MenuServer text='Нууцлалын бодлого' />
                    <MenuServer text='Хамтран ажиллах' />
                </ul>
            </div>


            <div>
                <h1 className=' text-lg font-bold mb-3'>Тусламж</h1>
                <ul className=' mb-4'>
                    <MenuServer text='Вэб ашиглах заавар' />
                    <MenuServer text='Апп ашиглах заавар' />
                    <MenuServer text='Түгээмэл асуултууд' />
                </ul>
            </div>
            <div>
                <h1 className=' text-lg font-bold mb-3'>Холбоо барих</h1>
                <ul className=' mb-4'>
                    <MenuServer text='Хаяг: БГД 2-р хороо Бүрд оффис-6' />
                    <MenuServer text='Утас: 7000-0892, 9935-4797' />
                    <MenuServer text='И-Мэйл: contact@esan.mn' />
                </ul>
            </div>
        </div>
    );
}
export default BottomBar;