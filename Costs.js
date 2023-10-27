import CostItem from "./CostItem";
import './Costs.css'
import Card from "./Card";
import CostsFilter from "./CostFilter/CostsFilter";
import { useState } from "react";

function Costs(props){

    const {costs} = props;
    const date = new Date();
    const month = date.getFullYear();


    const [selectedYear, setSelectedYear] = useState(month);
    
    const yearChangeHandler = (year) => {

        //console.log(year, 'Year Component')
        setSelectedYear(year)
    }

    
    // Return dynamic CostItem elements
    return(
        <div>
            <Card className="costs">
                <CostsFilter onChangeYear={yearChangeHandler} defaultYear={selectedYear}/>
                {costs.map((cost, index) => {
                   return <CostItem date={cost.date} description={cost.costDescription} amount={cost.costAmount} key={index}/> 
                })} 
            </Card>
        </div>
    )
}
export default Costs;