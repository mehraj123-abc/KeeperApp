import React from 'react'

function Note({id , title , text , onDelete}) {

     const handleDelete = ()=>{
          onDelete(id);
     }

  return (
    <div  className='h-72  w-56 flex flex-col gap-3 items-center border-1 justify-between overflow-scroll'  >
        <h1 className='font-bold text-lg text-black '>
         {id}.{title}
        </h1>  
        <p className=' mt-1 overflow-x-scroll text-sm text-red-400 '  >
              {text}
        </p>
        
         <button onClick={handleDelete} className='w-full bg-red-500 rounded h-12'>
            Delete
         </button>
    </div>
  )
}

export default Note