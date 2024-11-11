"use client"
import React, { useState } from 'react'


const page = () => {

  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [mainTask, setMainTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault()
    setMainTask([...mainTask, { title, desc }]);
    setTitle("")
    setDesc("")
    console.log(mainTask)
  }

  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i, 1)
    setMainTask(copytask)
  }

  let renderTask = <h2 className='text-white text-md'>No Task Available</h2>

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className='flex items-center justify-between'>
          <div div className='py-4 px-6'>
            <h3 className='text-2xl text-white font-semibold py-1'>{t.title}</h3>
            <p className='text-xl text-white'>{t.desc}</p>
          </div>
          <button className='text-white bg-red-700 py-2 px-6 rounded font-bold border-2 border-red-700 hover:bg-transparent' onClick={() => { deleteHandler(i) }}>Delete</button>
        </li>
      );
    })
  }


  return (
    <>

    <div className='flex items-center justify-center  bg-zinc-800 mt-10 mb-5 w-[100%] lg:w-[50%] m-auto'>
      <form onSubmit={submitHandler} className='flex items-center justify-center flex-wrap'>
        <input type="text" name="" id="" className='text-xl text-white border-zinc-800 border-2 m-8 px-4 py-2 bg-zinc-700 rounded-lg'
          placeholder='Enter Title here'
          value={title}
          onChange={(e) => { setTitle(e.target.value) }}
        />
        <input type="text" name="" id="" className='text-xl text-white border-zinc-800 border-2 m-8 sm:mx-8 px-4 py-2 bg-zinc-700 rounded-lg'
          placeholder='Enter Description here'
          value={desc}
          onChange={(e) => { setDesc(e.target.value) }}
        />
        <button className='bg-black text-white px-6 m-5 py-3 text-xl rounded-lg'>Add Task</button>
      </form>
      </div>


      <div className="bg-zinc-800 mx-auto mt-10 flex items-center justify-center w-[100%] lg:w-[50%] py-4 px-6">
        <ul className='w-full'>
          {renderTask}
        </ul>
      </div>


    </>
  )
}

export default page
