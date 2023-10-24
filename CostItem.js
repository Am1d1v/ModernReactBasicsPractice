import './CostItem.css'
import CostDate from './CostDate';

function CostItem(props){

    //const date = new Date();
    // const year = date.getFullYear();
    // const month = date.getMonth();
    // const day = date.getDay();

    const {date, description, amount} = props;

   /*  const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        weekday: 'short',
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
      }; */

    // const costDescription = 'Order List Item';
    // const costAmount = 1000;
    //{date.toLocaleString("eng", options)}

    return(
        <div className='cost-item'>
            <CostDate date={date}/>
            <div className='cost-item__description'>
                <h2>{description}</h2>
                <div className='cost-item__price'> 
                {`${amount}$`}
            </div>
            </div>
        </div>
    )
}
export default CostItem;