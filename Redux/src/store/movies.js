import { createSlice } from "@reduxjs/toolkit";

export const movieSlice= createSlice({
    name:'movies',
    initialState:{
        list:[
            {id:1,title:'abc'},
            {id:2,title:'xyz'}
        ],
        name:'asd',
        date:'adda'
    },
    reducers:{
        addMovie:(state,action)=>{
            //const newMovie = {id:3,title:'Batman'};
            state.list = [...state.list,action.payload]
        }
    }
})
export const {addMovie} = movieSlice.actions;
export default movieSlice.reducer