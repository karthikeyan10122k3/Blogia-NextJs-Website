"use server"

import { signIn } from "@/auth";

const credentialsLogin = async(data) => {
  "use server"
  try {
    await signIn("credentials", {
      ...data, 
      redirect: false,
    });
    console.log("Signed in Successfully using credentials!");
  } catch (error) {
    console.log("Error Logging In!", error);
    throw new Error("Error Logging In!",error);
  }
};

export default credentialsLogin