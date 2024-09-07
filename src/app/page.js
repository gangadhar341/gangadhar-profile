"use client";
import Image from "next/image";
import Mypic2 from "../../public/mypic2.jpg";
import Header from "@/components/Header";
import Section from "@/components/section";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
export default function Page() {
  return (
    <>
      <header className='w-[100%] h-[100vh] '>
        <nav className='py-[10px] px-[10%] '>
          <Header />
        </nav>
      </header>
      <section className='text-white flex flex-wrap py-[80px] '>
        <aside className='ml-10 flex basis-[35%] small-aside '>
          <Image
            src={Mypic2}
            alt='mypic2'
            width={400}
            height={80}
            className=' w-[400px] h-[500px] ml-[10px] rounded-lg img'
            priority
          />
        </aside>
        <Section />
      </section>
      <Projects />
      <footer className='w-[100dvw] h-[100%]'>
        <Contact />
      </footer>
    </>
  );
}
