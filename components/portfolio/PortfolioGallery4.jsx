"use client";

import { useState } from "react";
import items from "@/data/portfolio";
import Link from "next/link";
import Image from "next/image";

const PortfolioGallery4 = () => {
  const [filter, setFilter] = useState("*");

  const filteredItems =
    filter === "*"
      ? items.slice(25, 34)
      : items.slice(25, 34).filter((item) => item.category.includes(filter));

  return (
    <div className="portfolio-gallery-five pt-30">
      <div className="container">
        <ul className="style-none text-center isotop-menu-wrapper g-control-nav-two">
          <li
            className={filter === "*" ? "is-checked" : ""}
            onClick={() => setFilter("*")}
          >
            All
          </li>
          <li
            className={filter === "marketing" ? "is-checked" : ""}
            onClick={() => setFilter("marketing")}
          >
            Marketing
          </li>
          <li
            className={filter === "application" ? "is-checked" : ""}
            onClick={() => setFilter("application")}
          >
            Application
          </li>
          <li
            className={filter === "design" ? "is-checked" : ""}
            onClick={() => setFilter("design")}
          >
            Design
          </li>
          <li
            className={filter === "dev" ? "is-checked" : ""}
            onClick={() => setFilter("dev")}
          >
            Development
          </li>
        </ul>

        <div className="row pt-90 lg-pt-50 ">
          {filteredItems.map((item) => (
            <div key={item.id} className={`col-lg-4 col-md-6 ${item.category}`}>
              <div className="portfolio-block-five hvr-shutter-out mb-50 lg-mb-30">
                <div className="img-meta position-relative">
                  <Image
                    width={410}
                    height={380}
                    src={item.image}
                    alt="gallary"
                    className="w-100 tran5s"
                  />

                  <div className="caption d-flex justify-content-center align-items-center flex-column">
                    <span className="tag">{item.tag}</span>
                    <h6>
                      <Link href={`/portfolio/${item.id}`} className="pj-title">
                        {item.name}
                      </Link>
                    </h6>
                  </div>
                  {/* <!-- /.caption --> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioGallery4;
