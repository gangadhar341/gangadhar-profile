"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Mypic from "../../public/my-pic.jpg";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import clsx from "clsx";
const navLinks = [
  {
    id: 1,
    name: "Home",
    linkId: "#home",
  },
  {
    id: 2,
    name: "About",
    linkId: "#about",
  },
  {
    id: 3,
    name: "Projects",
    linkId: "#projects",
  },
  {
    id: 4,
    name: "Contact",
    linkId: "#contact",
  },
];

export default function Header() {
  const [show, setShow] = useState(false);

  function menuClicked() {
    setShow(true);
  }
  function crossClicked() {
    setShow(false);
  }

  return (
    <>
      <div>
        <div className='flex align-center justify-between flex-wrap my-4'>
          <h1 className='text-5xl'>
            <span className='text-red-600'>G</span>angadhar
          </h1>
          <div className='flex z-50 relative'>
            <ul className='flex flex-row space-x-4 small-ul'>
              <IoClose className='cross' onClick={crossClicked} />
              {navLinks.map((link) => (
                <li key={link.id} id={link.linkId} className='m-4'>
                  <Link
                    href={link.linkId}
                    className='text-white text-xl li-underline'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            {show && (
              <ul
                className={clsx(
                  "fixed top-0 right-0 h-full w-[200px] bg-[#ff004f] flex flex-col p-5 transition-transform duration-300 z-50", // Add z-50 for layering
                  {
                    "translate-x-0": show,
                    "translate-x-full": !show,
                  }
                )}
              >
                <IoClose
                  className='head-icons cross'
                  onClick={() => setShow(false)}
                />
                {navLinks.map((link) => (
                  <React.Fragment key={link.id}>
                    <li
                      id={link.linkId}
                      className='relative text-white text-xl li-underline m-4'
                    >
                      <Link href={link.linkId}>{link.name}</Link>
                    </li>
                  </React.Fragment>
                ))}
              </ul>
            )}
            <IoIosMenu className='menu' onClick={menuClicked} />
          </div>
        </div>

        <div className='flex justify-between small-introduce'>
          <div className='flex flex-wrap flex-col bg-transparent mt-[20%] introduce'>
            <p className='text-3xl'>Web Developer</p>
            <h1 className='text-5xl mt-4'>
              Hi, I&apos;m <span className='text-red-600'>Gangadhar</span>
              <br /> from Andhra Pradesh
            </h1>
          </div>
          <div className='flex bg-transparent'>
            <Image
              src={Mypic}
              alt='mypic'
              width={600}
              height={100}
              className='ml-[10px] rounded-lg my-img'
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
}
