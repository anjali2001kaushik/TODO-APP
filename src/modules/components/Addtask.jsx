import  { useRef,useState,component } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import '@fontsource/roboto/500.css';
import Typography from '@mui/material/Typography';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import AddBoxIcon from '@mui/icons-material/AddBox';
import {useDispatch} from 'react-redux';
import { addTask } from '../redux/task-slice';
import {useForm} from 'react-hook-form';
import dayjs from 'dayjs';
import * as React from 'react';


const Addtask = () => {
  const [value,setValue] = useState(0);
  const today = dayjs();
  const [date,setdate] = useState(dayjs(today));
  
    // const [Task,setTask]=useState(" ");
    const id=useRef();
    const name=useRef();
    const description=useRef();
    const handleChange = (event, newValue) => {
      setValue(newValue);
      // console.log('VVVVV',newValue)
    };
    // console.log('V is',value);
    // console.log('Val is',val);
    // const task={'id':id.current.value,'name':name.current.value,'description':description.current.value}
    const dispatch=useDispatch();

    const addNewtask=()=>{
      const task={'id':id.current.value,'name':name.current.value,'description':description.current.value,'priority':value};
      console.log('%%%%%%%%%%Task',task);
      dispatch(addTask(task));
    }
    
  return (
    <div>
       <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 2, width: '500' },
        '& .MuiTextField-root': { m: 1, width: '150ch' },
        maxWidth: '100%'
      }}
      noValidate
      autoComplete="off"
    >
    <TextField fullWidth inputRef={id} label="id" variant="outlined"  id="fullWidth"/><br />
    <TextField fullWidth inputRef={name} label="Name" variant="outlined" id="fullWidth"/><br />
    <TextField fullWidth inputRef={description}
    id="outlined-multiline-static"
    label="Add to-do"
    multiline
    rows={4}
    columns={10     }
    defaultValue="Description"
    />
     <Typography variant="caption" display="block" gutterBottom>
        Priority
      </Typography>
        </Box>
        <Box 
        sx={{
            '& > :not(style)': { m: 2, width: '500' },
            display: 'flex',
            margin:'dense',
            flexDirection: 'column',
            '& .MuiTextField-root': { width: '150ch' },
          }}
        width={"150ch"}>
     &nbsp;&nbsp;&nbsp; <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" value={value} onChange={handleChange} margin="dense" />
    </Box>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker defaultValue={today} value={date}
          onChange={(newdate) => setdate(newdate)}  />
    </LocalizationProvider>
    <br />
       <AddBoxIcon color="primary"/> <Button onClick={addNewtask}  variant="contained">Add</Button>
    </div>
  )
}

export default Addtask