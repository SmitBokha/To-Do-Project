import { useContext, useEffect } from 'react'
import './index.css'
import InputTodo from '../components/InputTodo'
import TodoItem from '../components/TodoItem'
import { Todos } from '../Context/Context';

function App() {
  const { toDos, setToDos } = useContext(Todos);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("toDos"))

    if (todos && todos.length > 0) {
      setToDos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(toDos))
  }, [toDos])

  return (
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="bg-[#182943] w-full max-w-2xl mx-auto shadow-2xl rounded-lg px-4 py-3 text-white">
        <h1 className="text-4xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
          <InputTodo />
        </div>
        <div className="flex flex-wrap gap-y-3" id='todoElemet'>
          {toDos && toDos.map((e) => {
            return (
              < TodoItem
                title={e.title}
                id={e.id}
                key={e.id} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
