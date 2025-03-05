"use client";
import React from "react";
// import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ContactUsButton } from "./CallToActionButton";

const NavBar = () => {
  // const pathname = usePathname();

  const menuItems = [
    {
      content: "Home",
      link: "/",
    },
    {
      content: "works",
      link: "/works",
    },
    {
      content: "Pricing",
      link: "/pricing",
    },
    {
      content: "about",
      link: "/about",
    },
    {
      content: "Careers",
      link: "/careers",
    },
    {
      content: "Blogs",
      link: "/blogs",
    },
  ];
  return (
    <>
      <nav className="fixed top-8 z-20 my-5 w-full">
        <section className="mx-auto flex w-full max-w-7xl items-center px-5">
          <section className="flex w-full items-center justify-start">
            <div className="flex w-fit items-center gap-3">
              <Image
                src={"/logos/white-logo.png"}
                width={30}
                height={30}
                alt={"Webflexrr Labs."}
              />
              <div className="font-space-grotesk text-lg font-bold">
                Webflexrr Labs.
              </div>
            </div>
          </section>
          <section className="flex w-full items-center justify-center">
            <section className="flex w-fit gap-4 rounded-full bg-black px-6 py-3">
              {menuItems.map((navLink) => (
                <div key={navLink.content}>
                  <Link href={navLink.link}>{navLink.content}</Link>
                </div>
              ))}
            </section>
          </section>
          <section className="flex w-full items-center justify-end">
            <ContactUsButton />
          </section>
        </section>
      </nav>
    </>
  );
};

export default NavBar;
