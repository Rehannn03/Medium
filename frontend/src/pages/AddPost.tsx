import { useRef, useState } from 'react'
import JoditEditor from 'jodit-react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BACKEND_URL } from '../config'
function AddPost() {
  const navigate = useNavigate()
  const [content, setContent] = useState('')
  const [title, setTitle] = useState('')
  const editor = useRef(null)
  const config = {
    placeholder: 'Type your content here...',
    readonly: false
  }

  const handleSubmit = async () => {
    const response = await axios.post(`${BACKEND_URL}/api/v1/blog/create`, {
      title,
      content
    }, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })

    navigate(`/blog/${response.data.blog}`)
  }
  return (
    <div>
      <Navbar />
      <div className="max-w-2xl mx-auto my-8 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
    <div className="mb-6">
        <label htmlFor="default-input" className="block mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
            Title
        </label>
        <input 
            type="text" 
            id="default-input" 
            className="w-full p-4 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-transform duration-300 ease-in-out transform hover:scale-105"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
    </div>
    <div className="mb-6">
        <label htmlFor="editor" className="block mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
            Content
        </label>
        <JoditEditor
            ref={editor}
            value={content}
            config={config}
            onBlur={(newContent) => setContent(newContent)}
            className="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
    </div>
    <button 
        onClick={handleSubmit} 
        className="w-full py-3 text-lg font-semibold text-white bg-blue-700 rounded-lg shadow-lg hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 transition-transform duration-300 ease-in-out transform hover:scale-105"
        type="button"
    >
        Publish
    </button>
</div>
    </div>
  )
}


export default AddPost