import z from 'zod'

export const singnupInput=z.object({
    username:z.string(),
    password:z.string().min(6),
    name:z.string().optional()
})



export const singninInput=z.object({
    username:z.string(),
    password:z.string().min(6)
})



export const createPostInput=z.object({
    title:z.string(),
    content:z.string()
})



export const updatePostInput=z.object({
    title:z.string(),
    content:z.string(),
    id:z.string()
})


export type SignupInput=z.infer<typeof singnupInput>
export type SigninInput=z.infer<typeof singninInput>
export type CreatePostInput=z.infer<typeof createPostInput>
export type UpdatePostInput=z.infer<typeof updatePostInput>