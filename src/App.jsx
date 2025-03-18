import { useState } from "react";
import Header from "./Components/Header.jsx";
import Input from "./Components/Input.jsx";

const App = ()=>{
  
  const [task, setTask] = useState({
    title: "",
    detail: ""
  });
  const [] = useState([])

  const handleChange = (e) => {
    const {name, value} = e.target;

    setTask((prev)=>({
       ...prev,
      [name] : value
  }));
  }

  return (
    <>
      <Header/>
      <Input task={task} setTask={handleChange}/>
    </>
  )
}

export default App;