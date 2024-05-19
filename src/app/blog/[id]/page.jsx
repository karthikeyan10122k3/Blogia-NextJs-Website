import axios from "axios";
import Image from "next/image";

export async function generateMetadata({params}){
  const data = await getData(params.id);
  return{
    title: data.title,
    description: data.description
  }
}
const getData = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/posts/${id}`, {
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

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  
  return (
    <div>
      <div className="row flex-lg-row-reverse align-items-center my-3">
        <div className="col-10 col-sm-8 col-lg-6">
          <Image
            src={data.img}
            className="d-block mx-lg-auto img-fluid"
            alt="Hero Image"
            width="300"
            height="300"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3 ">{data.title}</h1>
          <p className="lead text-light">{data.desc}</p>
        </div>
      </div>
      <div className=" mb-3 text-light">
        <Image
          src={data.img}
          className="me-3"
          alt="Hero Image"
          width="32"
          height="32"
        />
        {data.username}
      </div>
      <p className="text-light mb-5">
        {data.content}
      </p>
    </div>
  );
};

export default BlogPost;
