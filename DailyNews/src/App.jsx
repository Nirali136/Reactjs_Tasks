import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './components/header'
import Contact from './components/contact/contact'
import Home from './components/home/home'
import Mainlayout from './layouts/mainlayout'
import Posts from './components/posts/postscomponent'
const App=()=>{
    return(
        <BrowserRouter>
            <Header/>
            <Mainlayout>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path='contact' element={<Contact/>}/>
                <Route path='article/:id' element={<Posts/>}/>
            </Routes>
            </Mainlayout>
        </BrowserRouter>
    )
}

export default App