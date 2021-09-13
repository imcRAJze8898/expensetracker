import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'
const Newexpense = (props) => {
    
    const saveExpenseFormHandler=(datafromexpenseform)=>{
        const expenseData={
            ...datafromexpenseform,
            id:Math.random().toString()
            
            
        }
        props.onAddexpense(expenseData)
    }   
    return (
        <div className="new-expense">
         <ExpenseForm onSaveExpenseForm={saveExpenseFormHandler}/>   
        </div>
     
    )
}

export default Newexpense
