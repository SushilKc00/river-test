import React from 'react';
import VaccationByRiver from '@repo/ui/components/VaccationByRiver';
import About from '@repo/ui/components/About';

import HomeBannerImg1 from '../public/images/Hero1.jpeg';
import HomeBannerImg2 from '../public/images/Hero2.jpeg';
import HomeBannerImg3 from '../public/images/room1.jpeg';

import Staywithus from '@repo/ui/components/Staywithus';
import InclusiveExperience from '@repo/ui/components/InclusiveExperience';
import Gallery from '@repo/ui/components/Gallery';
import PhotoGallery from '@repo/ui/components/PhotoGallery';
import Activities from '@repo/ui/components/Activities';

const MayodiaPass1 = '/images/MayodiaPass1.jpg';
const MayodiaPass2 = '/images/MayodiaPass2.webp';
const MayodiaPass3 = '/images/MayodiaPass3.jpg';

const Arch1 = '/images/Arch1.jpg';
const Arch2 = '/images/Arch2.jpg';
const Arch3 = '/images/Arch3.cms';

const Bird1 = '/images/Bird1.jpg';
const Bird2 = '/images/Bird2.webp';

const rafting1 = '/images/rafting1.jpg';
const rafting2 = '/images/rafting2.jpg';
const rafting3 = '/images/rafting3.jpg';

const Golden1 = '/images/Golden1.jpg';
const Golden2 = '/images/Golden2.jpg';
const Golden3 = '/images/Golden3.jpg';

const parshuram1 = '/images/Parshuram1.jpg';
const parshuram2 = '/images/Parshuram2.webp';

const Mehao1 = '/images/Mehao1.jpg';
const Mehao2 = '/images/Mehao2.jpg';

const Room1 = '/images/room1.jpeg';
const Room2 = '/images/room2.jpeg';

const about = '/images/about.png';

const gallery1 = '/images/gallery1.png';
const gallery2 = '/images/gallery2.png';
const gallery3 = '/images/gallery3.png';
// const gallery4 = '/images/gallery4.png';
const gallery5 = '/images/gallery5.png';

const luxuryCottage = '/images/gallery3.png';

const VacationData = {
  title: 'Vacation by the River',
  subtitle: `Riverside Retreat Near Dambuk's Oranges and Music`,
  link: {
    label: 'book now',
    href: '/contact',
  },
  images: [
    {
      src: HomeBannerImg1,
      alt: 'Document1',
    },
    {
      src: HomeBannerImg2,
      alt: 'Document1',
    },
    {
      src: HomeBannerImg3,
      alt: 'Document1',
    },
  ],
};

const AboutData = {
  title:
    'Experience a retreat like no other, where every moment is infused with the magic of nature',
  items: {
    title: 'about',
    subtitle: 'welcome to Bomjir River Camp',
    description:
      'Welcome to Bomjir River Camp, perched on the embankment of the majestic River Sikang. Here, the soothing sounds of the river fill your room, and each morning greets you with a stunning sunrise. Located near Dambuk, known for its delicious oranges and the vibrant Dambuk Orange Music Festival, our camp offers a unique blend of natural beauty and cultural charm.',
    image: {
      src: luxuryCottage,
      alt: 'Document1',
    },
  },
};

const stayWithUsData = {
  title: 'come as you are and we will take care of the rest',
  subtitle: 'stay with us',
  link: {
    label: 'view all rooms',
    href: '/rooms',
  },
  items: [
    {
      title: 'Luxury Swiss Tents',
      subtitle: [
        'Stay in our Luxury Swiss Tents, where you can enjoy the ultimate glamping experience.',
        ' These tents offer comfort and style, providing you with a unique way to connect with nature while enjoying modern amenities',
      ],
      image: [
        {
          src: Room1,
          alt: 'room1',
        },
        {
          src: Room1,
          alt: 'room1',
        },
      ],
      price: '4000',
      accomondation: {
        wifi: false,
        shower: true,
        bathtub: false,
        towel: true,
        ac: false,
        balcony: false,
      },
      link: {
        label: 'View room',
        href: '/rooms',
      },
    },
    {
      title: 'River-View Cottages',
      subtitle: [
        'Our River-View Cottages provide a tranquil retreat with stunning views of the River Sikang.',
        'Wake up to the soothing sound of the river and the beauty of the sunrise, making your stay both relaxing and memorable',
      ],
      image: [
        {
          src: Room2,
          alt: 'room1',
        },
        {
          src: Room2,
          alt: 'room1',
        },
      ],
      price: '4000',
      accomondation: {
        wifi: false,
        shower: true,
        bathtub: false,
        towel: true,
        ac: false,
        balcony: false,
      },
      link: {
        label: 'View room',
        href: '/rooms',
      },
    },
  ],
};

const galleryData = {
  title: 'Gallery',
  subtitle: 'A Pictorial Escape for you',
  description: `Immerse yourself in the captivating sights of Bomjir River Camp. Our gallery showcases the serene riverside views, cozy accommodations, and the vibrant life near Dambuk, offering you a glimpse of the unforgettable experiences that await.`,
  image: {
    src: about,
    alt: 'document1',
  },
};

const photoGalleryData = {
  Images: [
    {
      src: gallery1,
      alt: 'Document',
    },
    {
      src: gallery2,
      alt: 'Document',
    },
    {
      src: gallery3,
      alt: 'Document',
    },
    // {
    //   src: gallery4,
    //   alt: 'Document',
    // },
    {
      src: gallery5,
      alt: 'Document',
    },
  ],
};

