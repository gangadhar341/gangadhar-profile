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
      <div className='container'>
        <header className='w-[100vw] h-[100%]'>
          <nav className='py-[10px] px-[5%] w-[100vw] h-full'>
            <Header />
          </nav>
        </header>
        <section className='text-white flex flex-wrap w-[100vw] py-[10%] px-[5%] '>
          <aside className='flex basis-[35%] small-aside '>
            <Image
              src={Mypic2}
              alt='mypic2'
              width={400}
              height={80}
              className='mr-4 w-[100%] h-[100%] rounded-lg img'
              priority
            />
          </aside>
          <Section />
          <Projects />
        </section>
        <footer className='w-[100vw] h-[100%]'>
          <Contact />
        </footer>
      </div>
    </>
  );
}
