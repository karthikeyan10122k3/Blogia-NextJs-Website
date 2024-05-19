"use server";

import { auth, signIn } from "@/auth";
import LoginForm from "@/components/auth/LoginForm";
import Link from "next/link";
import { redirect } from "next/navigation";

const Login = async () => {
  const session = await auth();
  if (session?.user) {
    redirect("/dashboard");
  }
  if (!session?.user) {
    return (
      <>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <div className="d-flex flex-column justify-content-center align-items-center text-center ">
          <h2 className="h1 mb-3 text-light">Login</h2>

          <LoginForm />

          <p className="text-light mt-2">- Or -</p>
          <div>
            <p className="text-light mt-2">Login With</p>
            <form
              action={async () => {
                "use server";
                await signIn("google");
              }}
            >
              <button type="submit" className="btn btn-outline-danger me-2">
                <i className="fa-brands fa-google fa-flip fa-xl"></i>
              </button>
            </form>
          </div>
          <p className="mt-3 text-light">
            Don't Have an Account?{" "}
            <span className="ms-2 text-decoration-underline text-light">
              <Link href="/dashboard/register">Register</Link>
            </span>
          </p>
        </div>
      </>
    );
  }
};

export default Login;
