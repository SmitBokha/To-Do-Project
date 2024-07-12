import React, { useContext } from 'react'
import { Todos } from '../Context/Context';

function InputTodo() {

    const { addTodo } = useContext(Todos);


    return (
        <>
         
            <form className="flex">
                <input
                    id='textArea'
                    type="text"
                    placeholder="Write Todo..."
                    className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-2"
                />
                <button type="submit" className="rounded-r-lg px-8 py-1 bg-green-600 text-white shrink-0"
                    onClick={addTodo}>
                    Add
                </button>
            </form>
        </>
    );
}

export default InputTodo