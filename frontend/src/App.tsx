import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  Signup  from './pages/Signup.tsx'
import  Signin  from './pages/Signin.tsx'
import  Blog  from './pages/Blog.tsx'
import Blogs from './pages/Blogs.tsx'
import AddPost from './pages/AddPost.tsx'
import PrivateRoute from './pages/PrivateRoute.tsx'
import Home from './pages/Home.tsx'
function App() {
  return (
    <>
    {

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route element={<PrivateRoute />} >
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/publish" element={<AddPost />} />
          </Route>
        </Routes>
      </BrowserRouter>
    }

    </>
  )
}


export default App
