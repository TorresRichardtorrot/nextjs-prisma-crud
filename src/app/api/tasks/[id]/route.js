import {NextResponse} from "next/server"
import { prisma } from "@/libs/prisma"

export async function GET(request, {params} ){
    
    const task = await prisma.task.findUnique({
        where: {
            id:Number(params.id)
        }
    })
    return NextResponse.json(task)
}

export async function PUT(request, {params}){
    const body = await request.json()
    const taskUpdate =  await prisma.task.update({
        where: {
            id:Number(params.id)
        },
        data:body
    })
    return NextResponse.json(taskUpdate)
}

export async function DELETE(request, {params}){
   try {
        const taskRemoved = await prisma.task.delete({
            where: {
                id:Number(params.id)
            }
        })
        if(!taskRemoved) return NextResponse.json()
        return NextResponse.json(taskRemoved)
   } catch (error) {
    console.log(error)
    return NextResponse.json(error.meta.cause)
   }
}