import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import connectToDB from "./utils/connectToDB"
import { User } from "./Models/User"
import bcrypt from 'bcryptjs'

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google,
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        connectToDB()
        try{
          const user = await User.findOne({email:credentials.email})
          if(user){
            const isPasswordCorrect = bcrypt.compare(credentials.password, user.password)
            if(isPasswordCorrect){
              console.log("User Authenticated")
              return user
            }else{
              console.log("Wrong Credentials!")
              throw new Error("Wrong Credentials!")
            }
          }else{
            throw new Error("User Not Found!")
            
          }
        }catch(error){
          console.log(error)
          throw new Error(error)
        }
      },
    }),
  ],
  pages:{
    error:"/dashboard/login"
  },
})