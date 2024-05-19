import Image from "next/image";
import Link from "next/link";


export const metadata = {
  title: "Contact ",
  description: "Created for Bloggers",
};

export default function Contact() {
  return (
    <div className="d-flex justify-content-between align-items-center gap-5">
      <div className="col-12 col-lg-6 col-xl-5 me-3 ms-5">
        <h2 className="h1 mb-3">Contact Us</h2>
        <form>
          <div className="mb-3">
            <input
              type="text"
              className="form-control bgGray"
              id="name"
              name="name"
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control bgGray"
              id="email"
              name="email"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control bgGray"
              id="message"
              name="message"
              rows="5"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <Link href={"/"}>
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </Link>
        </form>
      </div>
      <div className="col-12 col-lg-6 col-xl-7">
        <div className="row justify-content-xl-center">
          <div className="col-12 col-xl-11">
            <Image
              src="/about.png"
              className="img-fluid rounded "
              alt="About Us Image"
              width={500}
              height={300}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
