import { useCallback, useEffect, useState } from 'react';
import './App.css';
import AddTodos from './components/AddTodos';
import TodoList from './components/TodoList';
import fetchData from './utils/fetchData';
import Footer from './components/Footer';


const url = "https://jsonplaceholder.typicode.com/todos";

function App() {

  const [todos, setTodos] = useState([]);
  const [todosDisplay, setTodosDisplay] = useState([]);
  const [loading, setLoading] = useState(true);

  const filterTodos = useCallback(filter => {
    switch (filter) {
      case 0: setTodosDisplay([...todos]); break;
      case 1: setTodosDisplay(todos.filter(todo => todo.completed === false)); break;
      case 2: setTodosDisplay(todos.filter(todo => todo.completed === true)); break;
      default: setTodosDisplay([...todos]); return;
    }
  }, [todos])

  useEffect(() => {
    if (window.localStorage.getItem('todos') === null) {
      fetchData(url)
        .then(todosJson => {
          window.localStorage.setItem('todos', JSON.stringify(todosJson));
          setTodos([...todosJson]);
        }).then(() => setLoading(false))
    } else {
      setTodos([...JSON.parse(window.localStorage.getItem('todos'))]);
      setLoading(false);
    }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo list</h1>
      </header>
      <AddTodos todos={todos} setTodos={setTodos} />
      {loading ?
        <div>Loading...</div>
        : <TodoList todos={todos} todosDisplay={todosDisplay} setTodos={setTodos} />}
      <Footer className={'footer'} filterTodos={filterTodos} todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
