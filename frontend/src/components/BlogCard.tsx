import { Link } from "react-router-dom";

interface BlogCardProps {
    id: string,
    title: string,
    content: string,
    authorName: string,
    datePublished: string,
}


const BlogCard = ({ id,title, content, authorName,datePublished }:BlogCardProps) => {
    return (
    <Link to={`/blog/${id}`}>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:shadow-2xl m-3">
        <div className="md:flex">
        <div className="p-8">
            <div className="uppercase text-xl font-semibold pt-2">{title}</div>
            <div className="mt-2 text-base text-gray-500" dangerouslySetInnerHTML={{ __html: content.substring(0, 100) + '...' }}></div>
            <div className="mt-4 flex items-center">
                <div className="h-10 w-10 rounded-full bg-slate-400 flex items-center justify-center mr-4">
                    <span className="text-white text-xl">{authorName.charAt(0).toUpperCase()}</span>
                </div>
                <div className="text-sm">
                    <p className="text-gray-900 leading-none font-light">{authorName}</p>
                    <p className="text-gray-600">{datePublished}</p>
                </div>
            </div>
        </div>
        </div>
      </div>
      </Link>
    );
  };

  export default BlogCard;
  