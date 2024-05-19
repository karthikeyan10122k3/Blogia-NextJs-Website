import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const now = new Date();
  const currentYear = now.getFullYear();
  return (
    <div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top ">
        <div className="col-md-4 d-flex align-items-center ">
          <span className="mb-3 mb-md-0 ">
            @{currentYear} Blogia. All Rights Reserved.
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li class="ms-3">
            <Link href={"/"}>
              <Image src={"/1.png"} width={20} height={20} alt="FaceBook" />
            </Link>
          </li>
          <li class="ms-3">
            <Link href={"/"}>
              <Image src={"/2.png"} width={20} height={20} alt="Instagram" />
            </Link>
          </li>
          <li class="ms-3">
            <Link href={"/"}>
              <Image src={"/3.png"} width={20} height={20} alt="Twitter" />
            </Link>
          </li>
          <li class="ms-3">
            <Link href={"/"}>
              <Image src={"/4.png"} width={20} height={20} alt="Youtube" />
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
