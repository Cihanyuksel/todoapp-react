import Header from "./components/Header";
import "./index.css";
import { useAuth } from "./context/AuthContext";
import TodoList from "./components/TodoList";
import Login from "./login/Login";
import AddTodo from "./components/AddTodo";

function App() {

  const { user } = useAuth();

  return (

      <>
        <Header />
        {user && <AddTodo /> }
        {!user ? <Login /> : <TodoList />   } 
      </>
   
  );
}

export default App;