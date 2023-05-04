import React from 'react'
import Box from '@mui/material/Box'
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBriefcase, fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Icon } from '@mui/material'

import '@fontsource/roboto/500.css';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Addtask from '../modules/components/Addtask'
import Deletetask from '../modules/components/Deletetask'
import SaveTask from '../modules/components/SaveTask';
import Searchtask from '../modules/components/Searchtask';
import Viewtask from '../modules/components/Viewtask';
const Home = () => {
  library.add(faBriefcase,fas);
  // const [value, setValue] = useState(0);
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  // const id=useRef();
  //   const name=useRef();
  //   const description=useRef();
  //   const handleChange = (event, newValue) => {
  //     setValue(newValue);
  //   };
  const mystyle={
    color:'blue',
  };
  return (
    <div>
      <center><h1 style={mystyle}><FontAwesomeIcon icon="fa-solid fa-briefcase" />TODO-APP</h1></center>
      
      <br />
   <Addtask/> <br />
    <Box sx={{ width: '100%' }}>
      <Stack  direction="row" spacing={3}>
        {/* <Item><Addtask /></Item> */}
        {/* <Item><Deletetask/></Item> */}
        
        <Item><SaveTask/> </Item>
        <Item><Searchtask/></Item>
      </Stack>
    </Box>
    <hr />
    {/* <TabularView/> */}
    <Viewtask/>
    </div>
  )
}

export default Home
