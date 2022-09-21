import React from 'react';
import BoxOfBook from '../generals/BoxOfBook';

const list = [
    { name: '1', story: 'lorem10' },
    { name: '2', story: 'lorem10' },
    { name: '3', story: 'lorem10' },
    { name: '4', story: 'lorem10' },
    { name: '5', story: 'lorem10' },
    { name: '6', story: 'lorem10' },
    { name: '7', story: 'lorem10' },
];

const PartnerOrganizations = ({title}) => {
    return (
        <div>
            <h1 className=' font-bold text-xl text-start mb-1'>{title}
            </h1>
            <div className="flex flex-no-wrap items-start mb-2 overflow-x-auto">
                {list.map((e, index) => <BoxOfBook key={index} name={e.name} story={e.story} />)}
            </div>
        </div>
    );
}
export default PartnerOrganizations;