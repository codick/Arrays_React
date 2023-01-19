import React from 'react'
import { useState } from 'react';

function Task_2() {
    const [notes, setNotes] = useState(['a', 'b', 'c','d', 'e'])
    const [value, setValue] = useState('');
    const result = notes.map((note, index) => {
        return <div>
            <li key={index}>
            {note}
        </li> <button onClick={(index) => deleteItem(index)}>Delete</button><button onClick={() => addValue()}>Изменить значение</button>
        </div>
        });
    const addValue = () => {
        setNotes([...notes, value]);
        setValue('')
    }
    const deleteItem = (index) => {
        let copy = Object.assign([], notes);
        copy.splice(index, 1)
        setNotes(copy)
    }
    return <div>
        {result}
        <input value={value} onChange={(event) => setValue(event.target.value)} onBlur={() => addValue()}></input>
  </div>
}

export default Task_2