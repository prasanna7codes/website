import React ,{useState} from 'react'


function MyComponent(){

const [name,setname]=useState();

return(
   <div>
    <p>Name:{name} </p>
    <button onClick={()=>{
        setname("prasanna");
    }}>clivk me !</button>
    
   </div>
);

}

export default MyComponent 