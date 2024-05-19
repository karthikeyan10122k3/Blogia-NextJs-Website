"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function RegisterForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    
    try {
      const response = await axios.post("/api/auth/register", data);
      response.status === 201 &&
        router.push("/dashboard/login?success=Account has been Created");
    } catch (error) {}
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <input
          {...register("name", {
            required: "Username is Required",
            minLength: {
              value: 6,
              message: "Username must have atleat 6 characters",
            },
          })}
          type="text"
          className="form-control bgGray"
          id="name"
          name="name"
          placeholder="Enter Your Username"
        />
        {errors.name && <div>{errors.name.message}</div>}
      </div>
      <div className="mb-3">
        <input
          {...register("email", {
            required: "Email is Required",
            validate: (value) => {
              if (!value.includes("@")) {
                return "Email Must include @";
              }
              return true;
            },
          })}
          type="email"
          className="form-control bgGray"
          id="email"
          name="email"
          placeholder="Enter Your Email"
        />
        {errors.email && <div>{errors.email.message}</div>}
      </div>
      <div className="mb-3">
        <input
          {...register("password", {
            required: "Password is Required",
            minLength: {
              value: 6,
              message: "Password must have atleat 6 characters",
            },
          })}
          type="password"
          className="form-control bgGray"
          id="password"
          name="password"
          placeholder="Enter Your password"
        />
        {errors.password && <div>{errors.password.message}</div>}
      </div>
      <button type="submit" disabled={isSubmitting} className="btn btn-primary">
        {isSubmitting ? "Registering...." : "Register"}
      </button>
      <p className="mt-2 text-light">
        Already Have an Account?
        <span className="ms-2 text-decoration-underline text-light">
          <Link href="/dashboard/login">Login</Link>
        </span>
      </p>
    </form>
  );
}
