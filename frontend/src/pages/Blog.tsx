import Navbar from "../components/Navbar"
import { useBlog } from "../hooks"
import { useParams } from "react-router-dom"

function Blog() {
  const { id } = useParams<{ id: string }>()
  const { loading, blog } = useBlog(
    {
      id: id || ""
    }
  )
  if (loading || !blog) {
    return (
      <div className="flex justify-center items-center h-screen">
        <button type="button" className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded inline-flex items-center" disabled>
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12,2A10,10,0,1,0,22,12,10.011,10.011,0,0,0,12,2Zm4,13H8V11H16Z" />
          </svg>
          Loading...
        </button>
      </div>
    )
  }
  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
          <div className="col-span-8">
            <div className="text-5xl font-extrabold">
              {blog.title}
            </div>
            <div className="text-slate-500 pt-2">
              {
                new Date(blog.date).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric"
                })
              }
            </div>
            <div className="pt-4" dangerouslySetInnerHTML={{ __html: blog.content }}>

            </div>
          </div>
          <div className="col-span-4">
            <div className="text-slate-600 text-lg">
              Author
            </div>
            <div className="flex w-full">
              <div className="h-10 w-10 rounded-full bg-slate-400 flex items-center justify-center mr-4">
                <span className="text-white text-xl">{blog.author.name.charAt(0).toUpperCase()}</span>
              </div>
              <div>
                <div className="text-xl font-bold">
                  {blog.author.name || "Anonymous"}
                </div>
                <div className="pt-2 text-slate-500">
                  Random catch phrase about the author's ability to grab the user's attention
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Blog