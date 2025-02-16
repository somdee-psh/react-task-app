import { use, useEffect, useState } from "react";
import "./App.css";
import AddForm from "./components/AddForm";
import Header from "./components/Header";
import Item from "./components/Item";

function App() {
  const [tasks, SetTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
  const [title, SetTitle] = useState("");
  const [editId, SetEditId] = useState(null);
  
  const [theme,SetTheme] = useState ("light")

useEffect(()=>{
  localStorage.setItem("tasks",JSON.stringify(tasks)) 
},[tasks])
 
  function deleteTask(id) {
    const result = tasks.filter((item) => item.id !== id);
    SetTasks(result);
  }



  function editTask(id){
    SetEditId(id)
    const editTask = tasks.find((item)=>item.id === id);
    SetTitle(editTask.title)
  }

  function saveTask(e) {
    e.preventDefault();
    if (!title) {
      alert("ກະລຸນາປ້ອນຂໍ້ມູນກ່ອນ");
    }else if(editId){
       //Update
        const updateTask = tasks.map((item) =>{
          if(item.id === editId){
              return {...item, title:title}
          }
          return item;
        })
       SetTasks(updateTask)
       SetEditId(null);
       SetTitle("")
    } else {
      // add newTaskk
      const newTask = {
        id: Math.floor(Math.random() * 1000),
        title: title,
      };
      SetTasks([...tasks, newTask]);
      SetTitle("");
    }
  }

  return (
    <div className={"App "+theme}>
      <Header theme={theme} SetTheme={SetTheme} />
      <div className="container">
        <AddForm title={title} setTitle={SetTitle} saveTask={saveTask} editId={editId} />
        <section>
          {tasks.map((data) => (
            <Item key={data.id} data={data} deleteTask={deleteTask} editTask={editTask} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
