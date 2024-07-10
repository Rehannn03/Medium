import { useBlogs } from "../hooks"
import BlogCard from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton"
import Navbar from "../components/Navbar"
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
            
                <BlogCard 
                id="1"
                title="How an ugly website design can be a good thing."
                content="This start with my journey in web development and how I learned that design is not everything. It's the content that matters. I will also talk about how I learned to love my ugly website. "
                authorName="John Doe"
                datePublished="12th May 2021"
                />
                <BlogCard
                id="2"
                title="Blog 2"
                content="This is the content of the blog"
                authorName="Author 2"
                datePublished="12th May 2021"
                />
                <BlogCard
                id="3"
                title="Blog 3"
                content="This is the content of the blog"
                authorName="Author 3"
                datePublished="12th May 2021"
                />
                </div>
        </div>
    </div>
  )
}

export default Blogs