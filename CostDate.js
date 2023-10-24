import './CostDate.css'

function CostDate(props){

    const {date} = props;

    return(

        <div className='cost-date'>
            <div className='cost-date__month'>{date.toLocaleString("eng", {month: 'long'})}</div>
            <div className='cost-date__year'>{date.toLocaleString("eng", {year: 'numeric'})}</div>
            <div className='cost-date__day'>{date.toLocaleString("eng", {day: 'numeric'})}</div>
        </div>
    )

}
export default CostDate;