import { User } from "@/Models/User"
import connectToDB from "@/utils/connectToDB"
import { NextResponse } from "next/server"
import  bcrypt  from "bcryptjs"

export const POST = async(request) => {

await connectToDB()

try{
  const {name ,email , password} = await request.json()
  const hashedPassword = await bcrypt.hash(password, 10)

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  })
  await newUser.save()
  console.log("Successfully Registered")
  return new NextResponse("User has been Created Successfully",{
    status:201,
  })
  
}catch(error){
  console.log("Error While Registering!")
  console.log(error)
  return new NextResponse(error.message,{
    status:500,
  })
}

}