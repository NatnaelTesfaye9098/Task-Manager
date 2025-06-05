const Task = ({id, task, onDelete, onEdit, onToggle}) => {

    return(
        <div className={task.completed ? "card completed-task-card" : "card"}>
            <span>{task.title}<hr/></span>
            <p>{task.detail}</p>
            <div class="buttons">
                <button id="bt1" onClick={()=> onDelete(id)}>Delete</button>
                <button id= "bt2" onClick={()=> onEdit(id)}>Edit</button>
            </div>
            <label>
            <input type="checkbox" name="completed" checked={task.completed} onChange={()=> onToggle(id)}/>Completed
            </label>
        </div>
    )
}

export default Task;