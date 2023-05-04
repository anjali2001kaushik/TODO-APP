import React from 'react'
import { useSelector } from 'react-redux'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// import { DataGrid } from '@mui/x-data-grid';
import Deletetask from './Deletetask';

const Viewtask = () => {
  const {tasks,total,searchedtask}=useSelector(state=>state.taskSlice);
  // const columns=[{field:'id',headerName:'id',width:70},
  //   {field:'name',headerName:'name',width:130},
  //   {field:'Description',headerName:'Description',width:160},
  //   {field:'Priority',headerName:'Priority',width:70},
  //   ];
  //   const rows=[
      
        
  //   ];
  console.log('Task, ', tasks,'And total is',total,'AND SEARCHED',searchedtask);
  //Async task
  // const dispatch=useDispatch();
  // useEffect(()=>{

  // })
  return (
    <div>
      {/* <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div> */}
    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell >id</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Description&nbsp;</TableCell>
            <TableCell align="right">Priority&nbsp;</TableCell>
            <TableCell align="right">Date of completion</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {(searchedtask.length!==0)?
          <TableRow>
          <TableCell  component="th" scope="row">{searchedtask.map((task,index)=><p key={index}>{task.id}</p>)}</TableCell>
          <TableCell align="right">{searchedtask[0].map((task,index)=><p key={index}>{task.name}</p>)}</TableCell>
          <TableCell align="right">{searchedtask[0].map((task,index)=><p key={index}>{task.description}</p>)}</TableCell>
          <TableCell align="right">{searchedtask[0].map((task,index)=><p key={index}>{task.priority}</p>)}</TableCell>
        </TableRow>:
              <TableRow >
              <TableCell  component="th" scope="row">{tasks.map((task,index)=><p key={index}>{task.id}</p>)}</TableCell>
              <TableCell align="right">{tasks.map((task,index)=><p key={index}>{task.name}</p>)}</TableCell>
              <TableCell align="right">{tasks.map((task,index)=><p key={index}>{task.description}</p>)}</TableCell>
              <TableCell align="right">{tasks.map((task,index)=><p key={index}>{task.priority}</p>)}</TableCell>
              <TableCell> {tasks.map((task,index)=>(<Deletetask id={task.id} />))}</TableCell>
              {/* <TableCell align="right">{tasks.map((task,index)=><p key={index}>{task.d}</p>)}</TableCell> */}
            </TableRow>}
            
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    // <div>
    //   {tasks.map((task,index)=><p key={index}>{task.id}  {task.name}  {task.description} </p>)}
    // </div>
  )
}

export default Viewtask
