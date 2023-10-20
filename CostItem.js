import './CostItem.css'

function CostItem(){

    return(
        <div className='cost-item'>
            <div>
                Date
            </div>
            <div className='cost-item__description'>
                <h2>Title</h2>
                <div className='cost-item__price'> 
                1000$
            </div>
            </div>
        </div>
    )
}
export default CostItem;