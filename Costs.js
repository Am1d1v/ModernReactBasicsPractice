import CostItem from "./CostItem";
import './Costs.css'
import Card from "./Card";
import CostsFilter from "./CostFilter/CostsFilter";
import NoCostData from "./CostFilter/NoCostData/NoCostData";
import { useState } from "react";

function Costs(props){

    const {costs} = props;
    const date = new Date();
    const year = date.getFullYear();

    const [selectedYear, setSelectedYear] = useState(year);
    
    const yearChangeHandler = (year) => {

        //console.log(year, 'Year Component')
        setSelectedYear(year)
    }

    // Filter Costs by selected year
    const filteredCosts = costs.filter( cost => {
        return cost.date.getFullYear().toString() === selectedYear;
    })
    
    // Return dynamic CostItem elements
    return(
        <div>
            <Card className="costs">
                <CostsFilter onChangeYear={yearChangeHandler} defaultYear={year} selectedYear={selectedYear}/>
                {filteredCosts.length === 0 ? <NoCostData /> :
                    filteredCosts.map((cost, index) => {
                        return <CostItem date={cost.date} description={cost.costDescription} amount={cost.costAmount} key={index}/> 
                    })}
            </Card>
        </div>
    )
}
export default Costs;