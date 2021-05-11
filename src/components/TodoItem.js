import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

const TodoItem = ({ todo, setCompleted, removeTodo }) => {


    return (
        <div className={todo.completed ? 'todo-row completed' : 'todo-row'}>
            <div className={'iconButton'} onClick={() => setCompleted(todo.id)}>
                {todo.completed ? <CheckCircleOutlineIcon /> : <RadioButtonUncheckedIcon />}
            </div>
            <span>ID: {todo.id})</span>
            <span> {todo.title}</span>
            <div className={'iconButton'} onClick={() => removeTodo(todo.id)}>
                <CancelOutlinedIcon />
            </div>
        </div>
    )
}

export default TodoItem;