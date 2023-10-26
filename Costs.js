import CostItem from "./CostItem";
import './Costs.css'
import Card from "./Card";

function Costs(props){

    const {costs} = props;
    
    return(
        <Card className="costs">
            <CostItem date={costs[0].date} description={costs[0].costDescription} amount={costs[0].costAmount} />
            <CostItem date={costs[1].date} description={costs[1].costDescription} amount={costs[1].costAmount} />
            <CostItem date={costs[2].date} description={costs[2].costDescription} amount={costs[2].costAmount} /> 
        </Card>
    )
}
export default Costs;