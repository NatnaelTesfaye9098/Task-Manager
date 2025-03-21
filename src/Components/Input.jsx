const Input = ({ task, handleChange, handleClick, editIndex }) => {

    const handleSubmit = (e) => {
      e.preventDefault(); 
      handleClick();
    };
  
    return (
      <>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={task.title}
              onChange={handleChange}
            />
            <textarea
              name="detail"
              rows="10"
              placeholder="Details"
              value={task.detail}
              onChange={handleChange}
              required
            ></textarea>
          <button type="submit">{editIndex !== null ? "Update" : "Add"}</button>
          </div>
        </form>
      </>
    );
  };
  
export default Input;
  