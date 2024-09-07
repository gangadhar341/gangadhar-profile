"use client";
import Image from "next/image";
import ChatPic from "../../public/messages.png";
import Profile from "../../public/profile.png";
import Driver from "../../public/driver.jpg";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

export default function Projects() {
  return (
    <>
      <div className='text-white flex flex-col flex-wrap py-[80px] ml-[60px] small-projects'>
        <h1 id='projects' className='text-5xl'>
          Projects
        </h1>
        <div className='flex flex-wrap justify-around items-center mt-[30px] small-projects-container'>
          <div className='relative rounded-lg overflow-hidden group block small-project-div'>
            <Image
              src={Driver}
              alt='Driver'
              width={300}
              height={80}
              className='w-[300px] h-[300px] object-cover rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-110 small-project-img '
              priority
            />
            <div className='absolute inset-0 flex items-center justify-center flex-col w-full h-full  bg-gradient text-white text-center overflow-hidden transition-all duration-500 ease-in-out opacity-0 hover:opacity-100 small-project-p'>
              <p className='p-4'>
                The Project was to detect whether the driver was drowsy or not.
                If he is drowsy an alarm will ring.
              </p>
              <Link
                href='https://github.com/gangadhar341/drowsiness-detection'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-1'
              >
                See
                <FaExternalLinkAlt />
              </Link>
            </div>
          </div>
          <div className='ml-[10px] relative overflow-hidden group rounded-lg small-project-div'>
            <Image
              src={Profile}
              alt='Profile'
              width={300}
              height={120}
              className=' w-[300px] h-[300px]  rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-110 small-project-img'
              priority
            />
            <div className='absolute inset-0 flex items-center justify-center flex-col w-full h-full  bg-gradient text-white text-center overflow-hidden transition-all duration-500 ease-in-out opacity-0 hover:opacity-100 small-project-p'>
              <p className='p-4'>
                I created a responsive website by using React Js and Bootstrap
                5.The site name is myprofile .
              </p>
              <Link
                href='https://gangadhar-profile.netlify.app/'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-1'
              >
                See
                <FaExternalLinkAlt />
              </Link>
            </div>
          </div>
          <div className='ml-[10px] relative overflow-hidden group rounded-lg small-project-div'>
            <Image
              src={ChatPic}
              alt='ChatPic'
              width={400}
              height={400}
              className=' w-[300p] h-[300px] object-fill rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-110 small-project-img'
              priority
            />
            <div className='absolute inset-0 flex items-center justify-center flex-col w-full h-full  bg-gradient text-white text-center overflow-hidden transition-all duration-500 ease-in-out opacity-0 hover:opacity-100 small-project-p'>
              <p className='p-4'>
                ChatWithMe is a Full Stack Chatting App. Uses Socket.io for real
                time communication and stores user details in encrypted format
                in Mongo DB Database.
              </p>
              <Link
                href='https://chatwithme341.netlify.app/'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-1'
              >
                See
                <FaExternalLinkAlt />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
