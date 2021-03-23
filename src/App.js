import React, { Component } from 'react';
import  {SearchBox}  from "./components/search-box/SearchBox.jsx";
import  {CardList}  from "./components/card-list/CardList.jsx";

import './App.css';

class App extends Component{

  constructor(){
    super();

    this.state = {
      monsters:[],
      searchField: ''

     /**  monsters:[
        {
          name: "Frankestein",
          id: 'asc1'
        },
        {
          name: "Dracula",
          id: 'asc2'
          
        },
        {
          name: "Zombie",
          id: 'asc3'
          
        },
        {
          name: "Ra-One",
          id: 'asc4'
        },
        {
          name: "shark",
          id: 'ascp'
        } 
      ]*/
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => 
    // console.log(response)
    response.json())
    .then(users =>
    this.setState({monsters: users })
    //  console.log(users)
     )
     
  }


  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
  return (
    <div className="App">
      {/* {
        this.state.monsters.map(monstaer=> <h1 key={monstaer.id} >{monstaer.name }</h1>)
      } */}
      <h1 className="header-page">Monster rolodex</h1>
      {/* <input 
   className="search-box"
   type='search'
   placeholder='search monsters'

   onChange = {e=>this.setState({searchField: e.target.value})}

   // onChange = {e=> console.log(e.target.value)}
  //  onChange ={props.onSearchChange}
   /> */}



      <SearchBox 
      placeholder='search monsters'
      hendleChange = {e=>this.setState({searchField: e.target.value})}
      
      
      />
      <CardList monsters ={filteredMonsters} />
      {/* <CardList monsters= {this.state.monsters} > 
      {/* {
        this.state.monsters.map(monstaer=> <h1 key={monstaer.id} >{monstaer.name }</h1>)
      } */}
       {/* </CardList>  */}
      
    </div>
  )
  };
  
}

export default App;
