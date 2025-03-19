const Task = ({id, task, onDelete, onEdit}) => {
    return(
        <div className="card">
            <h2>{task.title}</h2>
            <p>{task.detail}</p>
            <button id="bt1" onClick={()=> onDelete(id)}>Delete</button>
            <button id= "bt2" onClick={()=>onEdit(id)}>Edit</button>
        </div>
    )
}

export default Task;