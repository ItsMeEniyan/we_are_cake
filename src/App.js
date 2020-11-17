//import './App.css';
import {Route , Switch} from 'react-router-dom';
import React, { useState } from 'react';

import Header from './Components/Header';
import Home from './Components/Home';
import First from './Components/First';
import Second from './Components/Second';
import Thank from './Components/Thank';


function App() {
  const [cake, setCake] = useState({ flavor: "", toppings: [] });

  const addFlavor = (flavor) => {
    setCake({ ...cake, flavor })
  }
  const addTopping = (topping) => {
    let newToppings;
    if(!cake.toppings.includes(topping)){
      newToppings = [...cake.toppings, topping];
    } else {
      newToppings = cake.toppings.filter(item => item !== topping);
    }
    setCake({ ...cake, toppings: newToppings });
  }


  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/first'>
          <First addFlavor={addFlavor} cake={cake}/>
        </Route>
        <Route path='/second'>
          <Second addTopping={addTopping} cake={cake}/>
        </Route>
        <Route path='/thank'>
          <Thank cake={cake}/>
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
