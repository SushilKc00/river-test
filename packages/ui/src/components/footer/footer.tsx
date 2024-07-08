'use client';
import React, { useEffect, useState } from 'react';
import ReachOut from '../ReachOut';
import OfferAndPromotion from '../OfferAndPromotion';

import Image from 'next/image';
import FormattedText from '../formattedText';
import NavLink from '../header/NavLink';

import Link from 'next/link';

import { MdFlight } from 'react-icons/md';
import { FaTrain } from 'react-icons/fa';
import { FaCar } from 'react-icons/fa6';

const Logo = '/images/mountain sun-8.svg';
// const LogoBlack = '/images/mountain sun5.png';
const LogoBlack = '/images/mountain sun-7.svg';

import { usePathname } from 'next/navigation';

const offerAndPromotionData = {
  title: 'signup for special offers and promotion',
};

export interface footerProps {
  link: {
    title: string;
    links: {
      label: string;
      href: string;
    }[];
  };
  contact: {
    title: string;
    mobile: {
      label: string;
      href: string;
    };
    mail: {
      label: string;
      href: string;
    };
    address: {
      label: string;
    };
  };
  social: {
    title: string;
    facebook: {
      href: string;
    };
    twitter: {
      href: string;
    };
    instagram: {
      href: string;
    };
    whatsapp: {
      href: string;
    };
  };
}

