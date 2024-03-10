import { useCallback, useState } from "react";
import Title from "./components/Title";
import Count from "./components/Count";
import CountBtn from './components/CountBtn';
import Age from "./components/Age";
import AgeBtn from "./components/AgeBtn";

const App = () => {
    let [count,setCount] = useState(0);
    let [age,setAge] = useState(10);

    const handleCount = useCallback(() => {
        setCount(count+1)
    },[count])

    const handleAge = useCallback( () => {
        setAge(age+1)
    },[age])

    return(
        <>
            <Title/>
            <Count count={count}/>
            <CountBtn handleCount={handleCount}/>
            <Age age={age}/>
            <AgeBtn handleAge={handleAge}/>
        </>
    )

}

export default App;