import React from 'react'
import Note from './Note'
function Textarea({note,onDelete}) {
  return (
    <div className='p-12  w-full  mt-12 flex gap-12 flex-wrap' >
        {note.map((ele , index)=>
          <Note 
          title = {ele.title}
          text = {ele.text}
          id = {index}
          onDelete = {onDelete} />
        )}
    </div>
  ) 
}
export default Textarea