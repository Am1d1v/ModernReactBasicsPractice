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
                {costs.map((item, i) => {
                   return <CostItem date={costs[i].date} description={costs[i].costDescription} amount={costs[i].costAmount} key={i}/> 
                })} 
            </Card>
        </div>
    )
}
export default Costs;