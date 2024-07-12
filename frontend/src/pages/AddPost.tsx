import  { useRef, useState } from 'react'
import JoditEditor from 'jodit-react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BACKEND_URL } from '../config'
function AddPost() {
    const navigate =useNavigate()
    const[content,setContent]=useState('')
    const[title,setTitle]=useState('')
    const editor=useRef(null)
    const config={
        placeholder:'Type your content here...',
        readonly:false
    }

    const handleSubmit=async()=>{
      const response=await axios.post(`${BACKEND_URL}/api/v1/blog/create`,{
        title,
        content  
      },{
        headers:{
          Authorization:localStorage.getItem('token')
        }
      })
      console.log(response.data.blog);
      
      navigate(`/blog/${response.data.blog}`)
    }
  return (
    <div>
      <Navbar/>
        <div className="mb-6">
            <label htmlFor="default-input" className="block mb-2 text-xl font-bold text-gray-900 dark:text-white">Title</label>
            <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        <label htmlFor="default-input" className="block mb-2 text-xl font-bold text-gray-900 dark:text-white">Content</label>
        <JoditEditor
        ref={editor}
        value={content}
        config={config}
        onBlur={(newContent)=>setContent(newContent)}
        onChange={newContent=>{}}
        />
        <button onClick={handleSubmit} className="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800" type="button">Publish</button>
    </div>
  )
}


export default AddPost