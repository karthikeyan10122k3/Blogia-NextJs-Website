import Link from "next/link";
import styles from "./portfolio.module.css";

export const metadata = {
  title: "Portfolio ",
  description: "Created for Bloggers",
};

const Portfolio = () => {
  return (
    <div className="row row-cols-1 row-cols-lg-3 g-4 py-5">
      <div className="col">
        <Link href="/portfolio/illustrations">
          <div
            className={`card card-cover overflow-hidden text-dark rounded-4 shadow-lg d-flex flex-column justify-content-between ${styles.bgroundIllustration}`}
          >
            <div className="p-5 pb-3 text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold title">
                Illustrations
              </h3>
              <ul className="d-flex list-unstyled mt-auto">
                {/* Additional content here */}
              </ul>
            </div>
          </div>
        </Link>
      </div>

      <div className="col">
        <Link href="/portfolio/applications">
          <div
            className={`card card-cover overflow-hidden text-dark rounded-4 shadow-lg d-flex flex-column justify-content-between ${styles.bgroundApps}`}
          >
            <div className="p-5 pb-3 text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold title">
                Applications
              </h3>
              <ul className="d-flex list-unstyled mt-auto">
                {/* Additional content here */}
              </ul>
            </div>
          </div>
        </Link>
      </div>

      <div className="col">
        <Link href="/portfolio/websites">
          <div
            className={`card card-cover overflow-hidden text-dark rounded-4 shadow-lg d-flex flex-column justify-content-between ${styles.bgroundWebsites}`}
          >
            <div className="p-5 pb-3 text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold title">
                Websites
              </h3>
              <ul className="d-flex list-unstyled mt-auto">
                {/* Additional content here */}
              </ul>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
