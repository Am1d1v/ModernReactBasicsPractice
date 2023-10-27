import CostForm from "./CostForm";
import './NewCost.css'

const NewCost = (props) => {

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
            <CostForm onSaveCostData={SaveConstDateHandler} />
        </div>
    )
}
export default NewCost;