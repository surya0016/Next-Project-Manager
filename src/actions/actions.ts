"use server"

import prisma from "@/db"
import { validateProject } from "@/zod";
import { NextResponse } from "next/server"
import { z } from "zod";

export const createProject = async (title:string, gitLink:string) =>{
    const date = new Date();
    const todaysDate = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}` 

    const response = validateProject.safeParse({
        title,
        gitLink
    })

    try {
        if(!response.success){
            console.log(response);
            return false;
        }else{
            const project = await prisma.projects.create({
                data:{
                    title, 
                    gitLink,
                    date:todaysDate
                }
            })
            console.log(project);
            if(project) return true 
            else return false
        }
        
    } catch (error) {
        console.log(error);
        return false
    }
}


export const getProject = async (id:string) =>{
    const res = await prisma.projects.findFirst({
        where:{
            id
        }
    })
    return res;
}

export const editProject = async (id:string,title:string, gitLink:string | undefined) => {
    const response = validateProject.safeParse({
        title, 
        gitLink
    })
    if(!response.success){
        return false
    }else{
        const res = await prisma.projects.update({
        where:{
            id
        },
        data:{
            title,
            gitLink
        }
        })
        if (res) return true
        else return false
    }
}

export const deleteProject = async (id:string) => {
    await prisma.projects.delete({
        where:{
            id
        }
    })
}

export const getProgress = async ( id:string ):string => {
    const res = await prisma.projects.findFirst({
        where:{
            id
        }
    })
    return res?.progress
}

export const updateProgress = async (id:string, progress:string) => {
    await prisma.projects.update({
        where:{
            id
        },
        data:{
            progress
        }
    })
}