const ActivityData = {
  title: 'Nearby Activities',
  items: [
    {
      title: '1. Mayudia Pass:',
      subtitle: [
        '(2,655 metres (8,711 ft) elevation), 56 km from Roing in Dibang Valley district of Arunachal Pradesh state in India, is a popular local tourist attraction due to the November to March winter snow fall which is heaviest in January and February.',

        'Mayodia" is the combination of two Idu-Mishmi words - "Mayu" which is the name of the mountain and "Dia" meaning "peak of the mountain", thereby meaning "Peak of the Mayu Mountain".',
      ],

      image: [
        {
          src: MayodiaPass1,
          alt: 'room1',
        },
        {
          src: MayodiaPass2,
          alt: 'room2',
        },
        {
          src: MayodiaPass3,
          alt: 'room3',
        },
      ],

      link: {
        label: 'Enquire now',
        href: '/contact',
      },
    },
    {
      title: '2. Archaeological Sites:',
      subtitle: [
        'Roing and its vicinity are home to several archaeological sites, including Bhishmaknagar, an ancient fortress dating back to the 6th century BC.',
        'Explore the ruins and learn about the historical significance of these sites.',
      ],

      image: [
        {
          src: Arch1,
          alt: 'Document1',
        },
        {
          src: Arch2,
          alt: 'Document2',
        },
        {
          src: Arch3,
          alt: 'Document3',
        },
      ],

      link: {
        label: 'Enquire now',
        href: '/contact',
      },
    },
    {
      title: '3. Bird Watching: ',
      subtitle: [
        'The diverse ecosystems around Roing support a rich variety of birdlife, making it a paradise for bird watchers.',
        'Grab your binoculars and head to locations like Mayodia Pass, Mehao Lake, and Dibang Valley for bird watching excursions.',
      ],

      image: [
        {
          src: Bird1,
          alt: 'room1',
        },
        {
          src: Bird2,
          alt: 'room1',
        },
      ],

      link: {
        label: 'Enquire now',
        href: '/contact',
      },
    },
    {
      title: '4. River Rafting: ',
      subtitle: [
        'The rivers around Roing, particularly the Dibang and the Sikang, offer thrilling opportunities for river rafting.',
        'Experienced guides can take you on exhilarating rafting expeditions, providing a unique perspective of the pristine landscapes and rugged terrain',
      ],

      image: [
        {
          src: rafting1,
          alt: 'Document1',
        },
        {
          src: rafting2,
          alt: 'Document2',
        },

        {
          src: rafting3,
          alt: 'Document3',
        },
      ],

      link: {
        label: 'Enquire now',
        href: '/contact',
      },
    },
    {
      title: '5. The Golden Pagoda,',
      subtitle: [
        'Namsai also known as Kongmu Kham, in the Tai-Khamti language, is a Burmese-style Buddhist temple that was opened in 2010.',
        'It is located on a 20 hectares (49 acres) complex in Namsai.',
        'The World Tripiṭaka Foundation is currently developing Kongmu Kham as the first international Tripiṭaka center in India.',
      ],

      image: [
        {
          src: Golden1,
          alt: 'Document1',
        },
        {
          src: Golden2,
          alt: 'Document2',
        },
        {
          src: Golden3,
          alt: 'Document3',
        },
      ],

      link: {
        label: 'Enquire now',
        href: '/contact',
      },
    },
    {
      title: '6. Parshuram Kund ',
      subtitle: [
        'was established as a Hindu pilgrimage site in 1970 by hindu missionaries from assam.',
        'It is situated on the Brahmaputra plateau in the lower reaches of the Lohit River in Lohit district.',
        'Dedicated to the deity Parashurama, the popular site attracts pilgrims from Nepal, from across India. ',
        'Devotees and sadhus take a holy dip in its water each year on the occasion of Makar Sankranti, in the month of January.',
      ],

      image: [
        {
          src: parshuram1,
          alt: 'Document1',
        },
        {
          src: parshuram2,
          alt: 'Document2',
        },

        // {
        //   src: bambooroom3,
        //   alt: 'room3',
        // },
      ],

      link: {
        label: 'Enquire now',
        href: '/contact',
      },
    },
    {
      title: '7. Mehao lake ',
      subtitle: [
        'Mehao Lake, located in the Lower Dibang Valley district of Arunachal Pradesh, is a picturesque natural lake surrounded by lush green forests and mountains. It is situated at an altitude of 3000 feet above sea level and covers an area of about four sq km. The lake is formed by a natural dam made by the Dibang River.',

        'The crystal-clear waters of Mehao Lake reflect the surrounding natural beauty and offer a serene atmosphere to visitors. The lake is home to various fish species and is a popular fishing spot. Visitors can enjoy boating on the lake and take in the stunning views of the surrounding hills.',
      ],

      image: [
        {
          src: Mehao1,
          alt: 'Document1',
        },
        {
          src: Mehao2,
          alt: 'Document2',
        },

        // {
        //   src: bambooroom3,
        //   alt: 'room3',
        // },
      ],

      link: {
        label: 'Enquire now',
        href: '/contact',
      },
    },
  ],
};

const HomePage = () => {
  return (
    <div>
      <VaccationByRiver {...VacationData} />

      <div id="about-section">
        <About {...AboutData} />
      </div>

      <div id="gallery-section">
        <Gallery {...galleryData} />
      </div>

      <div className="py-6">
        <div className="max-w-7xl mx-auto px-6">
          <PhotoGallery {...photoGalleryData} />
        </div>
      </div>

      <div className="pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <Activities {...ActivityData} />
        </div>
      </div>

      <div className="py-20 px-6 bg-primarygreen">
        <div className="max-w-7xl mx-auto">
          <InclusiveExperience />
        </div>
      </div>

      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <Staywithus {...stayWithUsData} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
