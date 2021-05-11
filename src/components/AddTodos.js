import { useRef } from "react"

const AddTodos = ({ todos, setTodos }) => {

    const inputRef = useRef();

    const submitHandler = e => {
        e.preventDefault();
        var temp = [{id: todos[0].id + 1, title: inputRef.current.value, completed: false }, ...todos];
        window.localStorage.setItem('todos', JSON.stringify(temp));
        setTodos([...temp]);
    }

    return (
        <form onSubmit={submitHandler}>
            <input placeholder={"Enter what to do?"} ref={inputRef}></input>
        </form>
    )
}

export default AddTodos;
