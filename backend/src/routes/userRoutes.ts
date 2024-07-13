import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode,sign,verify } from 'hono/jwt'
import {singnupInput,singninInput} from '@rehan_shah/medium-common'
export const userRouter=new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_SECRET:string
    }
}>()


userRouter.post('/signup',async (c)=>{
    const body = await c.req.json()
    const {success}=singnupInput.safeParse(body)
    console.log(singnupInput.safeParse(body));
    
    if(!success){
      c.status(400)
      return c.json({message: 'Invalid input'})
    }
    const prisma=new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,
    
    }).$extends(withAccelerate())

    
    try {
      const user=await prisma.user.create({
        data:{
          email:body.username,
          password:body.password,
          name:body.name
        }
      })
    
      const token =await sign({id:user.id},c.env.JWT_SECRET)
       return c.json({
        jwt:token,
        user:user.name
       })
    } catch (error) {
      console.log(error);
      c.status(401)
      return c.json({message: 'User already exists'})
    }
  })
  
userRouter.post('/signin',async (c)=>{
  
    const body=await c.req.json()
    const {success}=singninInput.safeParse(body)
    if(!success){
      c.status(400)
      return c.json({message: 'Invalid input'})
    }
    const prisma=new PrismaClient({
      datasourceUrl:c.env.DATABASE_URL,
    
    }).$extends(withAccelerate())
  
    try {
      const user=await prisma.user.findUnique({
        where:{
          email:body.username
        }
      })
      if(user?.password!==body.password){
        c.status(401)
        return c.json({message: 'Invalid credentials'})
      }
      
      if(!user){
        return c.json({message: 'User not found'})
      }
      
      const token =await sign({id:user?.id},c.env.JWT_SECRET)
       return c.json({jwt: token,
        user:user.name
       })
    } catch (error) {
      console.log(error);
      c.status(401)
      return c.json({message: 'User not found'})
      
    }
  })