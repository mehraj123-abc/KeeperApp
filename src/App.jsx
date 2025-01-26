import React,{useState} from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Textarea from './components/Textarea';
function App() {
      
    const[Note , setNote] = useState([]);
    const[Title , setTitle] = useState('')
    const[Text , setText] = useState('')


    const handleTitle = (e)=>{
      setTitle(e.target.value);
    }
    const handleText = (e)=>{
        setText(e.target.value);
    }  

    const handleDelete = (id)=>{
      setNote(prevNote => prevNote.filter((_ , i)=> i !== id ));
    }

   const handleClick = ()=>{
       const newNote = {
          title : Title , 
          text : Text,
       }
      setNote(prevNote =>[...prevNote , newNote])
      setTitle('');
      setText('');
   }
  return (
    <div className=' flex flex-col items-center  '>
     < Navbar />
       <h1 className = "  mt-2    text-center w-96 text-3xl  hover:scale-150  " >This Is Note Taking App  !!</h1>         
       <div className='relative shadow-2xl rounded-2xl w-1/2 mt-8 h-72 flex flex-col border-1 ' >
           <input onChange={handleTitle} value={Title} className='outline-none h-12 p-4  border-b-2 border-dotted' placeholder='Enter The Title....' type="text"  />
           <textarea onChange={handleText} value={Text} className='outline-none mt-2 p-5 h-5/6' name="" placeholder='Enter Your Notes ...' id=""></textarea>
           <button onClick={handleClick} className='h-18 absolute top-68  right-0  w-15 bg-yellow-200  rounded-4xl border-2 hover:scale-130 '>➕</button>
       </div>

       <Textarea  
           note = {Note}
           onDelete = {handleDelete}
        />
    </div>
  )
}

export default App;