"use client";

import axios from "axios";
import { useForm } from "react-hook-form";

export default function AddPostForm({ username }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const postData = { ...data, username: username };
    try {
      await axios.post("http://localhost:3000/api/posts", postData);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-25">
      <h1 className="text-center">Add New Post</h1>
      <form
        className="d-flex flex-column gap-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-1 text-center">
          <input
            {...register("title", {
              required: "title is Required",
            })}
            type="text"
            className="form-control"
            placeholder="Title"
          />
          {errors.title && <div>{errors.title.message}</div>}
        </div>
        <div className="mb-1 text-center">
          <input
            {...register("desc", {
              required: "Description is Required",
            })}
            type="text"
            className="form-control"
            placeholder="Description"
          />
          {errors.desc && <div>{errors.desc.message}</div>}
        </div>
        <div className="mb-1 text-center">
          <input
            {...register("img", {
              required: "Image is Required",
            })}
            type="text"
            className="form-control"
            placeholder="Image URL"
          />
          {errors.img && <div>{errors.img.message}</div>}
        </div>
        <div className="mb-1 text-center">
          <textarea
            {...register("content", {
              required: "content is Required",
            })}
            className="form-control"
            placeholder="Content"
            rows="5"
          ></textarea>
          {errors.content && <div>{errors.content.message}</div>}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary"
        >
          {isSubmitting ? "Posting...." : "Post"}
        </button>
      </form>
    </div>
  );
}
