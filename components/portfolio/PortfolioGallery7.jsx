"use client";
import { useState } from "react";
import Masonry from "react-masonry-css";
import items from "@/data/portfolio";
import Link from "next/link";
import Image from "next/image";

const PortfolioGallery7 = () => {
  const [filter, setFilter] = useState("*");

  const filteredItems =
    filter === "*"
      ? items.slice(45, 51)
      : items.slice(45, 51).filter((item) => item.category.includes(filter));

  return (
    <div className="portfolio-gallery-nine pt-30">
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

        <div className="pt-90 lg-pt-50 ">
          <Masonry
            breakpointCols={{ default: 2, 768: 1 }}
            className="masonry-grid"
            columnClassName="masonry-grid-column"
          >
            {filteredItems.map((item) => (
              <div key={item.id} className={`${item.category}`}>
                <div className="portfolio-block-seven mb-70 lg-mb-40">
                  <div className="img-meta">
                    <Image
                      width={620}
                      height={580}
                      layout="responsive"
                      loading="lazy"
                      src={item.image}
                      alt="gallary"
                      className="w-100 tran5s"
                    />
                  </div>

                  <div className="caption pt-20">
                    <span className="tag fst-italic position-relative">
                      {item.tag}
                    </span>
                    <h6>
                      <Link href={`/portfolio/${item.id}`} className="pj-title">
                        {item.name}
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </Masonry>
        </div>
      </div>
    </div>
  );
};

export default PortfolioGallery7;
