'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import PhotoAlbum, { Photo, RenderPhotoProps } from 'react-photo-album';

export interface PhotoGalleryProps {
  Images: {
    src: string;
    alt: string;
  }[];
}

function PhotoGallery({ Images }: PhotoGalleryProps) {
  const generateRandomIdInRange = (min: number, max: number) => {
    const randomId = Math.floor(Math.random() * (max - min) + min);
    return randomId;
  };

  const randomizedArr = [];
  const indexCompleted: number[] = [];
  let randomIndex: number | undefined = undefined;

  if (Images?.length > 0) {
    for (let i = 0; i < Images?.length; i++) {
      while (true) {
        randomIndex = generateRandomIdInRange(0, Images.length);
        if (indexCompleted.includes(randomIndex)) {
          continue;
        }
        randomizedArr.push(Images[randomIndex]!);
        indexCompleted.push(randomIndex);
        break;
      }
    }
  }

  return (
    <div className="mt-10 grid grid-cols-2 gap-4">
      {randomizedArr.length > 0 &&
        randomizedArr.map((item, index) => (
          <>
            {index == 0 ? (
              <div className={`row-span-2 w-full`}>
                <div className="relative w-full aspect-[4/6.115] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={`${item.alt}`}
                    fill
                    className="object-cover w-full h-full hover:scale-125 duration-500"
                  />
                </div>
              </div>
            ) : (
              <div className={`w-full`}>
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={`${item.alt}`}
                    fill
                    className="object-cover h-full hover:scale-125 duration-500"
                  />
                </div>
              </div>
            )}
          </>
        ))}
    </div>
  );
}

export function NextJsImage({
  photo,
  imageProps: { alt, title, sizes, className, onClick },
  wrapperStyle,
}: RenderPhotoProps) {
  return (
    <div style={{ ...wrapperStyle, position: 'relative' }}>
      <Image
        fill
        src={photo}
        placeholder={'blurDataURL' in photo ? 'blur' : undefined}
        {...{ alt, title, sizes, className, onClick }}
      />
    </div>
  );
}

export default PhotoGallery;
