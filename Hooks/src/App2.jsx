import { useEffect, useState } from "react";
import Block from "./Block";


const App = () =>{
  let  [count, setCount] = useState(0)
  let [animal,setAnimal] = useState('Dog');
  let [block,setBlock] = useState(false)

  const addOne  = () => setCount(count+1);
  const restOne = () => setCount(count-1)
  const setCero = () => setCount(0)

  useEffect(()=>{
    return ()=>{
      console.log('Use effect count')
    }
  },[count])

  // useEffect(()=>{
  //   console.log('run once')
  // },[])


  // useEffect(()=>{
  //   console.log(count)
  // },[count,animal])


  // useEffect(()=>{
  //   console.log(animal)
  // },[animal])
  return(
    <>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={restOne}>-1</button>
    <button onClick={setCero}>Set to 0</button>
    <hr/>
    <h3>{animal}</h3>
    <button onClick={()=>setAnimal('Cat')}>Change animal</button>
    <hr/>
    { block ? 
      <Block/>
      :null
    }
    <button onClick={()=>setBlock(!block)}>Block</button>
    </>
  )
}

export default App;