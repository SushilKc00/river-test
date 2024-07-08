'use client';

import React, { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import FormattedText from './formattedText';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { CiCircleChevRight } from 'react-icons/ci';
export interface ActivitiesProps {
  title?: string;
  subtitle?: string;
  items: {
    title?: string;
    subtitle?: string[];
    image: {
      src: string | StaticImageData;
      alt: string;
    }[];
  }[];
}

function Activities({ title, items }: ActivitiesProps) {
  return (
    <section>
      {title && (
        <FormattedText className="sm:text-6xl text-3xl text-center text-primarygreen sticky md:top-28 top-32">
          {title}
        </FormattedText>
      )}

      <div className="flex flex-col gap-24 sm:mt-8 mt-4">
        {items.map((item, index) => (
          <div
            style={{
              top: `${index / 4 + 13.6}rem`,
            }}
            className={`flex border-2 shadow-xl rounded-lg  ${index % 2 == 0 ? 'md:flex-row flex-col' : 'md:flex-row-reverse flex-col'} sticky top-28`}
          >
            {/* left side room image slider**** */}
            <div className="md:w-[60%] w-full overflow-hidden relative">
              <Swiper
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: Number(`${index + 2}000`),
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={{
                  nextEl: `.next-ele-${index}`,
                  prevEl: `.prev-ele-${index}`,
                }}
                speed={1000}
                modules={[Autoplay, Navigation]}
                className="w-full h-full"
              >
                {item.image.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative w-full aspect-[4/2.4]">
                      <Image src={item.src} alt={item.alt} fill className="object-cover" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="flex justify-between gap-2 mt-3 absolute top-[50%] -translate-y-[50%] left-0 z-10 w-full px-6">
                <div className={`cursor-pointer -rotate-180 prev-ele-${index} active:scale-90`}>
                  <CiCircleChevRight size={40} color="white" />
                </div>
                <div className={`cursor-pointer next-ele-${index} active:scale-90 `}>
                  <CiCircleChevRight size={40} color="white" />
                </div>
              </div>
            </div>

            {/* right side rooms details **** */}
            <div className="md:w-[40%] flex items-center bg-white">
              <div className="flex flex-col gap-3 md:items-start p-4">
                {item.title && (
                  <FormattedText className="text-3xl capitalize font-roboto text-green-primary">
                    {item.title}
                  </FormattedText>
                )}

                {item.subtitle && (
                  <ul className="list-disc ml-4 space-y-3">
                    {item?.subtitle?.map((item, index) => (
                      <li className="text-sm font-roboto" key={index}>
                        {item}
                      </li>
                    ))}
                  </ul>
                  // <FormattedText className="text-sm font-roboto">{item.subtitle}</FormattedText>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Activities;
