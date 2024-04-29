import React ,{useState} from 'react'

function Counter(){
   const [value,changeValue] =useState(0);

const increment = ()=>{
  changeValue(value+1);

}

const decrement = ()=>{
    changeValue(value-1);
  
  }
  
  

return(
        <div className='main'>
            <p className='para'>counter :{value}</p>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    )
}

export default Counter