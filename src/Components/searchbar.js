import React from 'react';

import { AiOutlineSearch } from 'react-icons/ai'
import { BiBarcodeReader } from 'react-icons/bi'
import { IoFilterSharp }   from 'react-icons/io5'



import './searchbar.scss'



function SearchBar( {setShow}) {
  return (
      

    <div className=" row searchBar">
      <span className="leftSide"onClick={() => setShow(true)}  >
          <IoFilterSharp className="filterIcon"/>
        </span>
    
      <div className="form-group has-search col-md-8 col-8 col-sm-8 col-lg-8">
        <span className="form-control-feedback1">
          <AiOutlineSearch className="searchIcon" />
          </span>
        <input type="text" className="form-control1 text-left" placeholder="Find a business by name"/>
      </div>
     <span className="rightSide ">
      <BiBarcodeReader className="barIcon"/>
     </span>
    </div>
  );
}

export default SearchBar