import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {incrementByAmount, decrementByAmount} from '../../redux/reducers/TotalBalanceSlice'
import { useState, useEffect } from 'react';
import Historic from '../Historic/Historic';
import './TotalCard.css'

let id = 0

function TotalCard() {
  const dispatch = useDispatch()
  const balance = useSelector(({ totalBalance }) => totalBalance.value)
  const [inputFieldCurrentValue, setInputValueFieldCurrentValue] = useState(0);
  const [inputFieldCurrentText, setInputTextFieldCurrentValue] = useState(0);
  const [history, setHistory] = useState([]);
  let currentBalanceClass = '';

  const dispatchIncrementByAmount = ()=> {
    dispatch(incrementByAmount(+inputFieldCurrentValue))
    historyLog('+')
  }

  const dispatchDecrementByAmount = ()=> {
    dispatch(decrementByAmount(-inputFieldCurrentValue))
    historyLog('-')
  }

  const historyLog = operation => {
    id++

    if (operation === '+')
    setHistory([
      ...history, {
        id: id,
        text: inputFieldCurrentText,
        value: inputFieldCurrentValue
      }
    ])

    else
    setHistory([
      ...history, {
        id: id,
        text: inputFieldCurrentText,
        value: -inputFieldCurrentValue
      }
    ])
  }

  const handleValueChange = (event)=> {
    setInputValueFieldCurrentValue(event.target.value) 
  }

  const handleTextChange = (event)=> {
    setInputTextFieldCurrentValue(event.target.value) 
  }  

  return (
    <div>
        <div className='total-card-div'>
          <h2>Total Balance</h2>
          <p id='balance' className={balance >= 0 ? 'positive' : 'negative' }>{balance}</p>
        </div>
        <div className='input-card-div'>
          <input type="text" onChange={handleTextChange}/>
          <input type="number" min="0.00" max="10000.00" step="0.01" onChange={handleValueChange}/>
          <div className='buttons-div'>
            <button onClick={dispatchIncrementByAmount}>+</button>
            <button onClick={dispatchDecrementByAmount}>-</button>
          </div>
        </div>
        <Historic historyLog={history}></Historic>
    </div>
  );
}

export default TotalCard;
