import React,{useState} from 'react'
import './ExpenseForm.css'
const ExpenseForm = (props) => {
    const [enteredTitle, setTitle] = useState('')
    const [enteredAmount, setAmount] = useState('')
    const [enteredDate, setDate ]= useState('')
    const titleChangeHandler= (event)=>{
        setTitle(event.target.value)
        console.log(enteredTitle)
    }
    const amountChangeHandler= (event)=>{
        setAmount(event.target.value)
        console.log(enteredAmount)
        
    }
    const dateChangeHandler= (event)=>{
        setDate(event.target.value)
        console.log(enteredDate)

    }
  
    const submitFormHandler=(event)=>{
        event.preventDefault();

        const expensedata={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)        
        }
        props.onSaveExpenseForm(expensedata);
        
        setTitle('');
        setAmount('');
        setDate('');

    }
    return (
        <form onSubmit={submitFormHandler}>

            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label> Title</label>
                    <input type="text" 
                    value={enteredTitle}
                    onChange={titleChangeHandler} />
                </div>
            </div>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label> Amount</label>      
                     <input type="number" 
                     value={enteredAmount}
                     onChange={amountChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label> Date</label>
                    <input type="date" min='2019-01-01' max='2022-12-31 '
                    value={enteredDate}
                    onChange={dateChangeHandler}/>
                </div>
            </div>  
            <div className="new-expense__controls"></div>
            <button type="submit">Add Expense</button>


        </form>

    )
}

export default ExpenseForm
