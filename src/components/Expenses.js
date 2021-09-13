import React from 'react'
import ExpenseItem from './ExpenseItem'
import Card from './Card'
import './Expenses.css'
const Expenses = (props) => {
    console.log(props.items)

    return (<Card className="expenses">
            {props.items.map((expenses)=>{
                return <ExpenseItem
                 title={expenses.title}
                 amount={expenses.amount}
                 date={expenses.date}/>
                        
            })}
        </Card>
            )
  
  
  }

            export default Expenses
