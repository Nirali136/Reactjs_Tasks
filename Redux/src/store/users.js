import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUser = createAsyncThunk(
    'users/fetchUser',
    async(obj,thunkAPI)=>{
        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
            // ${obj.id}
            return res.data;
        } catch(err){
            throw err;
        }
    }
)

export const usersSlice = createSlice({
    name:'users',
    initialState:{
        type:'Guest',
        users:[],
        loading:false
    },
    reducers:{
        setType:(state,action)=>{
            state.type = action.payload || 'Guest'
        },
        testAsyncDispatch: (state)=>{
            state.test = true;
        }
        // getUsers:(state)=>{
        //     axios.get('https://jsonplaceholder.typicode.com/users')
        //     .then(res=>{
        //         console.log(res);
        //         state.users= res.data;
        //     })
        //     .catch((error)=>{
        //         console.log(error);
        //     })
        // }
    },
    extraReducers:(builder)=> {
        builder.addCase(fetchUser.pending,(state)=>{
            state.loading=true;
        })
        .addCase(fetchUser.fulfilled,(state,action)=>{
            state.loading=false;
            state.users = action.payload;
        })
        .addCase(fetchUser.rejected,(state,action)=>{
            // console.log(action.payload);
            state.loading=false;
            console.log('rejected');
        })
    }
});

export const { setType,  getUsers, testAsyncDispatch} = usersSlice.actions;
export default usersSlice.reducer;