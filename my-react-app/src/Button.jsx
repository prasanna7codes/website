function Button(){
   
     const work= (e)=>
        e.target.textContent="ouch";
    
    return (
        <button  onClick = {(e)=>work(e)}  className="button">Click Me</button>
    )

}

export default Button  