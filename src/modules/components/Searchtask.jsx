import React, { useState } from 'react'
import Button from '@mui/material/Button';
import ContentPasteSearch from '@mui/icons-material/ContentPasteSearch';
import { searchTask } from '../redux/task-slice';
import { useDispatch, useSelector } from 'react-redux';
const Searchtask = () => {
  const[name,setname]=useState(' ');
  const {tasks,total}=useSelector(state=>state.taskSlice);
  const dispatch=useDispatch();
  const search=(name,tasks)=>{
    console.log('TTT',tasks,'AAAANAME',name);
    const searchedtask=tasks.filter((task)=>task.name===name);
    // console.log('!!!SearchedTask',searchedtask);
    dispatch(searchTask(searchedtask))

  }
  const handleChange=(event)=>{
    setname(event.target.value);
    
    console.log('value is:', event.target.value);
  }
  return (
    <span>
    <div className="input-group rounded">
    <input type="search" className="form-control rounded" placeholder="Search" onChange={handleChange} value={name} />
    <span className="input-group-text border-0" >
      <i className="fas fa-search"></i>
    </span><ContentPasteSearch color="warning" /> <Button onClick={()=>{search(name,tasks)}} color="warning" variant="contained">Search</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     </div>
     </span>

    // <div>
    // <ContentPasteSearch color="warning" /> <Button onClick={()=>{search(id)}} color="warning" variant="contained">Search</Button>
    // </div>
  )
}

export default Searchtask
