import React from "react";
import { useState } from "react";

function Task_1() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const result = numbers.map((number, index) => {
    return <p key={index}>{number} <button onClick={() => deleteItem(index)}>Delete</button>       <button onClick={() => addValue(index)}>Изменить значение</button> </p>;
  });

const deleteItem = (index) => {
    let copy = Object.assign([], numbers);
    copy.splice(index, 1)
    setNumbers(copy)
}
const reverseNumber = (index) => {
    let copy = Object.assign([], numbers);
    copy.reverse();
    setNumbers(copy);
}
  const addNumber = () => {
    let copy = Object.assign([], numbers);
    copy.push(6);
    setNumbers(copy);
  };
  const addValue = (index) => {
    let copy = Object.assign([], numbers);
    copy[index] = '!';
    setNumbers(copy);
  }
  return (
    <div>
      {result}
      <button onClick={addNumber}>Добавить значение</button>
      <button onClick={() => reverseNumber()}>Reverse</button>
    </div>
  );
  
}

export default Task_1;
