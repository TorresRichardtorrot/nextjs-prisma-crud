"use client"
import { useRouter } from "next/navigation"
const request = async (data)=>{
  const res = await fetch(`/api/tasks`,{
    method:"POST",
    body:JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return await res.json()
}
function NewPage() {
  const navigate =  useRouter()

  const handlerSubmit = async (e)=>{
    e.preventDefault()
    const title = e.target.title.value 
    const description = e.target.title.value
    const res = await request({title,description})
    console.log(res)
    navigate.push('/')
  }

  return (
    <div className='h-screen flex justify-center items-center '>
        <form onSubmit={handlerSubmit} className='bg-slate-800 p-10 lg:w-1/4 md:w-1/2'>

          <label htmlFor="title" className='font-bold text-sm'>Titulo de la tarea</label>
          <input id='title' type="text" placeholder='Titulo'
            className='border border-gray-400 p-2 mb-4 w-full text-black' 
          />
          <label htmlFor="description" className='font-bold text-sm' >Descripcion de la tarea</label>
          <textarea 
          className='border border-gray-400 p-2 mb-4 w-full text-black'
          id='description' 
          placeholder='Describe tu Tarea'
           rows="3">
           </textarea>

          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Crear
          </button>
        </form>
    </div>
  )
}

export default NewPage
