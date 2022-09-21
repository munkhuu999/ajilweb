import React, {useEffect, useState} from 'react';
import BoxOfBook from '../generals/BoxOfBook';
import { connect } from 'react-redux';
import * as actions from '../../redux/action/speacialAction'


const SpecialCreation = (props) => { 

    useEffect(() => {
         props.DownloadAllSpBook();              
      }, []);        
    

    return (
      <div>
      <h1 className=' font-bold text-xl text-start mb-2 ml-5'>{props.text}</h1>
      <div className=' flex flex-row justify-center items-center'>
          <div className=" flex flex-no-wrap items-start mb-8 overflow-x-auto md:grid md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8">
              {props.data.map((e, index) =>
                  <BoxOfBook key={index} name={e.BookName} pic={e.BookPic} id={e.id} type='spec' />
              )}
          </div>
      </div>
  </div>

    );
}

const mapStateToProps = state => {
    return {
      data: state.spbookReducer.mydata,
         };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        DownloadAllSpBook: () => dispatch(actions.DownloadAllSpBook())
    };
  };
  
//  export default SpecialCreation;
   export default connect(mapStateToProps, mapDispatchToProps)(SpecialCreation);