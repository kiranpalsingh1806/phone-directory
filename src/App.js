import React, {Component} from 'react';
import Header from "./Header";

class App extends Component{
  render(){
    return(
      <div>
         <Header/>
         <button> Add </button>
         <div>
         <span> Name</span><br/>
         <span> Phone </span>
       </div>
      <label htmlFor="name">Name: </label>
      <input id="name" type="text" placeholder="Type Here" defaultValue="Shilpa"/>
      </div>
      );
  }
}

export default App;
