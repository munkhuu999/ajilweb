import React, {useEffect} from 'react';
import BoxOfBook from '../generals/BoxOfBook';
import { connect } from 'react-redux';
import * as actions from '../../redux/action/bestwriterAction';


const BestWriter = (props) => { 

    useEffect(() => {
          props.DownloadBestWriter();              
      }, []);      

    return (

        <div>
            <h1 className=' font-bold text-xl text-start mb-2 ml-5'>{props.text}</h1>
            <div className=' flex flex-row justify-center items-center'>
                <div className=" flex flex-no-wrap items-start mb-8 overflow-x-auto md:grid md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8">
                    {props.data.map((e, index) =>
                        <BoxOfBook key={index} name={e.BookName} pic={e.BookPic} id={e.id} />
                    )}
                </div>
            </div>
        </div>

    );
}

const mapStateToProps = state => {
    return {
     data: state.bestwriterReducer.bestwriterdata,
         };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        DownloadBestWriter: () => dispatch(actions.DownloadBestWriter())
    };
  };
  
 // export default MostSell;
    export default connect(mapStateToProps, mapDispatchToProps)(BestWriter);