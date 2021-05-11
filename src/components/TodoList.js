import TodoItem from './TodoItem';

const TodoList = ({ todos, todosDisplay, setTodos }) => {

    const setCompleted = id => {
        var temp = todos;
        temp.forEach(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
        })
        window.localStorage.setItem('todos', JSON.stringify(temp));
        setTodos([...temp]);
    }

    const removeTodo = id => {
        var temp = todos.filter(todo => todo.id !== id);
        window.localStorage.setItem('todos', JSON.stringify(temp));
        setTodos([...temp]);
    }

    return (
        <div>
            <ul>
                {todosDisplay.map((todo, index) => {
                    return (
                        <li key={index}>
                            <TodoItem todo={todo}
                                setCompleted={setCompleted}
                                removeTodo={removeTodo} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default TodoList;