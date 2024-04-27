"use client";

import ModalVideo from "react-modal-video";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import { useState } from "react";
import Image from "next/image";
import portfolioItems from "@/data/portfolio";
import Link from "next/link";

const Portfolio = () => {
  const [isOpen, setOpen] = useState(
    new Array(portfolioItems.length).fill(false)
  );
  return (
    <>
      <Gallery>
        {portfolioItems.slice(55, 60).map((item, index) => (
          <div className="isotop-item item-xl" key={index}>
            <div className="portfolio-block-two mb-55 lg-mb-30">
              <div className="img-holder">
                <Image
                  width={1320}
                  height={611}
                  src={item.imgSrc}
                  alt="portfolio image"
                  className="img-meta w-100 tran6s"
                />
                {item.videoUrl && (
                  <button
                    className={`fancybox ${item.overlayClass} tran3s`}
                    onClick={() => {
                      // call the appropriate handler function for each item
                      const updatedIsOpen = [...isOpen];
                      updatedIsOpen[index] = true;
                      setOpen(updatedIsOpen);
                    }}
                  >
                    <i className={item.iconClass} />
                  </button>
                )}

                {item.zoomImgSrc && (
                  <Item
                    original={item.imgSrc}
                    thumbnail={item.imgSrc}
                    width={1320}
                    height={611}
                  >
                    {({ ref, open }) => (
                      <div
                        role="button"
                        className={`fancybox ${item.overlayClass} tran3s`}
                        title="Click for large view"
                        href={item.zoomImgSrc}
                        tabIndex={0}
                        ref={ref}
                        onClick={open}
                      >
                        <i className={item.iconClass} />
                      </div>
                    )}
                  </Item>
                )}

                <div className="caption tran3s d-flex justify-content-end flex-column">
                  <span className="tag">{item.captionTags}</span>
                  <h6>
                    <Link href="/portfolio/1" className="pj-title">
                      {item.captionTitle}
                    </Link>
                  </h6>
                </div>
                {/* /.caption */}
              </div>
            </div>
            {/* /.portfolio-block-two */}{" "}
            {item.videoUrl && (
              <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen[index]}
                videoId={item.videoUrl}
                onClose={() => {
                  // call the appropriate handler function for each item
                  const updatedIsOpen = [...isOpen];
                  updatedIsOpen[index] = false;
                  setOpen(updatedIsOpen);
                }}
              />
            )}
          </div>
          /* /.isotop-item */
        ))}
      </Gallery>
    </>
  );
};

export default Portfolio;
