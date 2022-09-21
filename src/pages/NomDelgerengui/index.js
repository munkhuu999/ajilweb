import React from "react";
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import Star from "../../Component/star";
import ButeeliinTuhai from '../../Component/ButeeliinTuhai';

const NomDelgerengui = (props) => {

    const data = useLocation();


    console.log('-------->>', data);
    return (
        <div className=" flex flex-col w-auto px-5 py-5">
            <h1 className=" text-lg font-bold uppercase"> Цэс нэр линк</h1>
            <div className=" flex justify-center mt-5 px-11">
                <img className=" border-4 border-emerald-500 w-72" src="https://robohash.org/1?set=set1&amp;size=180x180" alt="" />
            </div>
            <div className=" flex justify-center mt-2">
                <Star />
            </div>
            <h1 className=" mt-8 text-center text-4xl font-semibold">book name</h1>
            <div className=" mt-10 flex justify-center"><Link to='/user' className=" bg-purple-400 text-center text-xl font-bold uppercase rounded-xl px-14 py-3 transform hover:scale-95 hover:bg-purple-600"> Нэвтрэх</Link></div>
            nomiiin delgerengui
            {data.name}
            <div>
               <ButeeliinTuhai color='pink' /> 
            </div>

         
        </div>
    );
}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {
        // DownloadSpBook: (www) => dispatch(actions.DownloadAllSpBook(www))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NomDelgerengui);