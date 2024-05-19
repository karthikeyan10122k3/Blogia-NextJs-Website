import { Post } from "@/Models/Post"
import connectToDB from "@/utils/connectToDB"
import { NextResponse } from "next/server"

export const GET = async(Request,{params}) =>{
  const {id} = params
  await connectToDB()
  try{
  const post = await Post.findById({_id:id})
  return new NextResponse(JSON.stringify(post),{status:200})
}catch(err){
  return new NextResponse("Error Fetching Posts",{status:500})
}

}


export const DELETE = async(Request,{params}) =>{
  const {id} = params
  await connectToDB()
  try{
  await Post.findByIdAndDelete({_id:id})
  return new NextResponse("Post Deleted Successfully",{status:200})
}catch(err){
  return new NextResponse("Error Fetching Posts",{status:500})
}

}