import { signIn, signOut } from "../auth";



export const handleSignIn = async () => {
  try {
    console.log("Signing In...")
    await signIn();
    
    console.log("Logged in Successfully")
  } catch (error) {
    console.error('Error during sign-in:', error);
  }
};

export const handleSignOut = async () => {
  try {
    console.log("Signing Out...")
    await signOut();
    console.log("Sign-out successful");
  } catch (error) {
    console.error('Error during sign-out:', error);
  }
};
