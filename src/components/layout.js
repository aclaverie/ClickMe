import React from 'react';
import {useState, useEffect} from 'react';
import LinearProgress from '@mui/material/LinearProgress';

// function StartClock(){
//     let timeleft = 10;
//     let downloadTimer = setInterval(function(){
//     if(timeleft <= 0){
//         clearInterval(downloadTimer);
//     }
//     document.getElementById("progressBar").value = 10 - timeleft;
//     timeleft -= 1;
//     }, 1000);
// }

function Layout(){
    const [result, setResult] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
          setProgress((oldProgress) => {
            if (oldProgress === 100) {
              return 0;
            }
            const diff = Math.random() * 10;
            return Math.min(oldProgress + diff, 100);
          });
        }, 500);
    
        return () => {
          clearInterval(timer);
        };
      }, [progress]);

    //Best practise way for using the 'set' function for state is by using 
    //a Callback function as shown below
    function MinusOne(){
        setResult(function(oldValue){
            return oldValue-1;
        });        
    }

    //This is not React Best practices to use the state variable for state value in this 
    //manner shown below line 22 to 24. We need to use a callback function like above that
    //will allow us to have access to the 'oldValue' as a reference to what state was.
    //It is passed in by React auto-magically.
    //Simply if we need to use our oldValue of state to know or get our new state we should
    //always pass a callback function to the 'set' function. We can further simplfy the above
    //by using the arrow function:
    //      setResult(prevResult => prevResult+1);
    function AddOne(){
        setResult(result +1);
    }
    return(
        <>
        <LinearProgress 
          style={{zIndex: '10'}}
          variant="determinate" 
          value={progress} />
        <div className="game-box">
           
          <div className="counter-minus" onClick={MinusOne} >-</div>
          <div className="counter">
            {result}
          </div>
          <div className="counter-add" onClick={AddOne}>+</div>
        </div>
        </>
    );
}

export default Layout;