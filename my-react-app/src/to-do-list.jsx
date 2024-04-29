import React ,{useState} from 'react'



function TODO(){
    
const [tasks,setTask]=useState(["eat breakfast","walk the dog"]);
const [newTasks,setNewTask]=useState('');


function addTask(){

    if(newTasks.trim()!==""){
        setTask(t=>[...t,newTasks])
 setNewTask('')
    }
 
}

function handleinputchange(event){
    setNewTask(event.target.value)
}


function deletetask(index){

    const updated=tasks.filter((element,i)=>i!==index)
   setTask(updated)
}


function movetaskup(index){

    if(index>0){

        const updated1=[...tasks];
        [updated1[index],updated1[index-1]]=[updated1[index-1],updated1[index]];

        setTask(updated1);
    }
  
}

function movetaskdown(index){
    if(index<tasks.length-1){

        const updated=[...tasks];
        [updated[index],updated[index+1]]=[updated[index+1],updated[index]];

        setTask(updated);
    }
}

return(

    <div className="to-do-list">
        <h1>TO-DO-LIST</h1>

        <input type="text"placeholder='enter a task' value={newTasks} onChange={handleinputchange} />
        <button className='add-button' onClick={addTask}>add</button>



        <div>
            <ol>
                {tasks.map((task,index)=>
                <li key={index} >  <span className='text'> {task} </span> 

                <button className='delete-button' 
                onClick={()=>{deletetask(index)}}>
                    delete</button>


                    <button className='move-button' 
                onClick={()=>{movetaskup(index)}}>
                    move up</button>


                <button className='move-button' 
                onClick={()=>{movetaskdown(index)}}>
                    move down</button>        
                </li>)}
            </ol>
        </div>



    </div>
)


}

export default TODO 