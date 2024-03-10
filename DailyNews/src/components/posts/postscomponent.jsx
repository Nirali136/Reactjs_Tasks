import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { fetchPostById } from '../../Store/utils/thunks';
import Moment from 'react-moment';
import { clearPostById } from '../../Store/reducers/posts';

const Posts = () => {
    const posts = useSelector((state)=>state.posts);
    const dispatch = useDispatch();
    let params = useParams();

    useEffect(()=>{
        dispatch(fetchPostById(params.id))
    },[])

    useEffect(()=>{
        return()=>{
            dispatch(clearPostById())
        }
    },[])
  return (
   <>
    {posts.postById ? 
    <div className="article_container">
    <h1>{posts.postById.title}</h1>
    <div
        style={{
            background:`url(${posts.postById.imagexl})`
        }}
        className="image"
    ></div>
    <div className="author">
        Created by: <span>{posts.postById.author} - </span>
        <Moment format="DD MMMM YY">
            {posts.postById.createdAt}
        </Moment>
    </div>
    <div className="mt-3 content">
        <div
            dangerouslySetInnerHTML={{
                __html:posts.postById.content
            }}
        ></div>
    </div>
    </div>
    :null}

   </>
  )
  }

export default Posts
