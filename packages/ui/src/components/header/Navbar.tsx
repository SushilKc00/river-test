'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import NavLink from './NavLink';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Cross2Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';

export interface NavbarLinksProps {
  links: {
    label: string;
    href: string;
  }[];
}

const logo = '/images/mountain sun-8.svg';
// const logoWhite = '/images/mountain sun5.png';
const logoWhite = '/images/mountain sun-7.svg';

function Navbar({ links }: NavbarLinksProps) {
  const pathName = usePathname();
  const [activeLink, setActiveLink] = useState('');
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrollBgColor, setScrollColor] = useState(false);
  const [textColor, setTextColor] = useState('');
  const [Logo, setLogo] = useState(logo);

  useEffect(() => {
    if (window.location.hash) {
      setActiveLink(window.location.hash);
    } else {
      setActiveLink(window.location.pathname);
    }

    if (window.location.pathname == '/contact') {
      setTextColor('#ffffff');
      setLogo(logoWhite);
    } else if (window.location.pathname == '/') {
      setTextColor('#253251');
      setLogo(logo);
    } else {
      setTextColor('#1b1b1b');
      setLogo(logo);
    }

    const changeColor = () => {
      if (window.scrollY >= 10) {
        setScrollColor(true);
        setTextColor('#191919');
        setLogo(logo);
      } else {
        setScrollColor(false);
        if (window.location.pathname == '/contact') {
          setTextColor('#ffffff');
          setLogo(logoWhite);
        }
      }
    };

    window.addEventListener('scroll', changeColor);

    return () => window.removeEventListener('scroll', changeColor);
  }, [pathName]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-30 py-2 ${scrollBgColor && 'shadow-md'}`}
      style={{
        backgroundColor: scrollBgColor ? 'white' : 'transparent',
        // transition: 'all 0.2s',
      }}
    >
      <nav className="flex items-center max-w-7xl mx-auto justify-between px-6">
        <Link
          href={'/'}
          className="relative max-w-52 w-full aspect-[4/1.4] "
          onClick={() => setActiveLink('')}
        >
          <Image src={Logo} alt="logo" fill className="object-cover" />
        </Link>

        <ul className="hidden md:flex gap-5 items-center">
          {links.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                setActiveLink(item.href);
              }}
              style={{
                color: textColor,
              }}
            >
              <NavLink
                label={item.label}
                href={item.href}
                className={` ${activeLink == item.href && 'bg-primarygreen text-white'} relative capitalize text-sm font-roboto duration-300  inline-block before:content-[''] before:bg-primarygreen before:absolute before:w-0 before:h-full before:top-0 before:left-0 before:-z-10 hover:before:w-full before:duration-500 hover:text-white px-3 py-1`}
              />
            </li>
          ))}
          <li
            style={{
              color: textColor,
            }}
          >
            <Link
              href={'/contact'}
              className="relative capitalize text-sm border-2 px-4 py-2 font-roboto inline-block  duration-150 before:content-[''] before:bg-primarygreen before:absolute before:w-0 before:h-full before:top-0 before:left-0 before:-z-10 hover:before:w-full before:duration-500 hover:text-white"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Ham burger Menu**** */}
        <div className="md:hidden z-10">
          {isNavOpen ? (
            <div className="text-white transition-transform duration-500 ease-in-out transform delay rotate-180 scale-150">
              <Cross2Icon height={30} width={30} onClick={() => setIsNavOpen(false)} />
            </div>
          ) : (
            <div className="transition-transform duration-500 ease-in-out transform rotate-0 scale-100">
              <HamburgerMenuIcon height={30} width={30} onClick={() => setIsNavOpen(true)} />
            </div>
          )}
          {/* <AiOutlineMenu size={30} /> */}
        </div>

        {/* Mobile Nav***** */}

        <div
          className="fixed top-0 right-0 w-[300px] bg-gray-700 h-screen p-6 transition-all duration-500 "
          style={{
            right: isNavOpen ? '0' : '-100%',
          }}
        >
          <ul className="flex flex-col gap-5 items-center justify-center mt-32">
            {links.map((item, index) => (
              <li key={index}>
                <NavLink
                  label={item.label}
                  href={item.href}
                  className="capitalize text-md text-white px-4 py-1"
                  onClick={() => setIsNavOpen(false)}
                />
              </li>
            ))}

            <li onClick={() => setIsNavOpen(false)}>
              <Link
                href={'/contact'}
                className="capitalize text-md border-2 border-gray-secondary px-4 py-2 text-white"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
