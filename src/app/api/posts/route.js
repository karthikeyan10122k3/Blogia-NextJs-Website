import { Post } from "@/Models/Post"
import connectToDB from "@/utils/connectToDB"
import { NextResponse } from "next/server"

export const GET = async(request) =>{

  const url = new URL(request.url)

  const username = url.searchParams.get("username")

  await connectToDB()
  try{
    const posts = await Post.find(username && { username } )
    return new NextResponse(JSON.stringify(posts),{status:200})
}catch(err){
  return new NextResponse("Error Fetching Posts",{status:500})
}
}

export const POST = async(request) =>{

  const PostInfo = await request.json()
  console.log(PostInfo)

  await connectToDB()
  try{
    const newPost = new Post(PostInfo)
    await newPost.save()
    return new NextResponse("Post Created Successfully",{status:201})
}catch(err){
  return new NextResponse(`"Error Posting ${err}`,{status:500})
}
}