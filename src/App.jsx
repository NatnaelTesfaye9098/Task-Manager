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

  const handleChange = (e) => {
    const {name, value} = e.target;

    setTask((prev)=>({
       ...prev,
      [name] : value
  }));
  }

  const handleClick = (task) => {
    setItems((prev) => {
      return [...prev, task]
    })
  }

  return (
    <>
      <Header/>
      <Input task={task} handleChange={handleChange} handleClick={handleClick}/>
      {items.map((item)=> {
        return <Task title={item.title} detail={item.detail}/>
      })}
    </>
  )
}

export default App;