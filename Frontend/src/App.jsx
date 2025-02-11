import { useState } from 'react'

import './App.css'
function TodoApp(){

  const [list, setList] = useState([{title:"Task", desc:"Description"}])
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  return(
    <>
      <input type="text" placeholder="Enter task" value={title} onChange={handleTitle}/>
      <input type="text" placeholder="Enter desc" value={desc} onChange={handleDesc}/>
      <br />
      <button onClick={()=>{
        addTodo()
      }}>Add Task</button>
    <button onClick={()=>{
      resetTodo()
    }}>Reset</button>
        <ol className="list">
          {list.map((value, index)=>(
        <li className="list-item" key={index}> 
          <h1>{value.title}</h1>
          <h4>{value.desc}</h4>
          <button onClick={()=>{
            removeTodo(index)
            }}>Remove</button>
        </li>
       ))}
      </ol>
    </>
  )
  function handleTitle(e){
    const title = e.target.value;
    setTitle(title)
  }
  function handleDesc(e){
    const desc = e.target.value;
    setDesc(desc)
  }
  function addTodo(){
    setList([...list, {title, desc}])
    setDesc("")
    setTitle("")
  }
  function removeTodo(k){
    setList(list.filter((_ , index)=>(
      index!==k
    )))
  }
  function resetTodo(){
    setList([])
    setDesc("")
    setTitle("")
  }
}
function App(){
  return(
    <>
     
      <TodoApp/>
    </>
  )
}


export default App
