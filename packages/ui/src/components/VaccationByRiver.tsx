'use client';
import React from 'react';

import Image, { StaticImageData } from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import FormattedText from './formattedText';
import Link from 'next/link';
import { motion } from 'framer-motion';

export interface VacationRiverProps {
  title?: string;
  subtitle?: string;
  link?: {
    label: string;
    href: string;
  };
  images: {
    src: string | StaticImageData;
    alt: string;
  }[];
}

function VaccationByRiver({ title, subtitle, link, images }: VacationRiverProps) {
  return (
    <section className="sm:mt-10 mt-0 md:py-28 py-24 bg-cream-primary">
      <div className="max-w-7xl px-6 mx-auto flex lg:flex-row flex-col-reverse lg:items-center relative">
        <div className="lg:w-[40%] flex flex-col">
          <motion.div
            initial={{ x: -1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
            }}
            className="relative lg:max-w-[700px] max-w-[280px] lg:top-0 -top-10 lg:left-20 left-3 z-10 bg-primarygreen/95 rounded-lg"
          >
            {title && (
              <FormattedText className="xl:text-6xl lg:text-5xl text-lg font-normal px-6 text-white uppercase">
                {title}
              </FormattedText>
            )}
          </motion.div>

          {subtitle && (
            <motion.div
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                duration: 0.6,
              }}
            >
              <FormattedText className="text-sm sm:ml-20 sm:mt-3 font-roboto">
                {subtitle}
              </FormattedText>
            </motion.div>
          )}

          <motion.div
            initial={{ x: -500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
            className="flex sm:ml-20 mt-6"
          >
            <Link
              href={`${link?.href}`}
              className="relative border-2 border-gray-secondary px-6 capitalize font-medium text-sm py-1 font-roboto inline-block active:scale-75 duration-150 before:content-[''] before:bg-primarygreen before:absolute before:w-0 before:h-full before:top-0 before:left-0 before:-z-10 hover:before:w-full before:duration-500 hover:text-white px-3 py-1"
            >
              {link?.label}
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.5,
            ease: 'easeOut',
          }}
          className="relative lg:w-[60%]"
        >
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            slidesPerView={1}
            autoplay={{
              delay: 2000,
            }}
            pagination={{
              clickable: true,
              el: '',
            }}
            navigation={{
              nextEl: '.next-ele',
              prevEl: '.prev-ele',
            }}
            speed={1000}
            mousewheel={true}
            parallax={true}
            modules={[Pagination, Autoplay, Navigation]}
            className="w-full"
          >
            {images.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full aspect-[4/2.6]">
                  <Image src={item.src} alt={item.alt} fill className="object-cover rounded-3xl" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="absolute w-full -bottom-20 -right-0 flex flex-col gap-2 items-end">
            <div className="rotate-180 cursor-pointer next-ele">
              <RightArrow />
            </div>
            <div className="cursor-pointer prev-ele">
              <RightArrow />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export const RightArrow = () => {
  return (
    <svg width="20" height="16" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 4C0 3.75454 0.196675 3.55556 0.439285 3.55556L10.8002 3.55556L8.03579 0.758715C7.86424 0.585149 7.86424 0.303741 8.03579 0.130176C8.20735 -0.0433912 8.48549 -0.0433912 8.65704 0.130176L12.1713 3.68573C12.3429 3.8593 12.3429 4.1407 12.1713 4.31427L8.65704 7.86983C8.48549 8.04339 8.20735 8.04339 8.03579 7.86983C7.86424 7.69626 7.86424 7.41485 8.03579 7.24129L10.8002 4.44444L0.439285 4.44444C0.196675 4.44444 0 4.24546 0 4Z"
        fill="#405751"
      />
    </svg>
  );
};

export default VaccationByRiver;
