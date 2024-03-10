import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

function PostItem() {
    let params= useParams();
    let location=useLocation();
    console.log(location)
  return (
    <>
      <div>Post id= {params.id}</div>
      <div>Post name= {params.name}</div>
    </>
  )
}

export default PostItem
