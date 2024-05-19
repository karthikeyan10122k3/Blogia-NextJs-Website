import { User } from "@/Models/User"
import connectToDB from "@/utils/connectToDB"
import { NextResponse } from "next/server"

export const GET = async(Request) =>{
  await connectToDB()
  try{
  const posts = await User.find()
  return new NextResponse(posts,{status:200})
}catch(err){
  return new NextResponse("Error Fetching Users",{status:500})
}

}