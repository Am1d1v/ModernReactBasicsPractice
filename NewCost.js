import { useState } from "react";
import CostForm from "./CostForm";
import './NewCost.css'

const NewCost = (props) => {

    // Props destructuring
    const {onAddNewCost} = props

    // useState for Input New Cost, so we can toggle Form visibility
    const [isFormVisible, setIsFormVisible] = useState(false);

    // Change Visibility of Input New Costs Form, default value is false;
    const changeFormVisibility = () => {
        setIsFormVisible(true);
    }

    const cancelCost = () => {
        setIsFormVisible(false);
    }
    
    const SaveConstDateHandler = (inputCostData) => {
        const costData = {
            ...inputCostData,
            //id: Math.random().toString()
        }
        //console.log(costData)

        // Push costData values to parent component

        onAddNewCost(costData);
        setIsFormVisible(false);
    }

    return(
        <div className="new-cost">
            {isFormVisible ? <CostForm onSaveCostData={SaveConstDateHandler} onCancel={cancelCost}/> : 
            <button onClick={changeFormVisibility}>Добавить Новый Расход</button>}
        </div>
    )
}
export default NewCost;