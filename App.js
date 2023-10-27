
import Costs from './components/Costs';
import './App.css';
import NewCost from './components/NewCost/NewCost';
import { useState } from 'react';

const initialCosts = [
  {
    date: new Date(2023, 1, 1),
    costDescription: 'Order List Item 1',
    costAmount: 1000,
  },

  {
    date: new Date(2022, 2, 2),
    costDescription: 'Order List Item 2',
    costAmount: 1250,
  },

  {
    date: new Date(2021, 3, 3),
    costDescription: 'Order List Item 3',
    costAmount: 1500,
  },
  ]

function App() {


  const [costs, setCosts]  = useState(initialCosts);


  const addNewCostHandler = (cost) =>{

    console.log(cost, 'App');
    setCosts(previousCosts => {
      return [cost, ...previousCosts]
    });
    
  }

  return (
    <div className="App">
      <NewCost  onAddNewCost={addNewCostHandler}/>
      <Costs costs={costs}/>
    </div>
    
  );
}

export default App;
