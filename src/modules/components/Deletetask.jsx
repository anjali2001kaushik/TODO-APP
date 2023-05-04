import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { pink } from '@mui/material/colors';
// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deletetask } from '../redux/task-slice';

const Deletetask = ({id}) => {
  const dispatch=useDispatch();
  const handleDelete=()=>{
    // console.log('DEEEEE');
    // console.log('IDDD',id);
    dispatch(deletetask(id));
  }
  return (
    <div>
      <DeleteIcon sx={{ color: pink[500] }}/> <Button onClick={handleDelete} color="warning" variant="contained">Delete</Button>
    </div>
  )
}

export default Deletetask
