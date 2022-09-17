import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { TodoContext } from "../context/TodoContext";
import { Icon } from "../Icon/Icon";

function EditTodo({todo, setEditOpen, editOpen}) {
  
  const {ac, setAc} = useContext(TodoContext)
  const { theme } = useContext(ThemeContext)

  const [content, setContent] = useState(todo.content);

  const {id} = todo;

  const handleSubmit = async e => {
    e.preventDefault();

    try {
        if(content.length >= 3 ) {

          const response = await fetch(`https://6314f0515b85ba9b11da2709.mockapi.io/todos/${id}`, {
            method: 'PUT',
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json"
            },      
            body: JSON.stringify({ content})
          })
          const data = await response.json()
          setEditOpen(false)
          ac === false ? setAc(true) : setAc(false)
          return data;
    }
  }

    catch (error) {
      console.log(error)
    }
  }

  const modalClose = e  => {
    setEditOpen(false)
  }

  return (
    <>
      <form onSubmit={handleSubmit} onClick={modalClose} className="flex gap-x-5 justify-center items-center text-white md:absolute md:inset-0 lg:bg-black/10 lg:flex-col lg:gap-y-5">
        <input
          type="text"
          className={`text-neutral-800 px-2 outline-none h-8 border-b-2 border-l-2 border-neutral-400 ${theme ? 'bg-[#202020] border-neutral-200 text-neutral-200' : '' }  text-white lg:border-2 lg:p-5 lg:w-10/12`}
          value={content}
          onChange={e => setContent(e.target.value)}
          autoFocus={true}
          onClick={e => e.stopPropagation()}
        />
        <button
          type="submit"
          className={` h-10 w-10 text-xl rounded-full inline-flex items-center justify-center border-[1px] border-neutral-500  ${content.length < 3 ? 'bg-neutral-400 active:scale-100' : '' } ${theme ? 'text-neutral-200' : 'text-yellow-600'} active:scale-50 transition-all md:absolute md:right-12 `}
          disabled= {content.length < 3 ? true : false}
          onClick={e => e.stopPropagation()}
          >
          <Icon name='check' size={24} />
        </button>
          {content.length < 3 && <small className="text-black">At least 3 characters</small>}
      </form>
    </>
  );
}

export default EditTodo;
