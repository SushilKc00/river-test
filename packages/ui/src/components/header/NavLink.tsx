'use client';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface NavLinkProps {
  label: string;
  href: string;
  onClick?: () => void;
  className?: string;
}

const NavLink = ({ label, href, className, onClick }: NavLinkProps) => {
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const linkHref = origin + href;
  return (
    <Link
      href={linkHref}
      onClick={onClick}
      className={`hover:text-blue-primary transition duration-300 ease-in-out ${className || ''}`}
    >
      {label}
    </Link>
  );
};

export default NavLink;
