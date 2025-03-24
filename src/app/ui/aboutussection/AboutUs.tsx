import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./responsive.module.css";
function AboutUs() {
  const expYears = new Date().getFullYear() - 2007;
  const currentYear = new Date().getFullYear();
  return (
    <section
      className={`${styles.grid_Responsive} main_wrapper grid grid-cols-2 pt-16 md:pt-24 md:pb-[120px] pb-[85px]  overflow-hidden`}
      id="aboutus"
    >
      <div>
        <h1
          className="text-5xl font-semibold ml-4 lg:ml-0 mb-10"
          data-aos="fade-up"
        >
          About Us
        </h1>
        <div className={`${styles.image_responsive} relative hidden`}>
          <Image
            src="/assets/aboutuss.webp"
            alt="about us Image"
            fill
            objectPosition="center"
            objectFit="cover"
            className="rounded-none lg:rounded-lg"
            data-aos="zoom-in-out"
            data-aos-delay="400"
            unoptimized={true}
          />
        </div>
        <p
          className={`${styles.paragraph} inline-block text-[1.375rem] leading-[33px] lg:max-w-[609px] font-medium my-4 lg:mr-5`}
          data-aos="fade-up"
        >
          {`Face2Face, with ${expYears} years of excellence across Europe, now proudly
          brings its innovative scaffolding solutions to London. By utilizing
          100% metal materials, we ensure durable, sustainable, and cutting-edge
          approaches to modern construction.`}
        </p>
        <p
          className={`${styles.paragraph} inline-block text-[1.375rem] leading-[33px] lg:max-w-[609px] font-medium my-4 lg:mr-5`}
          data-aos="fade-up"
        >
          {`Safety has always been our cornerstone. Over ${expYears} years, we have proudly
          maintained a 0% accident rate thanks to our meticulous planning and
          rigorous procedures, from assembly to dismantling.`}
        </p>
        <p
          className={`${styles.paragraph} inline-block text-[1.375rem] leading-[33px] lg:max-w-[609px] max-w-full font-medium my-4 lg:mr-5`}
          data-aos="fade-up"
        >
          {`Today, in ${currentYear}, we stand as a testament to the power of consistent
          innovation and craftsmanship. Face2Face is more than a scaffolding
          company—we are a promise to deliver solutions that embody reliability
          and sustainability.`}
        </p>
        <div
          data-aos="fade-up"
          className={`${styles.btn_link} inline-block  mt-16`}
        >
          <Link
            style={{ transition: "all 300ms" }}
            className="text-white bg-btnbg text-[18px] rounded-[37px] px-14 py-[18px] hover:bg-btnbg btn_shadow"
            href="/getaquote"
          >
            Get a Quote
          </Link>
        </div>
      </div>
      <div
        style={{}}
        className={`${styles.large_image} relative h-[697px] lg:max-w-[571px] max-w-full`}
      >
        <Image
          src="/assets/aboutuss.webp"
          alt="about us Image"
          fill
          objectPosition="bottom"
          objectFit="cover"
          className="rounded-lg"
          data-aos="fade-left"
          data-aos-delay="500"
        />
      </div>
    </section>
  );
}

export default AboutUs;
