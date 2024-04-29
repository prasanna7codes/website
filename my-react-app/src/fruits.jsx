import React ,{useState} from 'react'


function Fruit (){

const fruits=["apple","mango","banana"];
const listItems = fruits.map(fruit=><li>{fruit}</li>);
const [name,addname]=useState();


const ele = document.querySelector("element").value;

const add=()=>{
 addname(name.push())
}
 





return(
    <>
    <div>
        <ul>
            <li>{listItems}</li>
        </ul>
    </div>

    <input type="text" name="" id="" placeholder="enter a fruit"  className='element'/>
    
    <button onChange={add}>add element</button>
    </>
    
)




}

export default Fruit