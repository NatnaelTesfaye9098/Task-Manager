import { useState } from "react";
import Header from "./Components/Header.jsx";
import Input from "./Components/Input.jsx";
import Task from "./Components/Task.jsx";

const App = () => {
  const [task, setTask] = useState({
    title: "",
    detail: "",
    completed: false
  });
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [filter, setFilter] = useState("all");

  const handleChange = (e) => {
    const {name, value} = e.target;

    setTask((prev)=>({
       ...prev,
      [name] : value
  }));
  }

  const handleClick = () => {
    if(editIndex !== null){
      const updatedItems = items.map((item, index) => index === editIndex ? task : item);
      setItems(updatedItems);
      setEditIndex(null);
    } else{
      setItems((prev) => [...prev, {...task}]);
    }

    setTask({title: "", detail: ""});
  }

  const handleEdit = (id) => {
    setTask(items[id]);
    setEditIndex(id);
  }

  const handleDelete = (id) => {
    setItems((prev) => { return prev.filter((item, index) => { return index !== id })});
    if (editIndex === id) {
      setTask({ title: "", detail: "", completed: false });
      setEditIndex(null);
    }
  }

  const handleCompleted = (id) => {
    setItems((prev) =>
      prev.map((item, index) =>
        index === id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  const filteredItems = items.filter((item) =>
    filter === "all" ? true : item.completed
  );


  return (
    <>
      <Header/>
      <Input task={task} editIndex={editIndex} handleChange={handleChange} handleClick={handleClick}/>
      <div className="filter">
        <h3>Filter:</h3>
        <label>
          <input
            type="radio"
            name="filter"
            value="all"
            onChange={() => setFilter("all")}
          />
          All
        </label>
        <label>
          <input
            type="radio"
            name="filter"
            value="completed"
            onChange={() => setFilter("completed")}
          />
          Completed
        </label>
      </div>

      <div class="card-container">
        {filteredItems.map((item, index) => (
          <Task
            id={index}
            task={item}
            onDelete={handleDelete}
            onEdit={handleEdit}
            onToggle={handleCompleted}
          />
        ))}
      </div>
    </>
  )
}

export default App;