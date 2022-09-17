import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import Todo from "./Todo";

function TodoList() {
  
  const { loading, doneTodo, thingsTodo } = useContext(TodoContext);

  return (
    <main className="h-auto flex gap-x-5 sm:mx-5 sm:flex-col mx-10">

      <section className={`w-1/2 mx-auto text-neutral-400 sm:w-5/6`}>
    
        <span
          className=
        {`
          ${loading ? "transition-all top-[125px]" : "transition-all top-[72px]"}    
           -z-10 absolute right-2 bg-[rgb(231,76,60)] inline-flex items-center justify-center py-4
            px-10 rounded-sm text-white md:p-2 md:right-0 md:px-8 
       `}  
        
        >
          Deleting...
        </span>

        <div className="flex justify-between">
          <h2 className="font-semibold">TO DO</h2>
          <span className="border-[1px] border-neutral-300 px-2 py-[0.5px]">
            {thingsTodo.length}
          </span>
        </div>

        <div className="h-4 border-b-2 border-neutral-300"></div>

        {thingsTodo.length === 0 
        ? (
          <span className="mt-10 text-2xl flex justify-center items-center">
            The List is Empty!
          </span> )
        : (
          thingsTodo.map((todo) => (
            <Todo todo={todo} thingsTodo={thingsTodo} key={todo.id} />
          ))
        )}
      </section>

      <section className={`w-1/2 sm:w-5/6 md:mt-5 mx-auto text-neutral-500 ${doneTodo.length === 0 && "hidden"}`}>

        <div className="flex justify-between">
          <h2 className="font-semibold">DONE</h2>
          <span className="border-[1px] border-neutral-300 px-2 py-[0.5px]">
            {doneTodo.length}
          </span>
        </div>

        <div className="h-4 border-b-2 border-neutral-300"></div>
          {doneTodo.map((todo) => (
            <Todo todo={todo} doneTodo={doneTodo} key={todo.id} />
          ))}
        </section>

    </main>
  );
}

export default TodoList;
