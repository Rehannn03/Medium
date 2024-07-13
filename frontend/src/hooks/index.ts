import { useEffect,useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

export interface Blog{
    date: string;
    "content":string,
    "title":string,
    "id":string,
    "author":{
        "name":string
    }
}


export function useBlog({id}:{id:string}){
    const[loading,setLoading]=useState(true)
    const[blog,setBlog]=useState<Blog[]>()

    useEffect(()=>{
        try {
            axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            }).then((res)=>{
                setBlog(res.data.blog)
                setLoading(false)
            })
        } catch (error) {
            console.log("error in fetching blog",error);
            
        }
    },[id])

    return {loading,blog}
}

export function useBlogs(){
    const[loading,setLoading]=useState(true)
    const[blogs,setBlogs]=useState<Blog[]>()

    useEffect(()=>{
        try {
            axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            }).then((res)=>{
                setBlogs(res.data.blogs)
                setLoading(false)
            })
        } catch (error) {
            console.log("error in fetching blog",error);
            
        }
    },[])

    return {loading,blogs}
}