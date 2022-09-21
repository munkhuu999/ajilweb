import React, {useEffect} from 'react';
import BoxOfBook from '../generals/BoxOfBook';
import { connect } from 'react-redux';
import * as actions from '../../redux/action/mostSellAction';


const MostSell = (props) => { 

    useEffect(() => {
          props.MostSell();              
      }, []);      

    return (

        <div>
            <h1 className=' font-bold text-xl text-start mb-2 ml-5'>{props.text}</h1>
            <div className=' flex flex-row justify-center items-center'>
                <div className=" flex flex-no-wrap items-start mb-8 overflow-x-auto md:grid md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8">
                    {props.data.map((e, index) =>
                        <BoxOfBook key={index} name={e.bookName} pic={e.bookPic} id={e.id} />
                    )}
                </div>
            </div>
        </div>

    );
}

const mapStateToProps = state => {
    return {
     data: state.mostsellReducer.mostselldata
         };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
     MostSell: () => dispatch(actions.DownloadAllMostSell())
    };
  };
  
 // export default MostSell;
    export default connect(mapStateToProps, mapDispatchToProps)(MostSell);



