//triggers a function everytime the value of imput changes,mostly used in forms


import React ,{useState} from 'react'


function Component(){
  
const [name,setname]=useState();

function handlename(event){
    setname(event.target.value);
}

return(
    <div>
        <input type="text" value={name} placeholder='enter your name ' onChange={handlename}/>


        <p>name:{name}</p>
    </div>
)

}

export default Component