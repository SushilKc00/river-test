import Footer, {
  FaceBook,
  Instagram,
  Mail,
  Mobile,
  Twitter,
  Whatsapp,
} from '@repo/ui/components/footer/footer';
import Navbar from '@repo/ui/components/header/Navbar';
import '@repo/ui/global.css';
import type { Metadata } from 'next';
import { Abhaya_Libre, Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-roboto',
});

const inter = Abhaya_Libre({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-abhaya',
});

export const metadata: Metadata = {
  title: 'Bomjir River Camp',
  description: 'Camp By The River',
  icons: {
    icon: [
      {
        url: '/images/favicon.ico', // /public path
        href: '/images/favicon.ico', // /public path
      },
    ],
  },
};

const Navbar_Links = [
  {
    label: 'about',
    href: '#about-section',
  },
  {
    label: 'gallery',
    href: '#gallery-section',
    // href: window.location.origin + '#gallery-section',
  },
  {
    label: 'rooms',
    href: '/rooms',
  },
];

const footerData = {
  link: {
    title: 'Menu',
    links: [
      {
        label: 'About',
        href: '/#about-section',
      },
      {
        label: 'Gallery',
        href: '/#gallery-section',
      },
      {
        label: 'Rooms',
        href: '/rooms',
      },
      {
        label: 'Contact',
        href: '/contact',
      },
    ],
  },
  contact: {
    title: 'contact',
    mobile: {
      label: '+919395357701',
      href: '+919395357701',
    },
    mail: {
      label: 'bomjirrivercamp@gmail.com',
      href: 'bomjirrivercamp@gmail.com',
    },
    address: {
      label: `Bomjir River Camp
      Near Sikang Bridge, 
      Dist: Lower Dibang Valley
      Roing - 792110
      Arunachal Pradesh`,
    },
  },
  social: {
    title: 'social',
    facebook: {
      href: 'https://www.facebook.com/profile.php?id=61557621182759&mibextid=LQQJ4d',
    },
    twitter: {
      href: '',
    },
    instagram: {
      href: 'https://www.instagram.com/bomjirrivercamp/',
    },
    whatsapp: {
      href: 'https://wa.me/+919395357701',
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <body className={`${inter.className} ${roboto.variable}`}>
        <Navbar links={Navbar_Links} />
        {children}
        <Footer {...footerData} />
      </body>
    </html>
  );
}
