import React from 'react';
import {useState} from 'react';

function Layout(){
    const [result, setResult] = useState(0);

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
        <div className="game-box">
          <div className="counter-minus" onClick={MinusOne} >-</div>
          <div className="counter">
            {result}
          </div>
          <div className="counter-add" onClick={AddOne}>+</div>
        </div>
    );
}

export default Layout;