import Image from "next/image";
import Link from "next/link";
import axios from "axios";

export const metadata = {
  title: "Blogs ",
  description: "Created for Bloggers",
};

const getData = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/posts", {
      headers: {
        "Cache-Control": "no-cache",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
};

const Blog = async () => {
  const data = await getData();
  return (
    <div className="container">
      {data.map((post) => (
        <Link href={`/blog/${post._id}`} key={post.id}>
          <div
            className="row flex-lg-row-reverse align-items-center border border-light mb-2 py-2"
            style={{ maxHeight: "200px" }}
          >
            <div className="col-lg-6">
              <h3 className="fw-bold lh-1 mb-3 text-decoration-underline">
                {post.title}
              </h3>
              <p className="lead text-light">{post.desc}</p>
            </div>
            <div className="col-10 col-sm-8 col-lg-6 d-flex justify-content-center align-items-center">
              <div style={{ maxWidth: "100%", maxHeight: "100%" }}>
                <Image
                  src={post.img}
                  className="d-block mx-auto img-fluid"
                  alt="Post Image"
                  width={100}
                  height={100}
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
