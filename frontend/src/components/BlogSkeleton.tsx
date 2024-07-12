

export function BlogSkeleton() {
    return(

    <>
       <div>
      {/* Navbar Skeleton */}
      <div role="status" className="border-b flex justify-between px-10 py-4 bg-gray-700 animate-pulse">
        <div className="flex flex-col justify-center">
          <div className="h-8 bg-gray-300 rounded-full w-24"></div>
        </div>
        <div className="flex flex-row">
          <div className="h-10 w-20 rounded-full bg-gray-300 mr-4"></div>
          <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center"></div>
        </div>
      </div>
      
      {/* Card Skeletons */}
      {[1, 2, 3].map((_, index) => (
        <div key={index} role="status" className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:shadow-2xl m-3 animate-pulse">
          <div className="md:flex">
            <div className="p-8 w-full">
              <div className="h-6 bg-gray-200 rounded-full w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded-full w-full mb-2.5"></div>
              <div className="h-4 bg-gray-200 rounded-full w-5/6 mb-2.5"></div>
              <div className="h-4 bg-gray-200 rounded-full w-2/3 mb-2.5"></div>
              <div className="mt-4 flex items-center">
                <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center mr-4"></div>
                <div className="flex flex-col space-y-2">
                  <div className="h-4 bg-gray-200 rounded-full w-20"></div>
                  <div className="h-4 bg-gray-200 rounded-full w-28"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
    )
}