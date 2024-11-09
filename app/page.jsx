"use client"
import React, { useState } from 'react'


const page = () => {

  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [mainTask, setMainTask] = useState([])
  const submitHandler = (e) =>{
    e.preventDefault()
    setMainTask([...mainTask, {title, desc}]);
    setTitle("")
    setDesc("")
    console.log(mainTask)
  }

  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setMainTask(copytask)
  }

  let renderTask = <h2 className='text-white text-md'>No Task Available</h2>

  if(mainTask.length>0){
    renderTask = mainTask.map((t, i)=>{
      return (
        <li key={i} className='flex items-center justify-between'>
          <div div className='py-4 px-6'>
            <h3 className='text-2xl text-white font-semibold py-1'>{t.title}</h3>
            <p className='text-xl text-white'>{t.desc}</p>
          </div>
          <button className='text-white bg-red-700 py-2 px-6 rounded font-bold border-2 border-red-700 hover:bg-transparent' onClick={()=>{deleteHandler(i)}}>Delete</button>
        </li>
      );
    })
  }
  

  return (
    <>


      <form onSubmit={submitHandler}>
        <input type="text" name="" id="" className='text-2xl border-zinc-800 border-2 m-8 px-4 py-2' 
        placeholder='Enter Title here'
        value={title} 
        onChange={(e)=>{ setTitle(e.target.value) }} 
       />
        <input type="text" name="" id="" className='text-2xl border-zinc-800 border-2 m-8 px-4 py-2'
        placeholder='Enter Description here'
        value={desc}
        onChange={(e)=>{ setDesc(e.target.value) }} 
        />
        <button className='bg-black text-white px-6 m-5 py-3 text-xl rounded'>Add Task</button>
      </form>

      
      <div className="bg-zinc-700 py-4 px-6 mx-10 w-2/3">
        <ul>
          {renderTask}
        </ul>
      </div>


    </>
  )
}

export default page