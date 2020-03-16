import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const players = ['Sakib' , 'Tamim' , 'Mushfiq' , 'Riyad' , 'Liton'];
  const products = [
    {name: 'Photoshop', price: '$99.99'},
    {name: 'Illustrator', price: '$66.99'},
    {name: 'Adobe Reader', price: '$6.99'}
  ];

  const playerNames = players.map(player => player);
  console.log(playerNames);
  return (
    <div className="App">
      <header className="App-header">
        <p>Learning React</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
          players.map(player => <li>{player}</li>)
          }
        </ul>
        {
          products.map(pd => <Product product ={pd} ></Product>)
        }
      </header>
    </div>
  );
}

function Counter(){
  const [count , setCount] = useState(10);
  // const handleIncrease = () => setCount (count + 1);
 
  return(
    <div>
      <h1> Count: {count} </h1>
      <button onMouseEnter={ () => setCount (count + 1) }>Increase</button>
      <button onClick={ () => setCount (count - 1) }>Decrease</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [])

  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ol>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ol>
    </div>
  )
}

function Product(props){
  const productStyle={
    border: '1px solid gray',
    borderRadious: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }

  const {name , price} = props.product;
  console.log(name,price);
    return (
      <div style={productStyle}>
          <h3>{name} </h3>
          <h5>{price}</h5>
          <button>Buy Now</button>
      </div>
    )

}

// function Person(props){
//   return (
//     <div style={{border:'2px solid yellow', width:'400px', margin: '2px'}}>
//       <h3>My Name: {props.name} </h3>
//       <p>My Profession: {props.job}</p>
//     </div>
//   )
// }


export default App;

