import Link from "next/link";
import React from "react";
import ServiceCard from "./servicecard/ServiceCard";
import services from "@/app/data/services";

function Services() {
  return (
    <section className="overflow-hidden mb-16 md:mb-24" id="services">
      <div className="mx-auto w-[92%] md:w-[88%]">
        <h1
          data-aos="fade-up"
          className="text-3xl md:text-[3rem] font-semibold mb-[14px] md:leading-[72px]"
        >
          Scaffolding Services
        </h1>
        <div className="flex justify-between flex-wrap gap-8 ">
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="w-[870px] text-sm md:text-[18px] font-medium md:leading-7"
          >
            Discover Our Comprehensive Range of Scaffolding Services, Expertly
            Designed to Support Construction, Maintenance, and Restoration
            Projects.
          </p>
          <Link
            data-aos="fade-left"
            data-aos-delay="300"
            className="text-white text-[18px] md:text-[22px] inline-block ring-1 ring-white rounded-[68px] bg-btnbg px-7 py-3 md:px-12 md:py-3"
            href="/getaquote"
          >
            Get a Quote
          </Link>
        </div>
        <div className="grid mt-12 mx-auto   grid-cols-1 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <ServiceCard
              serviceDetails={service}
              key={index}
              index={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
