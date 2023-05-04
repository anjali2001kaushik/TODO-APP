import { createSlice } from "@reduxjs/toolkit";
import {current } from '@reduxjs/toolkit'

const taskSlice=createSlice({
    name:'task-slice',
    initialState:{tasks:[],searchedtask:[],total:0,searchedtotal:0},
    reducers:{
            addTask(state,action){
                state.searchedtask.pop(state.searchedtask.peek);
                const task=action.payload;
                console.log('TASKKKKK',task);
                state.tasks.push(task);
                console.log('SSSS',state.tasks);
                state.total=state.tasks.length;
                console.log("LENGTH IS ",state.tasks.length);
                console.log("SEARCHEDTOTAL",state.searchedtotal)
            },
            deletetask(state,action){
                // console.log('STATE IS',state.tasks);
                // const t=[...state.tasks];
                // console.log('T is',t);
                // console.log('CURRET STATE',current(state));
                // const {id}=action.payload;
                // const {data}=state.tasks;
                // const index= data.findIndex((task) => id === task.id);
                // data.splice(index,1);
               const tasks= state.tasks.filter((task) => task.id !== action.payload);
               state.tasks=tasks;

            
            },
            editTask(state,action){

            },
            searchTask(state,action){
                const task=action.payload;
                console.log('searchd task',task);
                if(state.searchedtask.length!=0){
                    console.log("Before pop",state.searchedtask.length);
                    state.searchedtask.pop(state.searchedtask.peek);
                   console.log("After pop",state.searchedtask.length);
                   state.searchedtask.push(task);
                   state.searchedtotal=state.searchedtask.length;
                  
                }else{
                    state.searchedtask.push(task);
                    state.searchedtotal=state.searchedtask.length;
                    
                }
                console.log("SEARCHEDTOTAL",state.searchedtotal)
                // state.total=state.searchedtask.length;

            }
    }
});
export default taskSlice.reducer;
export const {addTask,deletetask,editTask,searchTask}=taskSlice.actions;