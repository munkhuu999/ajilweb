import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';

import { Routes, Route, Link, } from 'react-router-dom';

// import Menus from '../../Component/menus'
// import Search from '../../Component/search';
 import User from '../User';
import HeaderBar from '../../Component/SmallHeaderBar';
import MdHeaderBar from '../../Component/MdHeaderBar';
import SearchMenu from '../../Component/SearchAndMenu';
import TypeOfBook from '../../Component/TypeOfBook';
import BookContentList from '../../Component/BookContentList';
import MenuOfBook from '../../Component/MenuOfBook';
import BottomContent from '../../Component/BottomContent';
import BottomBar from '../../Component/BottomBar';
import BookDelgerengui from '../NomDelgerengui';
//import axios  from '../../axios';
// import axios from 'axios';

import Spinner from '../../Component/generals/spinner';

import * as actions from '../../redux/action/speacialAction';


const App = (props) => {

  const [content, setContent] = useState();


  useEffect(() => {

  }, []);

  return (
    <div>
      <br />
      <div className=' hidden md:block '>
        <MdHeaderBar />
      </div>
      <div className=" bg-gray-200 flex flex-col lg:px-10 xl:px-40">
        <div className='sticky top-0 z-50 md:hidden'>
          <HeaderBar />
        </div>
        <div className=' mt-5 hidden md:block'>
          <SearchMenu />
        </div>
        <div className=' hidden md:block mr-5'> <MenuOfBook /></div>


        <Routes>

          <Route path='onebook' element={<BookDelgerengui />
          } />

          <Route path='user' element={<div className=' flex flex-col items-center mt-8'>
            <User />
          </div>} />

          <Route path='/' element={
            <>
              <div className=' flex flex-row justify-center items-center bg-slate-400 h-64 m-5'>
                Content
              </div>
              <div className=' flex flex-col justify-center items-center'>
                <TypeOfBook />
              </div>
              <div>
                <BookContentList />
              </div>
            </>} />


        </Routes>





        <div className=' hidden md:block'>
          {/* <BottomContent text={content[1].contentName} pic={content[1].ContentPic} />   */}
        </div>
        {/* <div className=' flex flex-col items-center mt-8'>
        <User />
      </div> */}
        <br />
        <BottomBar />
        <footer className=' bg-red-400'>
          fooooterrr
        </footer>

      </div>

    </div>
  );
}

// const mapStateToProps = state => {
//   return {
//     bbb: state.spbookReducer.mydata
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     DownloadSpBook: (www) => dispatch(actions.DownloadAllSpBook(www))
//   };
// };

export default App;
//export default connect(mapStateToProps, mapDispatchToProps)(App);


