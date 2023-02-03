import React, {useState} from 'react';

import Card from '../ui/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);
    const [amount, setAmount] = useState(props.amount);
    
    const clickHandler = () =>{
        console.log('Clicked!!!!');
        console.log("before " +title);
        setTitle('Updated');
        setAmount('Updated');
        console.log("ater" + title);
    };
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{amount}</div>
                <button onClick={clickHandler}>Change Title</button>
            </div>
        </Card>
    );
}

export default ExpenseItem;