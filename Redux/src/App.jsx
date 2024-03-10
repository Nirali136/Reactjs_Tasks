import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMovie } from './store/movies'
import { setType , getUsers , fetchUser } from './store/users'

function App() {
  const movies = useSelector((state) => state.movies.list)
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchUser()).unwrap().then((res)=>{
      console.log('user data', res);
    })
    .catch(err=>{
      console.log(err);
    })
  },[])
  return (
    <>
      <h2>Movies:</h2>
      <ul>
        {
          movies? 
          movies.map(movie=>(
            <li key={movie.id}>{movie.title}</li>
          ))
          :null}
      </ul>
      <hr/>
      <button onClick={()=> dispatch(addMovie({id:3,title:'Batman'}))}>Add movies</button>
      <hr/>
      {/* <h3>User type:{users.type}</h3>
      <button onClick={()=> dispatch(setType('Admin'))}>
        Set type
      </button> */}
      <div>
        {users.loading ? 'loading':null}
      </div>
      <ul>
        { users ? 
            users.users.map(user=>(
              <li key={user.id}>{user.name}</li>
            ))
        :null}
      </ul>
      <button onClick={()=> dispatch(fetchUser({id:'1'}))}>
        Get users
      </button>
    </>
  )
}

export default App
