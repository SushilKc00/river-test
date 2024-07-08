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
import { IoWifiOutline } from 'react-icons/io5';
import { PiShower, PiTowelBold, PiTowelLight } from 'react-icons/pi';
import { LuBath } from 'react-icons/lu';
import { TbAirConditioning } from 'react-icons/tb';
import { FaShower, FaWifi } from 'react-icons/fa';
import { MdBalcony } from 'react-icons/md';

export interface StayWithUsRoomsProps {
  title?: string;
  subtitle?: string;
  items: {
    title?: string;
    subtitle?: string[];
    price?: string;
    differentPrice?: string[];
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
    link: {
      label: string;
      href: string;
    };
  }[];
}

function StayWithUsRooms({ title, items }: StayWithUsRoomsProps) {
  const [arrowColor, setArrowColor] = useState('#405751');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section>
      {title && (
        <FormattedText className="sm:text-6xl text-3xl text-center text-green-primary">
          {title}
        </FormattedText>
      )}

      <div className="flex flex-col gap-16 sm:mt-8 mt-4">
        {items.map((item, index) => (
          <div
            className={`flex gap-6 items-center  ${index % 2 == 0 ? 'md:flex-row flex-col' : 'md:flex-row-reverse flex-col'}`}
          >
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

              <div className="flex justify-between gap-2 mt-3 absolute top-[50%] -translate-y-[50%] left-0 z-30 w-full px-4">
                <div className={`cursor-pointer -rotate-180 prev-ele-${index} active:scale-90`}>
                  <CiCircleChevRight size={40} color="white" />
                </div>
                <div className={`cursor-pointer next-ele-${index} active:scale-90`}>
                  <CiCircleChevRight size={40} color="white" />
                </div>
              </div>
            </div>

            <div className="md:w-[40%] flex flex-col gap-3 md:items-start items-center px-6">
              {item.title && (
                <FormattedText className="text-3xl capitalize font-roboto text-green-primary">
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
              <div className="w-full h-[0.05rem] bg-gray-300 mt-2"></div>

              {/* price and icons */}
              <div className="flex flex-col gap-8">
                {/* icons */}
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

                {/* price and links */}

                <div className="flex flex-col gap-6 mt-2">
                  <div>
                    {item.price && (
                      <div className="text-md font-semibold font-roboto ml-2">Rs {item?.price}</div>
                    )}
                    {item.differentPrice && (
                      <ul className="list-disc text-sm font-roboto ml-4 mt-4">
                        {item.differentPrice?.map((item, index) => (
                          <li key={index} className="font-roboto text-sm">
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="flex">
                    <Link
                      href={`${item.link.href}`}
                      onMouseEnter={() => setArrowColor('white')}
                      onMouseLeave={() => setArrowColor('#405751')}
                      className="relative capitalize border-2 font-roboto border-gray-secondary px-5 py-2 flex items-center gap-2 before:content-[''] before:bg-primarygreen before:absolute before:w-0 before:h-full before:top-0 before:left-0 before:-z-10 hover:before:w-full before:duration-500 hover:text-white "
                    >
                      {item.link.label} <Arrow color={arrowColor} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export const Arrow = ({ color = '#405751' }: { color?: string }) => {
  return (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.64645 2.14645C4.84171 1.95118 5.15829 1.95118 5.35355 2.14645L11.3536 8.14645C11.5488 8.34171 11.5488 8.65829 11.3536 8.85355L5.35355 14.8536C5.15829 15.0488 4.84171 15.0488 4.64645 14.8536C4.45118 14.6583 4.45118 14.3417 4.64645 14.1464L10.2929 8.5L4.64645 2.85355C4.45118 2.65829 4.45118 2.34171 4.64645 2.14645Z"
        fill={color}
      />
    </svg>
  );
};

export default StayWithUsRooms;
