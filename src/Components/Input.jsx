const Input = ({task, handleChange, handleClick, editIndex}) => {

    return (
        <>
            <div className="input-container">
                <input type="text" name="title" placeholder="Title" value={task.title} onChange={handleChange}/>
                <textarea name="detail" rows="10" placeholder="Details" value={task.detail} onChange={handleChange}></textarea>
            </div>
            <button onClick={()=>{
                handleClick()
            }}>{editIndex ? "Update Task" : "Add Task"}</button>
        </>
    );
};

export default Input;