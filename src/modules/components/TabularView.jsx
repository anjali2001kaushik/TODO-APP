import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const TabularView = () => {
   
    
      
  return (
    <div>
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Description&nbsp;</TableCell>
            <TableCell align="right">Priority&nbsp;</TableCell>
            <TableCell align="right">Date of completion</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow>
              <TableCell component="th" scope="row">
                
              </TableCell>
              <TableCell align="right">{}</TableCell>
              <TableCell align="right">{}</TableCell>
              <TableCell align="right">{}</TableCell>
              <TableCell align="right">{}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default TabularView
