import { useBlogs } from "../hooks"
import BlogCard from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton"
import Navbar from "../components/Navbar"

export interface Blog{
    "content":string,
    "title":string,
    "id":string,
    "author":{
        "name":string
    },
    "date":string
}
function Blogs() {
    const {loading,blogs}=useBlogs()
    
    if(loading){
        return(
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                <BlogSkeleton/>
                <BlogSkeleton/>
                <BlogSkeleton/>
                <BlogSkeleton/>
                <BlogSkeleton/>
                <BlogSkeleton/>
            </div>
        )
    }
  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <div className="flex justify-center">
            <div className="max-w-xl">
            
                {
                    blogs && blogs.map(blog=>(
                        <BlogCard key={blog.id} id={blog.id} title={blog.title} content={blog.content} authorName={blog.author.name} datePublished={blog.date}/>
                    ))
                }
                
                </div>
        </div>
    </div>
  )
}

export default Blogs