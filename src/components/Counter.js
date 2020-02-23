import React from 'react';

const Counter = ({ 
  count, 
  onDecrement, 
  onIncrement, 
  inputNumber, 
  onCount, 
  addNumber,
  clickCount }) => {

    return (
      <div>
        <div>
          <button onClick={onDecrement}>-</button>
          <span>{count}</span>
          <button onClick={onIncrement}>+</button>
          <br />
          <h4>Times the increment/decrement buttons have been clicked: <span>{clickCount}</span></h4> 
          <input type="number" onChange={
            event => inputNumber(
            event.target.value)} 
          value={addNumber}></input>
          <button onClick={onCount}>Change Count Number</button>
        </div>
      </div>
    );
}

export default Counter;