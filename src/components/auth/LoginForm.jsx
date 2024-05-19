"use client";

import { useForm } from "react-hook-form";
import credentialsLogin from "./credentialsLogin";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async(data) => {
    await credentialsLogin(data)
    window.location.reload()
  };

  return (
    <>
      <form onSubmit={ handleSubmit(onSubmit)} >
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
            className="form-control"
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
            })}
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Enter Your password"
          />
          {errors.password && <div>{errors.password.message}</div>}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary"
        >
          {isSubmitting ? "Signing In...." : "Sign In"}
        </button>
        </form>
    </>
  );
}
