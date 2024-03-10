import { useState } from "react";
import { Transition } from "react-transition-group"

const TransitionComp = () => {
    let [show, setShow] =useState(true)

    const showDiv =()=>{
        setShow(!show)
    }
    return (
        <>
        <Transition
          in={show}
          timeout={{
            enter:2000,
            exit:500
          }}
        //   enter={false}
        //   exit={false}
          onEnter={(node)=>{
            console.log('ENTER')
          }}
          onExit={(node)=>{
            console.log('EXIT')
          }}
        >
          { state => 
            <div className={`square square-${state}`}>
              {`square square-${state}`}
            </div>
          }
        </Transition>
        {/* <Transition
        in={show}
        timeout={2000}
        >
            {state =>
                <div style={{
                    background:'red',
                    height:'50px',
                    transition:'all 2s ease',
                    opacity:state=== 'exited' || state=== 'exiting' ? 0 : 1
                }}>
                    {state}
                </div>            
            }
        </Transition> */}
        {/* {
            show ?
            <div style={{background:'red',
                        height:'50px'}}>
            Hello</div>
        :null} */}
            <hr/>
            <button onClick={showDiv} className="btn btn-primary">{show?'Hide':'Show'}</button>
        </>
    );
  };
  
  export default TransitionComp;
