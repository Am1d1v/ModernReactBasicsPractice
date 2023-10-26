
import Costs from './components/Costs';
import './App.css';
import NewCost from './components/NewCost/NewCost';

function App() {

 const costs = [
    {
      date: new Date(),
      costDescription: 'Order List Item 1',
      costAmount: 1000
    },

    {
      date: new Date(),
      costDescription: 'Order List Item 2',
      costAmount: 1250
    },

    {
      date: new Date(),
      costDescription: 'Order List Item 3',
      costAmount: 1500
    },
  ]

 

  return (
    <div className="App">
      <NewCost />
      <Costs costs={costs}/>
    </div>
    
  );
}

export default App;
