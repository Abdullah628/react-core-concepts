import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks = ['Manna','Jasim','Rajjak','Shakib','Shuvo'];

  const products = [
    {name: "Photoshop", price: "$38.334"},
    {name: 'Illustrator', price: "$23.3"},
    {name: "Pdf Reader", price: "$22.3"},
    {name: "Pdf ", price: "$22.3"}
  ]
  const productName = products.map(product=>product.name);
  const heroName = nayoks.map(nayok => nayok);
  
  return (
    <div className="App">
      <header className="App-header">

        <Counter></Counter>

        <Users></Users>

        <ul>
          { 
            nayoks.map(nayok => <li>{nayok}</li>)
          }
        </ul>
         
        {
          products.map(product => <Products product = {product}>
          </Products>)
      
        }
        
      </header>
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/posts/")
    .then(res => res.json())
    .then(data => setUsers(data));
  })

  return(
  <div>
    <ul>
      {
        users.map(user => <li>{user.id}</li>)
      }
    </ul>
  </div>
  )
}

function Person(props){
  const personStyle ={
    border: '2px solid yellow',
    margin: '10px',
    padding: '15px'
  }
  return (
    <div style={personStyle}>
      <h1>this is {props.name}</h1>
      <p>Hero of {props.nayika}</p>
    </div>
    
  )
}

function Products(props){
  const ProductStyle = {
    border:'2px solid gray',
    borderRadius: '5px',
    backgroundColor: "gray",
    height: '200px',
    width: '200px',
    float: 'left',
    margin: "20px"
  }
  return(
    <div style={ProductStyle}>
      <h3>{props.product.name}</h3>
      <h5>{props.product.price}</h5>
      <button>By Now</button>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(10);
  
  return(
    <div>
      <h2>Count:{count} </h2>
      <button onMouseMove={() => setCount(count-1)}>Decrease</button>
      <button onMouseMove={() => setCount(count+1)}>Increase</button>
    </div>
  )
}

export default App;
