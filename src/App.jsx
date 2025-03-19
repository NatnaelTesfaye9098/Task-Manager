import { useState } from "react";
import Header from "./Components/Header.jsx";
import Input from "./Components/Input.jsx";
import Task from "./Components/Task.jsx";

const App = () => {
  const [task, setTask] = useState({
    title: "",
    detail: ""
  });
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const {name, value} = e.target;

    setTask((prev)=>({
       ...prev,
      [name] : value
  }));
  }

  const handleClick = () => {
    if (editIndex !== null) {
      const updatedItems = items.map((item, index) =>
        index === editIndex ? task : item
      );
      setItems(updatedItems);
      setEditIndex(null);
    } else {
      setItems((prev) => [...prev, task]);
    }

    setTask({ title: "", detail: "" });
  };

  const handleEdit = (id) => {
    setTask(items[id]);
    setEditIndex(id);
  }

  const handleDelete = (id) => {
    setItems((prev) => { return prev.filter((item, index) => { return index !== id })});
  }

  return (
    <>
      <Header/>
      <Input task={task} editIndex={editIndex} handleChange={handleChange} handleClick={handleClick}/>
      {items.map((item, index)=> {
        return <Task id={index} onDelete={handleDelete} onEdit={handleEdit} task={item}/>
      })}
    </>
  )
}

export default App;