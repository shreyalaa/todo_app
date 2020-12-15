import React, { useState } from "react";
import './App.css';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

import TodoList from "./TodoList";
const  App=(props) =>{
   
 const [items , setItems] = useState();
 const [list , setList] = useState([]);
 
 const handleClick = () =>
 {
  setList((olditems) =>{
    return(
      [...olditems,  items]
    )

  })
  setItems("")
 };

 const deleteItem = (id) =>
 {
  setList((olditems) =>{
    return olditems.filter((arrelem , index) =>{
       return index !== id;
    })
  }) 

 }
 return (
    <div className="App">
      <div className = "todo">
        <h1 className = "heading"> ToDo list</h1>
        <input
         onChange = {(event) =>{setItems(event.target.value)}} 
         value = {items} className = "input" placeholder = "enter here.."/>
       
        <Button onClick = {handleClick} style= {{backgroundColor:"brown" , color:"white" , borderRadius:"30px 30px 30px" ,marginLeft:".5cm" ,boxShadow:"2px 2px 2px black"}} ><AddIcon/></Button>
        <ol>{
          list.map((val , index) =>{ return(<TodoList onSelect ={deleteItem} id ={index} key = {index} val = {val}/>)  })
          
        }
        </ol>
      </div>
  </div>
  );
}

export default App;
