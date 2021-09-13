import React, { useState } from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from './Card'
import './Expenses'
import './ExpenseDate'
import './ExpenseItem'
const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title)
    const onClickHandler=()=>{
        setTitle('Raj Pawar');
        console.log('updated')
        }
    return (

        <Card className="expense-item">

            <ExpenseDate date={props.date} />

            <div className="expense-item__description">
                <h2 >{props.title}</h2>
                <div className="expense-item__price">$ {props.amount}</div>
            </div>
            <button onClick={onClickHandler}>Change Title</button>
            
        </Card >
    )
}

export default ExpenseItem
