import React from "react";
import StarIcon from '../../asset/logo/star.png'
import Star from '../generals/Star';

const StarPic = () => {

    return (
        <div className=" flex flex-row">
                 <Star icon={StarIcon}/> 
                 <Star icon={StarIcon}/> 
                 <Star icon={StarIcon}/> 
                 <Star icon={StarIcon}/> 
                 <Star icon={StarIcon}/>            
        </div>
    );
}

export default StarPic;