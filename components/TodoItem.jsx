import React, { useContext, useEffect, useState } from 'react'
import { Todos } from '../Context/Context';

function TodoItem(props) {

    let { title, id } = props
    const [TodoTitle, setTodoTitle] = useState(title)
    const [chack, setChack] = useState(false)
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const { toDos, setToDos } = useContext(Todos);

    useEffect(() => {
        let childrens = document.getElementById('todoElemet').children
        for (let i = 0; i < childrens.length; i++) {
            let child = childrens[i]
            child.id = i + 1;
        }
        console.log(toDos);
    }, [toDos])

    function toggleCompleted(id) {
        if (chack) {
            toDos.forEach(e => {
                if (e.id == id) {
                    setChack(false)
                    e.chack = false
                }
            });
        } else {
            toDos.forEach(e => {
                if (e.id == id) {
                    setChack(true)
                    e.chack = true
                }
            });
        }
        console.log(toDos);

    }
    function editTodo(id, title) {
        if (isTodoEditable) {
            setIsTodoEditable(false)
            toDos.forEach(e => {
                if (e.id == id) {
                    e.title = title
                }
            });
        } else {
            setIsTodoEditable((prev) => !prev)
        }
    }

    const deleteTodo = (id) => {
        setToDos(prevItems => prevItems.filter(item => item.id !== id));
    };

    return (

        <div className={`flex items-center w-screen border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${chack ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`} id={id}>

            <input
                type="checkbox"
                className="cursor-pointer"
                checked={chack}
                onChange={() => toggleCompleted(id)}
            />
            <input
                type="text"
                id={`text${id}`}
                className={` outline-none w-full bg-transparent rounded-lg  font-bold p-2 
                    ${isTodoEditable ? "border border-black" : ""}
                    ${chack ? "line-through" : ""}
                    `}
                value={TodoTitle}
                onChange={(e) => setTodoTitle(e.target.value)}
                readOnly={!isTodoEditable}
            />

            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm   justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    let title = document.getElementById(`text${id}`).value
                    editTodo(id, title);
                }}
                disabled={chack}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>

            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm   justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => {
                    deleteTodo(id)
                }}
            >❌</button>
        </div>
    );
}

export default TodoItem