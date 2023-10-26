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

    

    return(
        <div>
            <CostsFilter onChangeYear={yearChangeHandler} defaultYear={selectedYear}/>
            <Card className="costs">
                <CostItem date={costs[0].date} description={costs[0].costDescription} amount={costs[0].costAmount} />
                <CostItem date={costs[1].date} description={costs[1].costDescription} amount={costs[1].costAmount} />
                <CostItem date={costs[2].date} description={costs[2].costDescription} amount={costs[2].costAmount} /> 
            </Card>
        </div>
    )
}
export default Costs;