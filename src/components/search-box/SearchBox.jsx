import React from 'react';
import './SearchBox.css';

export const SearchBox = ({placeholder, hendleChange})=> (
   <input 
   className="search-box"
   type='search'
   placeholder={placeholder}

   // onChange = {e=>this.setState({searchField: e.target.value})}

   // onChange = {e=> console.log(e.target.value)}
   // onChange ={props.onSearchChange}
   onChange ={hendleChange}

   />
) ;


