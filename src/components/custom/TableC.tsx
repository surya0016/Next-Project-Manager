import React, { useState } from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import  DropDownButton  from './DropDownButton'
import { EditBtn } from './EditBtn'
import DeleteBtn from './DeleteBtn'
import prisma from "@/db"
import LoadingBtn from './LoadingBtn'


async function TableC() {
  const projects = await prisma.projects.findMany();
//   console.log(projects.length)
    if(projects.length === 0){
        return <div className='flex justify-center items-center'>
            <h2>You have no projects</h2>
        </div>
    }else{
  return (
  <>
    <div className='w-full'>
        <Table>
            <TableHeader >
                <TableRow>
                    <TableHead>Project Title</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>GitHub Link</TableHead>
                    <TableHead>Edit</TableHead>
                    <TableHead>Delete</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
            {projects.map((project) => (
                    <TableRow key={project.id}>
                        <TableCell className="font-medium">{project.title}</TableCell>
                        <TableCell>{`${project.date}`}</TableCell>
                        <TableCell><DropDownButton/></TableCell>
                        <TableCell className="cursor-pointer hover:text-blue-500"><a href={project.gitLink!} target='_blank'> {project.gitLink}</a></TableCell>
                        <TableCell className='text-center'><EditBtn/></TableCell>
                        <TableCell className='text-center'><DeleteBtn/></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </div>
  </>    
  )}
}

export default TableC