function Footer({ link, contact, social }: footerProps) {
  const [bgcolor, setBgColor] = useState('');
  const [textColor, setTextColor] = useState('');
  const [footerLogo, setFooterLogo] = useState(Logo);
  const location = usePathname();

  useEffect(() => {
    if (window.location.pathname == '/contact') {
      setBgColor('#ffffff');
      setTextColor('#202020');
      setFooterLogo(Logo);
    } else if (window.location.pathname == '/') {
      setBgColor('#3f564f');
      setTextColor('#ffffff');
      setFooterLogo(LogoBlack);
    } else {
      setBgColor('#3f564f');
      setTextColor('#ffffff');
      setFooterLogo(LogoBlack);
    }
  }, [location]);

  return (
    <footer>
      {/* google map*** */}

      <div className="max-w-7xl mx-auto px-6 py-2 my-12">
        <span className="text-4xl font-semibold mt-4">
          Offering a unique experience for Travellers
        </span>
        <div className="text-md text-gray-600 my-4">
          Situated amidst lush greenery, serene surroundings and organic farm
        </div>

        <iframe
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=bomjiriver+(bomjiriver)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          width="100%"
          height="560"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="py-12 px-6 bg-lightblack">
        <div className="max-w-7xl mx-auto">
          {/* <OfferAndPromotion {...offerAndPromotionData} />
           */}
          <FormattedText className="text-white text-3xl text-center">How To Reach</FormattedText>
          <div className="flex lg:flex-row flex-col gap-3 justify-evenly mt-10">
            <div className="flex items-center gap-4">
              <FaTrain size={20} color="white" />
              <FormattedText className="text-white text-md font-roboto">
                Tsk railway st 120km
              </FormattedText>
            </div>

            <div className="flex items-center gap-4 ">
              <MdFlight size={25} color="white" />
              <FormattedText className="text-white text-md font-roboto">
                Tezu airport 77km
              </FormattedText>
            </div>

            <div className="flex items-center gap-4">
              <MdFlight size={25} color="white" />
              <FormattedText className="text-white text-md font-roboto">
                Dibrugarh airport 159km
              </FormattedText>
            </div>
          </div>
        </div>
      </div>

      <div
        className="py-12"
        style={{
          backgroundColor: bgcolor,
        }}
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-10 gap-6 px-6">
          <div className="lg:col-span-2 w-full flex items-start">
            <Link href={'/'} className="relative md:max-w-60 w-full aspect-[3/1] bg-black/0.5">
              <Image src={footerLogo} alt="Logo" className="object-cover" fill />
            </Link>
          </div>

          <div className="lg:col-span-2 flex lg:justify-center">
            <div>
              <div
                style={{
                  color: textColor,
                }}
              >
                {social.title && (
                  <FormattedText className={`text-md uppercase`}>{social.title}</FormattedText>
                )}
              </div>

              <div className="flex gap-2 mt-4">
                <Link
                  href={social.facebook.href}
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-lightblack flex justify-center items-center"
                >
                  <FaceBook />
                </Link>
                {/* <Link
                  href={social.twitter.href}
                  className="w-10 h-10 rounded-full bg-lightblack flex justify-center items-center"
                >
                  <Twitter />
                </Link> */}
                <Link
                  href={social.instagram.href}
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-lightblack flex justify-center items-center"
                >
                  <Instagram />
                </Link>
                <Link
                  href={social.whatsapp.href}
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-lightblack flex justify-center items-center"
                >
                  <Whatsapp />
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 flex lg:justify-center">
            <div>
              <div
                style={{
                  color: textColor,
                }}
              >
                {link.title && (
                  <FormattedText className={`text-md uppercase`}>{link.title}</FormattedText>
                )}
              </div>
              <ul className="mt-4 flex lg:flex-col flex-row gap-5">
                {link.links.map((item, index) => (
                  <li
                    style={{
                      color: textColor,
                    }}
                    key={index}
                  >
                    <NavLink
                      label={item.label}
                      href={item.href}
                      className={`text-sm uppercase font-roboto`}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-4 flex lg:justify-center lg:order-1 order-2">
            <div>
              <div
                style={{
                  color: textColor,
                }}
              >
                {contact.title && (
                  <FormattedText className={`text-md uppercase`}>{contact.title}</FormattedText>
                )}
              </div>
              <ul className="mt-4 flex flex-col gap-2">
                <li
                  className="flex gap-2 items-center"
                  style={{
                    color: textColor,
                  }}
                >
                  <Mobile color={textColor} />
                  <Link
                    href={`tel:${contact.mobile.href}`}
                    className={`text-sm font-roboto uppercase`}
                  >
                    {contact.mobile.label}
                  </Link>
                </li>
                <li
                  className="flex gap-2 items-center"
                  style={{
                    color: textColor,
                  }}
                >
                  <Mail color={textColor} />
                  <Link
                    href={`mailto:${contact.mail.href}`}
                    className={`text-sm font-roboto lowercase`}
                  >
                    {contact.mail.label}
                  </Link>
                </li>
                <li
                  className="flex gap-2"
                  style={{
                    color: textColor,
                  }}
                >
                  <div className="mt-1">
                    <Address color={textColor} />
                  </div>
                  <FormattedText className={`text-sm font-roboto capitalize`}>
                    {contact.address.label}
                  </FormattedText>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex justify-center"
        style={{
          backgroundColor: bgcolor,
        }}
      >
        <div
          className="pb-5 text-md font-roboto mt-2"
          style={{
            color: textColor,
          }}
        >
          © Developed by <Link href={'https://softexedge.in'}>SoftEXedge</Link> 2024
        </div>
      </div>
    </footer>
  );
}

export const FaceBook = () => {
  return (
    <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.85595 5.51099H0.166016V8.19983H2.85595V16.2664H6.89086V8.19983H9.33871L9.5808 5.51099H6.89086V4.39108C6.89086 3.74845 7.01998 3.49435 7.64135 3.49435H9.5808V0.133301H6.34749C3.92924 0.133301 2.85595 1.19808 2.85595 3.23623V5.51099Z"
        fill="white"
      />
    </svg>
  );
};

export const Twitter = () => {
  return (
    <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.7685 1.70271C16.1754 1.96622 15.5365 2.14368 14.8667 2.22434C15.5513 1.8143 16.0745 1.16628 16.3233 0.393243C15.6831 0.772369 14.9743 1.04798 14.2198 1.19586C13.6173 0.551884 12.7551 0.149902 11.8043 0.149902C9.66575 0.149902 8.09483 2.14368 8.57767 4.21409C5.82721 4.07561 3.38609 2.75808 1.7533 0.756236C0.885795 2.24317 1.30408 4.18989 2.77817 5.17535C2.23614 5.15787 1.7264 5.00864 1.27987 4.76127C1.24356 6.29391 2.34374 7.7284 3.93619 8.04838C3.47083 8.17475 2.95974 8.20433 2.44058 8.10484C2.86156 9.41969 4.08682 10.3756 5.53401 10.4025C4.13928 11.4941 2.38678 11.9822 0.628906 11.7751C2.09492 12.7149 3.83397 13.262 5.70347 13.262C11.8527 13.262 15.3254 8.07123 15.1156 3.4155C15.7638 2.95033 16.3247 2.36685 16.7685 1.70271Z"
        fill="white"
      />
    </svg>
  );
};

export const Instagram = () => {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.18505 0.133301C5.99275 0.133301 5.71972 0.142712 4.8576 0.183044C1.92556 0.317487 0.29815 1.94289 0.163653 4.87373C0.124649 5.73551 0.115234 6.00977 0.115234 8.19983C0.115234 10.3912 0.124649 10.6655 0.163653 11.5259C0.29815 14.4554 1.92556 16.0835 4.8576 16.218C5.71972 16.2569 5.99275 16.2664 8.18505 16.2664C10.3773 16.2664 10.6517 16.2569 11.5138 16.218C14.4405 16.0835 16.0746 14.4581 16.2064 11.5259C16.2454 10.6655 16.2549 10.3912 16.2549 8.19983C16.2549 6.00977 16.2454 5.73551 16.2064 4.87373C16.0746 1.94693 14.4459 0.316142 11.5138 0.183044C10.6517 0.142712 10.3773 0.133301 8.18505 0.133301ZM8.18426 1.58826C10.3389 1.58826 10.5944 1.59632 11.4458 1.63531C13.6341 1.7348 14.6536 2.77135 14.7544 4.94124C14.7921 5.79226 14.8002 6.04636 14.8002 8.20012C14.8002 10.3539 14.7921 10.6093 14.7544 11.459C14.6536 13.6276 13.6354 14.6668 11.4458 14.7663C10.5944 14.8039 10.3402 14.8133 8.18426 14.8133C6.02962 14.8133 5.77408 14.8053 4.92406 14.7663C2.73176 14.6654 1.71631 13.6249 1.61543 11.459C1.57777 10.6093 1.56836 10.3539 1.56836 8.20012C1.56836 6.04636 1.57777 5.79092 1.61543 4.94124C1.71496 2.77 2.73445 1.73345 4.92406 1.63397C5.77408 1.59498 6.02962 1.58826 8.18426 1.58826ZM4.04102 8.2C4.04102 5.9118 5.89707 4.05784 8.18486 4.05784C10.4727 4.05784 12.3287 5.91314 12.3287 8.2C12.3287 10.4882 10.4727 12.3422 8.18486 12.3422C5.89707 12.3422 4.04102 10.4882 4.04102 8.2ZM8.18408 10.8889C6.69789 10.8889 5.49414 9.68567 5.49414 8.20008C5.49414 6.71584 6.69789 5.51124 8.18408 5.51124C9.66893 5.51124 10.8754 6.71449 10.8754 8.20008C10.8754 9.68567 9.66893 10.8889 8.18408 10.8889ZM11.5234 3.89492C11.5234 3.35984 11.9579 2.92693 12.4918 2.92693C13.0285 2.92693 13.4615 3.35984 13.4615 3.89492C13.4615 4.43 13.0271 4.8629 12.4918 4.8629C11.9565 4.8629 11.5234 4.42865 11.5234 3.89492Z"
        fill="white"
      />
    </svg>
  );
};

export const Whatsapp = () => {
  return (
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.6 12.025C14.4 11.925 13.1 11.325 12.9 11.225C12.7 11.125 12.5 11.125 12.3 11.325C12.1 11.525 11.7 12.125 11.5 12.325C11.4 12.525 11.2 12.525 11 12.425C10.3 12.125 9.6 11.725 9 11.225C8.5 10.725 8 10.125 7.6 9.525C7.5 9.325 7.6 9.125 7.7 9.025C7.8 8.925 7.9 8.725 8.1 8.625C8.2 8.525 8.3 8.325 8.3 8.225C8.4 8.125 8.4 7.925 8.3 7.825C8.2 7.725 7.7 6.525 7.5 6.025C7.4 5.325 7.2 5.325 7 5.325H6.5C6.3 5.325 6 5.525 5.9 5.625C5.3 6.225 5 6.925 5 7.725C5.1 8.625 5.4 9.525 6 10.325C7.1 11.925 8.5 13.225 10.2 14.025C10.7 14.225 11.1 14.425 11.6 14.525C12.1 14.725 12.6 14.725 13.2 14.625C13.9 14.525 14.5 14.025 14.9 13.425C15.1 13.025 15.1 12.625 15 12.225L14.6 12.025ZM17.1 2.925C13.2 -0.975 6.9 -0.975 3 2.925C-0.2 6.125 -0.8 11.025 1.4 14.925L0 20.025L5.3 18.625C6.8 19.425 8.4 19.825 10 19.825C15.5 19.825 19.9 15.425 19.9 9.925C20 7.325 18.9 4.825 17.1 2.925ZM14.4 16.925C13.1 17.725 11.6 18.225 10 18.225C8.5 18.225 7.1 17.825 5.8 17.125L5.5 16.925L2.4 17.725L3.2 14.725L3 14.425C0.6 10.425 1.8 5.425 5.7 2.925C9.6 0.425 14.6 1.725 17 5.525C19.4 9.425 18.3 14.525 14.4 16.925Z"
        fill="white"
      />
    </svg>
  );
};

export const Mobile = ({ color = 'white' }: { color?: string }) => {
  return (
    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.5126 7.11746C10.3802 7.11746 10.2417 7.07531 10.1092 7.0452C9.84092 6.98608 9.57728 6.9076 9.32036 6.81036C9.04101 6.70873 8.73394 6.71401 8.45825 6.82518C8.18256 6.93634 7.95772 7.14554 7.827 7.41252L7.69452 7.68349C7.10802 7.35723 6.56907 6.95201 6.09277 6.47917C5.61994 6.00287 5.21471 5.46392 4.88845 4.87742L5.14136 4.70881C5.40834 4.5781 5.61754 4.35326 5.7287 4.07756C5.83987 3.80187 5.84515 3.4948 5.74352 3.21545C5.64791 2.95798 5.56946 2.69446 5.50868 2.42662C5.47857 2.29415 5.45448 2.15565 5.43642 2.01715C5.36329 1.593 5.14113 1.2089 4.80994 0.934007C4.47875 0.659119 4.06029 0.511512 3.62993 0.517769H1.82345C1.56393 0.515333 1.30694 0.568841 1.06997 0.674651C0.832992 0.780461 0.621598 0.936089 0.450175 1.13094C0.278751 1.32579 0.151324 1.55529 0.076568 1.80381C0.00181172 2.05234 -0.0185186 2.31405 0.0169612 2.57114C0.337756 5.09383 1.48987 7.43774 3.29131 9.23264C5.09275 11.0275 7.44084 12.1711 9.96467 12.4827H10.1935C10.6375 12.4834 11.0663 12.3205 11.3978 12.0251C11.5883 11.8547 11.7405 11.6458 11.8443 11.4123C11.9481 11.1787 12.0012 10.9258 12 10.6702V8.86373C11.9926 8.44546 11.8403 8.04271 11.569 7.72424C11.2978 7.40576 10.9244 7.1913 10.5126 7.11746ZM10.8137 10.7304C10.8136 10.8159 10.7953 10.9004 10.76 10.9783C10.7247 11.0562 10.6732 11.1256 10.609 11.1821C10.5417 11.2401 10.463 11.2835 10.378 11.3095C10.293 11.3354 10.2035 11.3433 10.1152 11.3326C7.86006 11.0434 5.76534 10.0117 4.16147 8.40024C2.5576 6.78874 1.53586 4.68915 1.25741 2.43264C1.24783 2.34444 1.25623 2.2552 1.2821 2.17034C1.30798 2.08547 1.35079 2.00673 1.40796 1.93887C1.46438 1.87464 1.53384 1.82316 1.61171 1.78786C1.68958 1.75256 1.77408 1.73424 1.85958 1.73414H3.66606C3.80609 1.73102 3.94283 1.77682 4.05274 1.86364C4.16264 1.95047 4.23884 2.07289 4.26822 2.20984C4.29231 2.37443 4.32242 2.53702 4.35855 2.69759C4.42811 3.01502 4.52069 3.32696 4.63554 3.63095L3.79252 4.02235C3.72043 4.05542 3.6556 4.10241 3.60173 4.1606C3.54785 4.2188 3.50601 4.28707 3.47859 4.36148C3.45117 4.4359 3.43873 4.515 3.44197 4.59424C3.4452 4.67348 3.46406 4.75129 3.49746 4.82323C4.36409 6.67954 5.85627 8.17173 7.71259 9.03836C7.85919 9.09859 8.02363 9.09859 8.17023 9.03836C8.24533 9.0115 8.31434 8.96998 8.37326 8.91623C8.43218 8.86248 8.47984 8.79756 8.51346 8.72523L8.8868 7.88221C9.1981 7.99353 9.51581 8.08603 9.83822 8.1592C9.9988 8.19533 10.1614 8.22544 10.326 8.24953C10.4629 8.2789 10.5853 8.35511 10.6722 8.46501C10.759 8.57492 10.8048 8.71166 10.8017 8.85169L10.8137 10.7304Z"
        fill={color}
      />
    </svg>
  );
};

export const Mail = ({ color = 'white' }: { color?: string }) => {
  return (
    <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15 2.2999C15 1.5299 14.37 0.899902 13.6 0.899902H2.4C1.63 0.899902 1 1.5299 1 2.2999M15 2.2999V10.6999C15 11.4699 14.37 12.0999 13.6 12.0999H2.4C1.63 12.0999 1 11.4699 1 10.6999V2.2999M15 2.2999L8 7.1999L1 2.2999"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Address = ({ color = 'white' }: { color?: string }) => {
  return (
    <svg width="20" height="20" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 3.85714C6.56832 3.85714 7.11337 4.08291 7.51523 4.48477C7.91709 4.88663 8.14286 5.43168 8.14286 6C8.14286 6.2814 8.08743 6.56005 7.97974 6.82004C7.87205 7.08002 7.71421 7.31625 7.51523 7.51523C7.31625 7.71421 7.08002 7.87205 6.82004 7.97974C6.56005 8.08743 6.2814 8.14286 6 8.14286C5.43168 8.14286 4.88663 7.91709 4.48477 7.51523C4.08291 7.11336 3.85714 6.56832 3.85714 6C3.85714 5.43168 4.08291 4.88663 4.48477 4.48477C4.88663 4.08291 5.43168 3.85714 6 3.85714ZM6 0C7.5913 0 9.11742 0.632141 10.2426 1.75736C11.3679 2.88258 12 4.4087 12 6C12 10.5 6 17.1429 6 17.1429C6 17.1429 0 10.5 0 6C0 4.4087 0.632141 2.88258 1.75736 1.75736C2.88258 0.632141 4.4087 0 6 0ZM6 1.71429C4.86336 1.71429 3.77327 2.16581 2.96954 2.96954C2.16582 3.77327 1.71429 4.86336 1.71429 6C1.71429 6.85714 1.71429 8.57143 6 14.3229C10.2857 8.57143 10.2857 6.85714 10.2857 6C10.2857 4.86336 9.83418 3.77327 9.03046 2.96954C8.22673 2.16581 7.13664 1.71429 6 1.71429Z"
        fill={color}
      />
    </svg>
  );
};

export default Footer;
