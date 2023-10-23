import './CostItem.css'

function CostItem(){

    const date = new Date();
    // const year = date.getFullYear();
    // const month = date.getMonth();
    // const day = date.getDay();

    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        weekday: 'short',
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
      };

    return(
        <div className='cost-item'>
            <div>
                {date.toLocaleString("ru", options)}
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