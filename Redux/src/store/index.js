import {configureStore} from "@reduxjs/toolkit"
import   { movieSlice } from "./movies"
import   moviesReducer  from "./movies"
import usersReducer from  './users'


export  const store = configureStore({
    reducer:{
    //    movies : movieSlice.reducer
       movies : moviesReducer,
       users: usersReducer

    }
})