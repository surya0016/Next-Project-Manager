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