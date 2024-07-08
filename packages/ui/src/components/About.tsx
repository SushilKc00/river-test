'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import FormattedText from './formattedText';
import { motion } from 'framer-motion';

const Sprinkle = '/images/sprinkle.svg';
const Stone = '/images/stone.svg';

export interface AboutProps {
  title?: string;
  subtitle?: string;
  items: {
    title?: string;
    subtitle?: string;
    description: string;
    image: {
      src: string | StaticImageData;
      alt: string;
    };
  };
}

function About({ title, items }: AboutProps) {
  return (
    <section className="relative bg-primarygreen px-6 min-h-[1024px] py-12">
      <div className="max-w-7xl mx-auto">
        {title && (
          <motion.div
            initial={{ y: -300 }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
            }}
            viewport={{
              once: true,
            }}
          >
            <FormattedText className="text-center text-white text-3xl sm:w-[75%] capitalize mx-auto">
              {title}
            </FormattedText>
          </motion.div>
        )}

        <div className="mt-20 grid md:grid-cols-2">
          <motion.div
            initial={{ scale: 0.4, opacity: 0 }}
            whileInView={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              ease: 'easeOut',
            }}
            className="relative z-10 w-full mx-auto aspect-[4/4]"
          >
            <Image src={items.image.src} alt={items.image.alt} fill className="object-cover " />
          </motion.div>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              delay: 0.2,
              duration: 1,
            }}
            className="w-full relative z-20 "
          >
            <div className="w-full p-16 md:aspect-[4/4] aspect-[4/2] md:absolute -left-20 z-20 top-28 bg-white">
              {items.title && (
                <FormattedText className="text-3xl capitalize">{items.title}</FormattedText>
              )}
              {items.subtitle && (
                <FormattedText className="md:text-5xl text-md sm:mt-5 capitalize font-medium">
                  {items.subtitle}
                </FormattedText>
              )}

              <FormattedText className="text-sm sm:mt-5 font-roboto">
                {items.description}
              </FormattedText>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ x: -400, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: 'easeOut',
        }}
        className="absolute top-0 left-0 w-full z-20"
      >
        <div className="relative max-w-60 w-full aspect-[4/4]">
          <Image src={Sprinkle} alt="sprinkle" fill />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          // x: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.2,
          duration: 1,
          ease: 'easeOut',
        }}
        className="absolute bottom-0 right-0  max-w-80 w-full "
      >
        <div className="relative w-full aspect-[4/3]">
          <Image src={Stone} alt="stone" fill className="object-cover" />
        </div>
      </motion.div>
    </section>
  );
}

export default About;
