import React, { createContext, useEffect, useState } from 'react'


export const TodoContext = createContext();


export const TodoContextProvider = ({children}) => {

    const [todos, setTodos] = useState([]);
    const [ac, setAc] = useState(false)
    const [loading, setLoading] = useState(false)

    const getTodo = async () => {
        const response = await fetch('https://6314f0515b85ba9b11da2709.mockapi.io/todos')
        const data = await response.json()

        if(response.ok || response.status === 200) {
            setTodos(data)
            setLoading(false)
        }
        }

    useEffect(() => {
        getTodo();
    }, [ac, setAc])


    const doneTodo = todos.filter(todo => {
        return todo.isCompleted === true
    })

    const thingsTodo = todos.filter(todo => {
        return todo.isCompleted === false
    })

    
    return (
    <TodoContext.Provider value={{todos, getTodo, ac, setAc, loading, setLoading, doneTodo, thingsTodo }} >
        {children}
    </TodoContext.Provider>  

)}

