import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode,sign,verify } from 'hono/jwt'
import { JWTPayload } from "hono/utils/jwt/types";
import { createPostInput,updatePostInput } from "@rehan_shah/medium-common";
export const blogRouter=new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_SECRET:string
    },
    Variables:{
        userId:string
    }
}>()

blogRouter.use('/*',async (c,next)=>{
    const token =c.req.header('Authorization') || ''
    try {
      const response=await verify(token,c.env.JWT_SECRET) as JWTPayload as any
      if(response){
          c.set("userId",response.id)
          await next()
      }
      else{
          c.status(401)
          return c.json({message: 'Unauthorized'})
      }
    } catch (error) {
      c.status(403)
      return c.json({message: 'You are not logged in'})
    }
})

blogRouter.post('/create',async(c)=>{
    const body = await c.req.json()
    const {success}=createPostInput.safeParse(body)
    if(!success){
      c.status(400)
      return c.json({message: 'Invalid input'})
    }
    const userId=c.get('userId')
    const prisma = new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate());
    try {
      const blog=await prisma.post.create({
        data:{
            title:body.title,
            content:body.content,
            authorId:userId
        }
      })
       return c.json({
        blog:blog.id
       })
    } catch (error) {
      console.log(error);
      
      return c.json({message: 'Blog already exists'})
    }
 })
 
blogRouter.put('/update',async(c)=>{
    const body = await c.req.json()
    const {success}=updatePostInput.safeParse(body)
    if(!success){
      c.status(400)
      return c.json({message: 'Invalid input'})
    }
    const prisma=new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,
    
    }).$extends(withAccelerate())
    try {
      const blog=await prisma.post.update({
        where:{
            id:body.id
        },
        data:{
            title:body.title,
            content:body.content
        }
      })

       return c.json({
        blog:blog
       })
    } catch (error) {
      console.log(error);
      c.status(500)
      return c.json({message: 'Error updating blog'})
    }
    
 })
 blogRouter.get('/bulk',async(c)=>{
     console.log('control');
     
     const prisma=new PrismaClient({
       datasourceUrl:c.env.DATABASE_URL,
     
     }).$extends(withAccelerate())
     try {
       const blogs=await prisma.post.findMany({
        select:{
          id:true,
          title:true,
          content:true,
          author:{
            select:{
              name:true
            }
          },
          date:true
        }
       })
 
        return c.json({
         blogs:blogs
        })
     } catch (error) {
       console.log(error);
       c.status(500)
       return c.json({message: 'Error fetching blogs'})
     }
  })
 
blogRouter.get('/:id',async (c)=>{
    const prisma=new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,
    
    }).$extends(withAccelerate())
    try {
      const blog=await prisma.post.findFirst({
        where:{
            id:c.req.param('id')
        },
        select:{
          title:true,
          content:true,
          author:{
            select:{
              name:true
            }
          },
          date:true
        }
      })

       return c.json({
        blog:blog
       })
    } catch (error) {
      console.log(error);
      c.status(401)
      return c.json({message: 'Error updating blog'})
    }
 })
 
blogRouter.delete('/:id',async (c)=>{
    const prisma=new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,
    
    }).$extends(withAccelerate())
    try {
      const blog=await prisma.post.delete({
        where:{
            id:c.req.param('id')
        }
      })

      c.status(200)
      return c.json({
        message: 'Blog deleted'
      })
    } catch (error) {
      console.log(error);
      c.status(401)
      return c.json({message: 'Error updating blog'})
    }
 })