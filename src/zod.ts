import { z } from 'zod';


export const validateProject = z.object({
    title:z.string().min(1),
    gitLink:z.string().url()
})

export const signupSchema = z.object({
    username:z.string().min(3),
    email:z.string().email(),
    password:z.string().min(8).max(12),
})

export const signinSchema = z.object({
    email:z.string().email(),
    password:z.string().min(8).max(12),
})