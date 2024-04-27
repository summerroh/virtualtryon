"use client";

import { useState } from "react";
import items from "@/data/portfolio";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import Link from "next/link";
import Image from "next/image";

const PortfolioGallery5 = () => {
  const [filter, setFilter] = useState("*");

  const filteredItems =
    filter === "*"
      ? items.slice(34, 40)
      : items.slice(34, 40).filter((item) => item.category.includes(filter));

  return (
    <div className="portfolio-gallery-seven pt-30">
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

        <div className="row pt-90 lg-pt-50">
          <Gallery>
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className={`col-lg-6 col-md-6 ${item.category}`}
              >
                <div className="portfolio-block-six mb-40">
                  <div className="img-meta position-relative">
                    <Image
                      width={800}
                      height={833}
                      src={item.image}
                      alt="gallary"
                      className="w-100 tran5s"
                    />

                    <Item
                      original={item.image}
                      thumbnail={item.image}
                      width={800}
                      height={833}
                    >
                      {({ ref, open }) => (
                        <span
                          role="button"
                          className="fancybox tran3s overlay-icon zoom-icon"
                          title="Click for large view"
                          ref={ref}
                          onClick={open}
                        >
                          <i className="bi bi-plus"></i>
                        </span>
                      )}
                    </Item>
                    <div className="caption tran3s d-flex justify-content-end flex-column">
                      <span className="tag">{item.tag}</span>
                      <h6>
                        <Link
                          href={`/portfolio/${item.id}`}
                          className="pj-title"
                        >
                          {item.name}
                        </Link>
                      </h6>
                    </div>
                    {/* <!-- /.caption --> */}
                  </div>
                </div>
              </div>
            ))}
          </Gallery>
        </div>
      </div>
    </div>
  );
};

export default PortfolioGallery5;
