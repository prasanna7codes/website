function List(){
   

const fruits= ["apple","mango"];
const listItems = fruits.map(fruit=><li>{fruit}</li>);


return(<ul>{listItems}</ul>); 

}

export default List  