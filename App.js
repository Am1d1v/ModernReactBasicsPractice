import CostItem from './components/CostItem';
import './App.css';

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
      <CostItem date={costs[0].date} description={costs[0].costDescription} amount={costs[0].costAmount} />
      <CostItem date={costs[1].date} description={costs[1].costDescription} amount={costs[1].costAmount} />
      <CostItem date={costs[2].date} description={costs[2].costDescription} amount={costs[2].costAmount} />
    </div>
  );
}

export default App;
