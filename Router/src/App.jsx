import {BrowserRouter,Route, Routes , Link, HashRouter, NavLink, Navigate} from  'react-router-dom';
import React from "react";
import Home from './components/home';
import Profile from './components/profile';
import Posts from './components/posts';
import PostItem from './components/Postitem';
import Users from './components/Users';
import Guests from './components/guests';
import Admins from './components/Admins';
const App =()=>{
  return(
    <BrowserRouter>
    {/* we can also use the hashrouter instedof Browserrouter it give the link 
      http://localhost:5173/posts#/profile
      if we use memoryrouter it not give the link name in url*/}
       <div className='container'>
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <Link to="/" className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none'>
            <span className='fs-4'>My app</span>
          </Link>

          <ul className='nav nav-pills'>
            <li className='nav-item'>
              <NavLink to="/" className='nav-link'>Home</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to="posts" className='nav-link'>Posts</NavLink>
              {/* <Link to="posts" className='nav-link'>Posts</Link> */}
            </li>
            <li className='nav-item'>
              <NavLink to="profile" className='nav-link'>Profile</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to="users" className='nav-link'>Users</NavLink>
            </li>
          </ul>
        </header>
      {/* <Link to={{
          pathname:"profile",
          search:"?profile=true",
          hash: "#the-hash"
        }}>Profile</Link><br/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="profile" element={<Profile/>}/>
        {/* <Route path="profile" element={
          <>
            <Navigate replace to="/"/>
          </>
        }/> */}
        <Route path="posts" element={<Posts/>}/>
        <Route path="posts/:id/:name" element={<PostItem/>}/>
        <Route path="users" element={<Users/>}>
        <Route path="guests" element={<Guests/>}/>
        <Route path="admins" element={<Admins/>}/>
        </Route>
        <Route path='*' element={
          <>
          <h1>Sorry nothing found</h1>
          </>
        }/>
      </Routes>
     
      </div>
    </BrowserRouter>
  )
}

export default App