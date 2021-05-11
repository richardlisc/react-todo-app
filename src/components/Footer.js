import { useEffect, useState, useCallback } from "react";

const Footer = ({ filterTodos, todos, setTodos }) => {

    const clearCompleted = useCallback(() => {
        var temp = todos.filter(todo => todo.completed === false);
        window.localStorage.setItem('todos', JSON.stringify(temp));
        setTodos([...temp]);
    }, [todos, setTodos])

    const numOfCompleted = useCallback(() => {
        var num = 0;
        todos.forEach(todo => {
            if (todo.completed) num++
        })
        return num;
    }, [todos])

    const [filter, setFilter] = useState(0);

    useEffect(() => {
        filterTodos(filter)
    }, [filter, filterTodos])

    return (
        <div>
            <span>Filters: </span>
            <button
                disabled={filter === 0}
                onClick={() => setFilter(0)}>
                All
            </button>
            <button
                disabled={filter === 1}
                onClick={() => setFilter(1)}>
                Active
            </button>
            <button
                disabled={filter === 2}
                onClick={() => setFilter(2)}>
                completed
            </button>
            <button
                disabled={numOfCompleted() === 0}
                onClick={() => clearCompleted()}>
                Clear completed
            </button>
        </div>
    )
}

export default Footer;