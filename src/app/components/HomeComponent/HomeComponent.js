import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { hind } from "@/app/fonts";
import Image from "next/image";
import { SiteConfig, PastBrands, CurrentBrands, DataArray } from "@/app/data";

const HomeComponent = () => {
  var settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 2000,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const brands = [...PastBrands, ...CurrentBrands];
  const [featured, ...others] = DataArray.slice(0, 3);
  const screenCount = DataArray.reduce((sum, p) => sum + p.images.gallery.length, 0);
  const stats = [
    { value: SiteConfig.yearsExperience, label: "Years experience" },
    { value: DataArray.length, label: "Case studies" },
    { value: `${Math.floor(screenCount / 10) * 10}+`, label: "Screens designed" },
  ];

  return (
    <React.Fragment>
      <div
        id="home"
        style={{
          backgroundImage: "linear-gradient(to right,white 65%, #48AFDE 35%)",
          minHeight: "500px",
          maxHeight: "1200px",
          height: "100%",
          width: "100%",
        }}
      >
        <div className="container m-auto ">
          <div className="grid grid-cols-12 ">
            <div className=" bg-white  flex flex-col justify-center col-span-12 md:col-span-5  md:bg-transparent">
              <div className="container m-auto">
                <div className="lg:pl-24 sm:pl-10 px-5 md:px-0 md:py-0 py-20 md:text-start text-center">
                  <p
                    className={`text-[#47AEDE]   text-3xl md:text-base lg:text-2xl ${hind.className}`}
                  >
                    Hi There!
                  </p>
                  <h1 className="text-[#223740] font-recoletaBlack text-6xl md:text-5xl lg:text-6xl xl:text-7xl mt-5 md:mt-3">
                    I'm {SiteConfig.shortName}
                  </h1>
                  <h2
                    className={`text-[#223740] py-2 font-bold uppercase text-md md:text-xs lg:text-xl ${hind.className}`}
                  >
                    {SiteConfig.role}
                  </h2>
                  <p
                    className={`text-[#47626D] font-[300] text-base lg:text-lg mt-2 max-w-md mx-auto md:mx-0 ${hind.className}`}
                  >
                    {SiteConfig.intro}
                  </p>

                  <a
                    href="/#portfolio"
                    className={`inline-block bg-[#48AFDE] transition-all duration-300 ease-in-out rounded-lg  text-white hover:bg-[#223740] hover:shadow-lg transform hover:-translate-y-1 py-3 md:py-2 lg:py-3 px-5 lg:px-8 md:text-xs lg:text-base font-bold uppercase mt-8 md:mt-5 xl:mt-10 ${hind.className}`}
                  >
                    Projects
                  </a>
                  <a
                    href={SiteConfig.behance}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`ml-5 lg:ml-10 inline-block bg-[#223740] transition-all duration-300 ease-in-out rounded-lg  text-white hover:bg-[#48AFDE] hover:shadow-lg transform hover:-translate-y-1 py-3 md:py-2 lg:py-3 px-5 lg:px-8 md:text-xs lg:text-base font-bold uppercase mt-8 md:mt-5 xl:mt-10 ${hind.className}`}
                  >
                    Behance
                  </a>

                  <dl
                    className={`mt-10 grid grid-cols-3 gap-4 max-w-md mx-auto md:mx-0 ${hind.className}`}
                  >
                    {stats.map((stat) => (
                      <div key={stat.label} className="border-l-2 border-[#48AFDE] pl-3 text-left">
                        <dt className="sr-only">{stat.label}</dt>
                        <dd className="text-2xl lg:text-3xl font-bold text-[#223740]">{stat.value}</dd>
                        <dd className="text-xs text-[#47626D] leading-4">{stat.label}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
            {SiteConfig.photo ? (
            <div className="md:col-span-7 col-span-12 md:pt-[130px] pt-[50px] md:bg-transparent bg-[#d9eef7]">
              <div className="m-auto container" style={{ width: "100%", height: "100%" }}>
                <Image
                  alt={`${SiteConfig.name} — ${SiteConfig.role}`}
                  src={SiteConfig.photo}
                  width={0}
                  height={0}
                  sizes="100vw"
                  priority
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
            ) : (
            <div className="md:col-span-7 col-span-12 md:pt-[130px] pt-[50px] pb-[120px] md:bg-transparent bg-[#d9eef7]">
              <div className="relative m-auto max-w-[640px] px-5">
                <Image
                  className="rounded-2xl w-full h-auto"
                  alt={featured.title}
                  src={featured.images.cover.src}
                  width={808}
                  height={632}
                  priority
                  style={{ boxShadow: "#223740 -10px 25px 50px -10px" }}
                />
                <div className="hidden sm:flex gap-4 absolute -bottom-16 right-0 w-[60%]">
                  {others.map((item) => (
                    <Image
                      key={item.name}
                      className="rounded-xl w-1/2 h-auto border-4 border-white"
                      alt={item.title}
                      src={item.images.cover.src}
                      width={808}
                      height={632}
                      style={{ boxShadow: "#223740 -5px 15px 30px -10px" }}
                    />
                  ))}
                </div>
              </div>
            </div>
            )}
          </div>

          <div className="container m-auto absolute">
            <div className="px-3">
              <div
                className="relative max-w-sm bottom-[70px] md:max-w-xl lg:max-w-5xl xl:max-w-6xl lg:px-14 px-5 overflow-hidden mx-auto bg-white rounded-2xl z-20 "
                style={{
                  boxShadow: "#48AFDE -10px 25px 50px 10px",
                }}
              >
                <p
                  className={`text-center text-[#47626D] text-xs uppercase tracking-widest pt-6 ${hind.className}`}
                >
                  Brands I've designed for
                </p>
                <div className="py-6 cursor-all-scroll">
                  <Slider {...settings}>
                    {brands.map((brand) => (
                      <div key={brand}>
                        <p className="text-center text-base lg:text-xl font-bold text-[#223740] opacity-40 hover:opacity-100 transition-opacity duration-300 truncate px-3">
                          {brand}
                        </p>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeComponent;
