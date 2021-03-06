import { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props){
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    function titleChangeHandler(event){
        setEnteredTitle(event.target.value);
    };

    function amountChangeHandler(event){
        setEnteredAmount(event.target.value);
    };

    function dateChangeHander(event){
        setEnteredDate(event.target.value);
    };

    function submitHandler(event){
        event.preventDefault();

        const expense = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSubmitNewExpense(expense);
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input 
                        type='text' 
                        value={enteredTitle} 
                        onChange={titleChangeHandler} 
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type='number' 
                        value={enteredAmount} 
                        min="0.01" 
                        step="0.01" 
                        onChange={amountChangeHandler} 
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input 
                        type='date' 
                        value={enteredDate} 
                        min="2021-01-01" 
                        onChange={dateChangeHander}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;