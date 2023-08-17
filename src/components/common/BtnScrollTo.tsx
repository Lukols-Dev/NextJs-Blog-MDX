"use client";

import Link from "next/link";

interface BtnScrollToProps {
  id: string;
  href: string;
  text: string;
}

export const BtnScrollTo = ({ id, href, text }: BtnScrollToProps) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const offset = 80;

    const targetElement = document.querySelector(`${href}`) as HTMLElement;

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <Link
      key={id}
      href={href}
      className="hover:text-violet-600 font-semibold"
      onClick={(e) => handleScroll(e)}
    >
      {text}
    </Link>
  );
};
