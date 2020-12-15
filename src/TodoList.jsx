import React from "react";
import Button from '@material-ui/core/Button';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
const TodoList = (props) =>
{   
    const handleDelete = () =>
    {
       
    }

    return(
        <div>
        <li><Button onClick = {() =>{ props.onSelect(props.id)  }} style={{color:"brown"}}><DeleteForeverIcon/></Button>{props.val}</li>
        </div>
    )
}
export default TodoList;