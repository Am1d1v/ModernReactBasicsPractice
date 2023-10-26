import CostForm from "./CostForm";
import './NewCost.css'

const NewCost = () => {

    const SaveConstDateHandler = (inputCostData) => {
        
        const costData = {
            ...inputCostData,
            id: Math.random().toString()
        }
        console.log(costData)
    }

    return(
        <div className="new-cost">
            <CostForm onSaveCostData={SaveConstDateHandler} />
        </div>
    )
}
export default NewCost;