import Link from "next/link";
import { auth, signIn, signOut } from "../../auth";
import { links } from "./links";

const Navbar = async () => {
  const session = await auth();
  console.log(session)
  return (
    <div>
      <header className="d-flex flex-wrap justify-content-center py-3 mb-2 border-bottom">
        <Link
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none "
        >
          <span className="fs-4 ">Blogia</span>
        </Link>

        <ul className="nav nav-pills ">
          {links.map((link) => (
            <li className="nav-item" key={link.id}>
              <Link className="nav-link " href={link.url}>
                <span>{link.title}</span>
              </Link>
            </li>
          ))}
        </ul>
        {session ? (
          <div>
            <form
              action={async () => {
                "use server";
                await signOut("google");
              }}
            >
              <button type="submit" className="btn btn-outline-danger me-2">
                SignOut
              </button>
            </form>
          </div>
        ) : (
          <div>
            <form
              action={async () => {
                "use server";
                await signIn("google");
              }}
            >
              <button type="submit" className="btn btn-outline-danger me-2">
                SignIn
              </button>
            </form>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
