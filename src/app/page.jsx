import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="row flex-lg-row-reverse align-items-center ">
      <div className="col-10 col-sm-8 col-lg-6">
        <Image
          src="/hero.png"
          className="d-block mx-lg-auto img-fluid"
          alt="Hero Image"
          width="500"
          height="300"
        />
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold lh-1 mb-3 ">
          Blogia, for Blog Writers
        </h1>
        <p className="lead">
          For aspiring bloggers and seasoned writers alike, this platform offers
          a space tailored specifically for blog writers, providing valuable
          resources, community support, and opportunities for growth.
        </p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <Link href={"/portfolio"}>
            <button
              type="button"
              className="btn btn-danger btn-lg px-4 me-md-2"
            >
              View Works
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
