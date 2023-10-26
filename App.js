
import Costs from './components/Costs';
import './App.css';
import NewCost from './components/NewCost/NewCost';

function App() {

 const costs = [
    {
      date: new Date(),
      costDescription: 'Order List Item 1',
      costAmount: 1000,
      id: 'c1'
    },

    {
      date: new Date(),
      costDescription: 'Order List Item 2',
      costAmount: 1250,
      id: 'c2'
    },

    {
      date: new Date(),
      costDescription: 'Order List Item 3',
      costAmount: 1500,
      id: 'c3'
    },
  ]

 
  const addNewCostHandler = (cost) =>{

    console.log(cost, 'App');

    
  }

  return (
    <div className="App">
      <NewCost  onAddNewCost={addNewCostHandler}/>
      <Costs costs={costs}/>
    </div>
    
  );
}

export default App;
