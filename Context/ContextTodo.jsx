import React, { useState } from 'react';
import { Todos } from './Context';

const TodoProvider = ({ children }) => {
    const [toDos, setToDos] = useState([]);

    const addTodo = (e) => {
        e.preventDefault()
        const newTodo = document.getElementById('textArea')
        if (newTodo.value) {
            setToDos([...toDos, { id: Math.random(), title: newTodo.value, chack: false }]);
            newTodo.value = null
        } else {
            setToDos(toDos);
        }
    };

    return (
        <Todos.Provider value={{ toDos, setToDos, addTodo }}>
            {children}
        </Todos.Provider>
    );
};

export default TodoProvider;
