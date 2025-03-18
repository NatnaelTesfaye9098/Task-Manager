const Input = ({task, handleChange, handleClick}) => {

    return (
        <>
            <div className="input-container">
                <input type="text" name="title" placeholder="Title" value={task.title} onChange={handleChange}/>
                <textarea name="detail" rows="10" placeholder="Details" value={task.detail} onChange={handleChange}></textarea>
            </div>
            <button onClick={()=>{
                handleClick(task)
            }}>Add</button>
        </>
    );
};

export default Input;