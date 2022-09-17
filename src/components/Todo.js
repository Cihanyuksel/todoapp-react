import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { TodoContext } from "../context/TodoContext";
import EditTodo from "./EditTodo";
import { Icon } from "../Icon/Icon";

function Todo({ todo }) {
  const [editOpen, setEditOpen] = useState(false);

  const {getTodo, ac, setAc, setLoading} = useContext(TodoContext)
  const { theme } = useContext(ThemeContext)


  const handleSubmit = async (id) => {

    try {

      await fetch(`https://6314f0515b85ba9b11da2709.mockapi.io/todos/${id}`, {
         method: 'PUT',
         headers: {
           "Accept": "application/json",
           "Content-Type": "application/json",
         },      
         body: JSON.stringify({ isCompleted: !todo.isCompleted})
       })
       ac === false ? setAc(true) : setAc(false)
    }

    catch (error) {
      console.log(error)
    }
  }

  const handleDelete = async id =>{
    setLoading(true)
    
    try {
          fetch(`https://6314f0515b85ba9b11da2709.mockapi.io/todos/${id}`, {
            method: 'DELETE'
          })
          ac === false ? setAc(true) : setAc(false)
          getTodo()
    }

    catch (error) {
      console.log(error)
    }
  }

  return (

    <div className={`${todo.isCompleted === true ? 'border-neutral-500' : 'border-[#3f8566]'} ${theme ? 'text-neutral-200' : 'text-neutral-800'} border-2 flex items-center justify-between rounded-md mt-2 px-3 py-2  font-semibold`}>
      {editOpen ? 
        <EditTodo
          todo={todo}
          setEditOpen={setEditOpen}
        />
       : 
        <p className={`mx-2 ${todo.isCompleted === true ? 'line-through text-neutral-500 font-normal' : '' }`} >{todo.content}</p>
      }
      <div className="text-white flex gap-x-4 justify-center items-center" >

        <button onClick={() => handleSubmit(todo.id)} 
          className={`${theme ? 'text-neutral-200' : 'text-green-700'} h-10 w-10 border-[1px] border-neutral-500 rounded-full inline-flex items-center justify-center transition-all flex-shrink-0 active:scale-110 sm:h-8 sm:w-8`}
          >
          {todo.isCompleted === false ?  <Icon name='check' /> : 'X'}
        </button>

        <button 
        onClick={() => handleDelete(todo.id)} 
        className={`${theme ? 'text-neutral-200' : 'text-red-700'} h-10 w-10 border-[1px] border-neutral-500 rounded-full inline-flex items-center justify-center transition-all flex-shrink-0 active:scale-110 sm:h-7 sm:w-7 `}
        >
          <Icon name='delete' />
        </button>

        <button
          onClick={() => setEditOpen(!editOpen)}
          className={`${theme ? 'text-neutral-200' : 'text-yellow-500 '} h-10 w-10 border-[1px] border-neutral-500 rounded-full inline-flex items-center justify-center transition-all flex-shrink-0 active:scale-110 sm:h-7 sm:w-7`}
        >
          { editOpen ? "X" : <Icon name='edit' /> }
        </button>

      </div>
    </div>
  );
}

export default Todo;
