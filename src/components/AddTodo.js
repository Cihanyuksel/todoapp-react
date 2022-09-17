import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

function AddTodo() {

  const { ac, setAc} = useContext(TodoContext);
  const [content, setContent] = useState('')
  const [loading2, setLoading2] = useState(false)
  
  const PostTodo = async e => {
    e.preventDefault();

    if(content.length >= 3) {

      setLoading2(true)
      const response = await fetch('https://6314f0515b85ba9b11da2709.mockapi.io/todos', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content, isCompleted: false })
      })
  
      const data = await response.json();
      
      setContent('')
      setLoading2(false)
      ac === false ? setAc(true) : setAc(false)
      return data;
    }    
  }

  return (
    <>
      <form onSubmit={PostTodo} className='flex gap-x-5 justify-center items-center text-white my-8'>
        
        <input
            type='text'
            className='text-neutral-700 px-3 h-12 outline-none rounded-full placeholder:text-neutral-300 border-2 border-neutral-500 w-1/2'
            onChange={e => setContent(e.target.value)}
            minLength="3"
            value={content}
            placeholder= 'What We Do...'
          />
        
        <button type='submit' className='bg-[#3f6f59] h-10 w-40 px-2 rounded-full hover:bg-[#598872] transition-colors '>
          {loading2 ? 'Adding...' : 'Add New Task'}
        </button>

      </form>
    </>
  );
}

export default AddTodo;
