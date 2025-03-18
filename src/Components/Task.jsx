const Task = ({title, detail}) => {
    return(
        <div className="card">
            <h2>{title}</h2>
            <p>{detail}</p>
        </div>
    )
}

export default Task;