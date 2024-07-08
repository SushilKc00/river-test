'use client';

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import FormattedText from './formattedText';
import Link from 'next/link';
import { Arrow } from './StayWithUsRooms';

import { MdBalcony } from 'react-icons/md';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { CiCircleChevRight } from 'react-icons/ci';

import { IoWifiOutline } from 'react-icons/io5';
import { PiShower, PiTowelBold, PiTowelLight } from 'react-icons/pi';
import { LuBath } from 'react-icons/lu';

import { TbAirConditioning } from 'react-icons/tb';
import { FaShower, FaWifi } from 'react-icons/fa';

export interface StayWithUsProps {
  title?: string;
  subtitle?: string;
  link?: {
    label: string;
    href: string;
  };
  items: {
    title?: string;
    subtitle?: string[];
    price?: string;
    accomondation: {
      wifi?: boolean;
      shower?: boolean;
      bathtub?: boolean;
      towel?: boolean;
      ac?: boolean;
      balcony?: boolean;
    };
    image: {
      src: string | StaticImageData;
      alt: string;
    }[];
    link?: {
      label: string;
      href: string;
    };
  }[];
}

function Staywithus({ title, subtitle, items, link }: StayWithUsProps) {
  const [arrowColor, setArrowColor] = useState('#405751');

  return (
    <section>
      {title && (
        <FormattedText className="text-center text-4xl capitalize md:w-[45%] mx-auto font-abhya text-green-primary">
          {title}
        </FormattedText>
      )}

      <div className="flex items-center justify-between mt-10">
        {subtitle && (
          <FormattedText className="text-center sm:text-lg text-md font-medium capitalize">
            {subtitle}
          </FormattedText>
        )}
        <Link
          href={`${link?.href}`}
          className="relative border-2 border-gray-secondary px-2 py-1 capitalize font-medium text-md before:content-[''] before:bg-primarygreen before:absolute before:w-0 before:h-full before:top-0 before:left-0 before:-z-10 hover:before:w-full before:duration-500 hover:text-white"
        >
          {link?.label}
        </Link>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 mt-8 gap-12">
        {items.map((item, index) => (
          <div className="flex flex-col gap-4 md:hover:-translate-y-8 duration-700 transition-all">
            {/* Rooms images slider*** */}

            <div className="relative max-w-xl w-full aspect-[4/2.4]">
              <Swiper
                effect={'coverflow'}
                grabCursor={true}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: Number(`${index + 2}000`),
                }}
                pagination={{
                  clickable: true,
                  el: '',
                }}
                navigation={{
                  nextEl: `.next-ele-${index}`,
                  prevEl: `.prev-ele-${index}`,
                }}
                speed={1000}
                mousewheel={true}
                parallax={true}
                modules={[Autoplay, Navigation]}
                className="w-full h-full"
              >
                {item.image.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative w-full h-full">
                      <Image src={item.src} alt={item.alt} fill className="object-cover" />
                    </div>
                  </SwiperSlide>
                ))}
                {/* slider navigation button**** */}
              </Swiper>

              <div className="flex justify-between gap-2 mt-3 absolute top-[50%] -translate-y-[50%] left-0 z-30 w-full px-4">
                <div className={`cursor-pointer -rotate-180 prev-ele-${index} active:scale-90`}>
                  <CiCircleChevRight size={40} color="white" />
                </div>
                <div className={`cursor-pointer next-ele-${index} active:scale-90`}>
                  <CiCircleChevRight size={40} color="white" />
                </div>
              </div>
            </div>

            {/* slider navigation button**** */}

            {item.title && (
              <FormattedText className="text-md font-bold font-roboto capitalize text-green-primary">
                {item.title}
              </FormattedText>
            )}

            {item.subtitle && (
              <ul className="list-disc ml-4">
                {item?.subtitle?.map((item, index) => (
                  <li className="text-sm font-roboto" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
              // <FormattedText className="text-sm font-roboto">{item.subtitle}</FormattedText>
            )}

            {/* line *** */}
            <div className="w-full h-[0.05rem] bg-gray-300"></div>

            {/* price and icons */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* left side icons */}
              <div className="flex items-center gap-8">
                {item.accomondation.wifi && (
                  <div className="hover:scale-125 duration-500 group">
                    <FaWifi size={35} />
                    <span className="hidden group-hover:block absolute -bottom-7 -left-5 bg-primarygreen text-white px-3 rounded-sm text-sm">
                      Wifi
                    </span>
                  </div>
                )}

                {item.accomondation.shower && (
                  <div className="hover:scale-125 duration-500 group">
                    <FaShower size={35} />
                    <span className="hidden group-hover:block absolute -bottom-7 -left-5 bg-primarygreen text-white px-3 rounded-sm text-sm">
                      Shower
                    </span>
                  </div>
                )}

                {item.accomondation.balcony && (
                  <div className="hover:scale-125 duration-500 group">
                    <MdBalcony size={35} />
                    <span className="hidden group-hover:block absolute -bottom-7 -left-5 bg-primarygreen text-white px-3 rounded-sm text-sm">
                      Balcony
                    </span>
                  </div>
                )}

                {item.accomondation.bathtub && (
                  <div className="hover:scale-125 relative duration-500 group">
                    <LuBath size={35} />
                    <span className="hidden group-hover:block absolute -bottom-7 -left-5 bg-primarygreen text-white px-3 rounded-sm text-sm">
                      BathTub
                    </span>
                  </div>
                )}

                {item.accomondation.towel && (
                  <div className="hover:scale-125 duration-500 group">
                    <PiTowelBold size={35} />
                    <span className="hidden group-hover:block absolute -bottom-7 -left-4 bg-primarygreen text-white px-3 rounded-sm text-sm">
                      Towel
                    </span>
                  </div>
                )}

                {item.accomondation.ac && (
                  <div className="hover:scale-125 duration-500 group">
                    <TbAirConditioning size={35} />
                    <span className="hidden group-hover:block absolute -bottom-7 -left-5 bg-primarygreen text-white px-3 rounded-sm text-sm min-w-16 text-center">
                      Ac
                    </span>
                  </div>
                )}
              </div>

              {/* right side price and links */}

              <div className="flex md:justify-end">
                <div className="space-y-2">
                  <div>
                    {item.price && (
                      <div className="text-md font-semibold font-roboto text-center">
                        Rs {item?.price}
                      </div>
                    )}
                  </div>

                  <Link
                    href={`${item.link?.href}`}
                    onMouseEnter={() => setArrowColor('white')}
                    onMouseLeave={() => setArrowColor('#405751')}
                    className="relative font-semibold font-roboto text-sm flex items-center gap-1 border px-3 py-1 shadow-sm before:content-[''] before:bg-primarygreen before:absolute before:w-0 before:h-full before:top-0 before:left-0 before:-z-10 hover:before:w-full before:duration-500 hover:text-white"
                  >
                    {item.link?.label} <Arrow color={arrowColor} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Staywithus;
