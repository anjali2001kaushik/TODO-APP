import React from 'react'
import { db } from '../../shared/settings/firebase-config';
import { addDoc, getDocs } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { collection } from 'firebase/firestore';
import SaveIcon from '@mui/icons-material/Save';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/task-slice';
import Viewtask from './Viewtask';
const SaveTask = () => {
    const {tasks,total}=useSelector(state=>state.taskSlice);
    const dispatch=useDispatch();

    const saveToDB=async ()=>{
        for(let task of tasks){
            const obj={};
            for(let key in task){
                obj[key]=task[key];
            }
            const docRef=await addDoc(collection(db,'tasks'),obj);
            // const dbRef=await addtask(task);
            console.log('Saved to DB ', docRef);
        }
       
    }
//   const addtask=async (tasks)=>{
//         const docRef=await addDoc(collection(db,'task'),tasks);
//     }
    const save=()=>{
        if(window.localStorage){
            localStorage.tasks=JSON.stringify(tasks);
        }
        else{
            alert("Outdated Browser no support of storage...");
        }
    }
    const load=()=>{
        if(window.localStorage){
            if(localStorage.tasks){
                const tasks=JSON.parse(localStorage.tasks);
                for(let task of tasks){
                    dispatch(addTask(task))
                }
                <Viewtask/>
            }
            else{
                alert("NO data to Load...");
            }
        }
        else{
            alert("Outdated Browser no support of storage...");
        }
    }
    const loadFromDB=async()=>{
        const querySnapShot=await getDocs(collection(db,'tasks'));
        querySnapShot.forEach((doc)=>{
            const obj=doc.data();
            dispatch(addTask(obj));
            
        });
    }
    
  return (
    <div>
      <SaveIcon color="success" /><Button color="success" onClick={saveToDB} variant="contained">SaveToDB</Button>
      <span><SaveIcon color="success" /><Button color="success" onClick={save} variant="contained">Save</Button></span>  
      <span><CloudDownloadIcon color="warning"/><Button color="warning" onClick={load}>Load</Button> </span>&nbsp;
      &nbsp;
      
      <span><CloudDownloadIcon color="warning"/><Button color="warning" onClick={loadFromDB}>LoadFromDB</Button></span>
    </div>
  )
}

export default SaveTask
