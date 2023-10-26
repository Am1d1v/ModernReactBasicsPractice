import { useState } from 'react';
import './CostForm.css'

const CostForm = (props) => {

    const {onSaveCostData} = props;

    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    /*
    const [userInput, setUsetInput] =  useState({
        name: '',
        amount: '',
        date: ''
    });

    const nameInputChangeHandler = (event) => {
        setUsetInput({
            ...userInput,
            name: event.target.value,
        })
    }

    const amountInputChangeHandler = (event) => {
        setUsetInput({
            ...userInput,
            amount: event.target.value,
        })
    }

    const dateInputChangeHandler = (event) => {
        setUsetInput({
            ...userInput,
            date: event.target.value,
        })
    }
    */

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    }


    const submitHandler = (event) => {
        event.preventDefault();

        const costData = {
            name: name,
            amount: amount,
            date: new Date(date)
        }

        // Push costData values to parent component
        onSaveCostData(costData);

        //console.log(costData);
        setName('');
        setAmount('');
        setDate('');

    }

    return(
        <form onSubmit={submitHandler}>
            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label>Название</label>
                    <input type="text" value={name} onChange={nameChangeHandler} /> 
                </div>

                <div className="new-cost__control">
                    <label>Сумма</label>
                    <input type="number" min='0.01' step='0.01' value={amount} onChange={amountChangeHandler}/> 
                </div>

                <div className="new-cost__control">
                    <label>Дата</label>
                    <input type="date" min={'26-10-2023'} step='0.01' value={date} onChange={dateChangeHandler}/> 
                </div>

                <div className="new-cost__actions">
                    <button type="submit">Добавить Расход</button>
                </div>

            </div>
        </form>
    )
}
export default CostForm;