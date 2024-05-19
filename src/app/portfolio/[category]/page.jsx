import Image from "next/image";
import Link from "next/link";
import { items } from "./data";
import { notFound } from "next/navigation";

const getData = (category) => {
  const data = items[category];
  if (data) {
    return data;
  }
  return notFound();
};
const Category = ({ params }) => {
  const data = getData(params.category);

  return (
    <div>
      <h3 className="text-decoration-underline">{params.category}</h3>
      {data.map((item)=>(
        <div className="row flex-lg-row-reverse align-items-center border border-light my-3" key={item.id}>
        <div className="col-10 col-sm-8 col-lg-6 py-4">
          <Image
            src={item.image}
            className="d-block mx-lg-auto img-fluid"
            alt="Hero Image"
            width="350"
            height="200"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="fw-bold lh-1 mb-3 ">{item.title}</h1>
          <p className="lead">
            {item.desc}
          </p>
        </div>
      </div>
      ))}
    </div>
  );
};

export default Category;
