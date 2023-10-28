import { useState } from "react";
import CostForm from "./CostForm";
import './NewCost.css'

const NewCost = (props) => {

    const [isFormVisible, setIsFormVisible] = useState(false);

    const changeFormVisibility = () => {
        setIsFormVisible(true);
    }

    const {onAddNewCost} = props

    const SaveConstDateHandler = (inputCostData) => {
        const costData = {
            ...inputCostData,
            //id: Math.random().toString()
        }
        //console.log(costData)

        // Push costData values to parent component

        onAddNewCost(costData);
    }

    return(
        <div className="new-cost">
            {isFormVisible ? <CostForm onSaveCostData={SaveConstDateHandler} /> : 
            <button onClick={changeFormVisibility}>Добавить Новый Расход</button>}
        </div>
    )
}
export default NewCost;