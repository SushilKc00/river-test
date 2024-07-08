import React from 'react';
import FormattedText from './formattedText';
import Image, { StaticImageData } from 'next/image';
const spiral = '/images/spiral.svg';

export interface galleryProps {
  title?: string;
  subtitle?: string;
  description?: string;
  image: {
    src: string | StaticImageData;
    alt: string;
  };
}

function Gallery({ title, subtitle, description, image }: galleryProps) {
  return (
    <section className="relative pt-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex md:flex-row flex-col gap-6 px-6">
          <div className="md:w-[60%]">
            <div className="max-w-2xl w-full relative aspect-[4/2.5] z-10 overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover hover:scale-125 duration-700"
              />
            </div>
          </div>
          <div className="md:w-[40%] flex flex-col gap-2">
            {title && (
              <FormattedText className="text-green-primary text-3xl">{title}</FormattedText>
            )}
            {subtitle && (
              <FormattedText className="md:text-5xl text-3xl font-medium text-green-primary">
                {subtitle}
              </FormattedText>
            )}
            {description && (
              <FormattedText className="text-sm font-roboto">{description}</FormattedText>
            )}
          </div>
        </div>
      </div>

      <div className="absolute -top-16 left-[40%]">
        <div className="relative max-w-60 aspect-[4/4] -z-10">
          <Image src={spiral} alt="sprinkle" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}

export default Gallery;
