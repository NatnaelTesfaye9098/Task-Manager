const Input = ({task, setTask}) => {
    return (
        <>
            <div className="input-container">
                <input type="text" name="title" placeholder="Title" value={task.title} onChange={setTask}/>
                <textarea name="detail" rows="10" placeholder="Details" value={task.detail} onChange={setTask}></textarea>
            </div>
            <button onClick={()=>{

            }}>Add</button>
        </>
    );
};

export default Input;