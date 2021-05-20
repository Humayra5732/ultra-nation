import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Component/Country/Country';
import Cart from './Component/Cart/Cart';

function App() {
    const [countries,setCountries] = useState([]);
    const [cart,setCart] = useState([]);
    useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data =>{
      setCountries(data);
      console.log(data);
     const names = data.map(country => country.name)
     console.log(names);

    })
    .catch(error => console.log(error))
    },[])

  //Adding cart start here
    const handleAddCountry = (country)=>{
      const newCart = [...cart , country];
      setCart(newCart);}
      // adding  cart end here
      //  console.log('country added',country)}
  // console.log(setCountries , countries);
  // const [x,y] = ['abc','def']
  // const total = add(2,3); // ['abc','def']

  
  return (
    <div className="App">
      <h2>Country loaded : {countries.length}</h2>
      <h3>County added :{cart.length}</h3>
      <Cart cart = {cart}></Cart>
      <ul>
        {
          countries.map(country => <Country  country  = {country} handleAddCountry={handleAddCountry}  ></Country>)
        }
      </ul>
    
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
