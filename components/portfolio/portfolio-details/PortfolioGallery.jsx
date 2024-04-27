"use client";

import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import Image from "next/image";

const images = [
  {
    src: "/images/media/img_89.jpg",
    width: "460",
    height: "400",
    alt: "media",
  },
  {
    src: "/images/media/img_90.jpg",
    width: "460",
    height: "400",
    alt: "media",
  },
  {
    src: "/images/media/img_91.jpg",
    width: "960",
    height: "510",
    alt: "media",
  },
];

const PortfolioGallery = () => {
  return (
    <>
      <Gallery>
        {images.map((image, index) => (
          <div
            className={`col-12 ${index === 2 ? "" : "col-sm-6"}`}
            key={index}
          >
            <div className="img-meta mt-30" data-aos="fade-right">
              <Item
                original={image.src}
                thumbnail={image.src}
                width={image.width}
                height={image.height}
              >
                {({ ref, open }) => (
                  <span
                    role="button"
                    className="fancybox d-block"
                    title="Click for large view"
                    ref={ref}
                    onClick={open}
                  >
                    <Image
                      width={460}
                      height={400}
                      layout="responsive"
                      src={image.src}
                      alt={image.alt}
                      className="lazy-img w-100"
                    />
                  </span>
                )}
              </Item>
            </div>
          </div>
        ))}
      </Gallery>
    </>
  );
};

export default PortfolioGallery;
