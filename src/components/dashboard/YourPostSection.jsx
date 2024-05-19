"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import yourPostSectionStyle from "./yourPostSection.module.css"

export default function YourPostSection({ data }) {
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/posts/${id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <ul className="list-unstyled">
        {data?.map((post) => (
          <div key={post._id} className="d-flex flex-row align-items-center ">
            <div className="position-relative mb-3 w-100">
              <Link href={`/blog/${post._id}`} className="text-decoration-none">
                <li className="row flex-lg-row-reverse align-items-center border border-light py-2 bg-dark text-light">
                  <div className="col-10 col-sm-8 col-lg-3">
                    <Image
                      src={post.img}
                      className="d-block mx-lg-auto img-fluid"
                      alt="Post Image"
                      width="500"
                      height="300"
                    />
                  </div>
                  <div className="col-lg-8">
                    <h3 className="fw-bold lh-1 text-decoration-underline">
                      {post.title}
                    </h3>
                  </div>
                </li>
              </Link>
            </div>
            <div
              className={`ms-5 text-light ${yourPostSectionStyle.deleteIcon}`}
              onClick={() => handleDelete(post._id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="white"
                class="bi bi-trash"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
              </svg>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}
