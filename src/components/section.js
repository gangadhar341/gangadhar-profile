"use client";
import Link from "next/link";
import { useState } from "react";
export default function Section() {
  const [isSkills, setSkills] = useState(true);
  const [isExperience, setExperience] = useState(false);
  const [isEducation, setEducation] = useState(false);
  const [isCertificates, setCertificates] = useState(false);
  const [isAchievment, setAchievment] = useState(false);

  function skillsClicked() {
    setSkills(true);
    setExperience(false);
    setEducation(false);
    setCertificates(false);
    setAchievment(false);
  }

  function experienceClicked() {
    setExperience(true);
    setSkills(false);
    setEducation(false);
    setCertificates(false);
    setAchievment(false);
  }

  function educationClicked() {
    setEducation(true);
    setSkills(false);
    setExperience(false);
    setCertificates(false);
    setAchievment(false);
  }

  function certificateClicked() {
    setCertificates(true);
    setEducation(false);
    setSkills(false);
    setExperience(false);
    setAchievment(false);
  }
  function achievmentClicked() {
    setAchievment(true);
    setCertificates(false);
    setEducation(false);
    setSkills(false);
    setExperience(false);
  }

  return (
    <>
      <div className='flex flex-col basis-[60%] '>
        <div>
          <h1 id='about' className='text-5xl small-about-h1'>
            About Me
          </h1>
          <p className='mt-4 text-lg leading-5 small-about-p'>
            I am <span className='text-red-600'>Gangadhar</span>, a{" "}
            <span className='text-red-600'>B.Tech </span> graduate in{" "}
            <span className='text-red-600'>
              Computer Science and Engineering{" "}
            </span>
            from{" "}
            <span className='text-red-600'> Bapatla Engineering College</span>,
            batch 2023. I have gained practical experience through internships
            in web development and engineering. My first internship was at{" "}
            <u>Exposys Data Labs</u>, where I worked as a{" "}
            <span className='text-red-600'>Web Developer Intern </span>, honing
            my skills in building and maintaining web applications. Currently, I
            am an
            <span className='text-red-600'> Engineering Intern</span> at{" "}
            <u>Sense Semi Conductors and IT Pvt. Ltd.,</u> where I am further
            developing my technical expertise. I am now actively seeking
            full-time opportunities where I can contribute my skills and grow as
            a professional.
          </p>
        </div>
        <div className='flex samll-about-buttons'>
          <button
            className={isSkills ? "underline" : ""}
            onClick={skillsClicked}
          >
            Skills
          </button>
          <button
            className={isExperience ? "underline" : ""}
            onClick={experienceClicked}
          >
            Experience
          </button>
          <button
            className={isEducation ? " underline" : ""}
            onClick={educationClicked}
          >
            Education
          </button>
          <button
            className={isCertificates ? " underline" : ""}
            onClick={certificateClicked}
          >
            Certificates
          </button>
          <button
            className={isAchievment ? " underline" : ""}
            onClick={achievmentClicked}
          >
            Achievements
          </button>
        </div>
        {isSkills && (
          <div className='small-content'>
            <ul>
              <li>
                <span className='text-red-600'>Web Development</span>
                <br /> MERN STACK, Next.Js
              </li>
              <li>
                <span className='text-red-600'>Programming Languages</span>
                <br /> Python, Java, JavaScript
              </li>
              <li>
                <span className='text-red-600'>Data Base</span>
                <br /> SQL, MongoDB
              </li>
              <li>
                <span className='text-red-600'>Others</span>
                <br /> React, Next.JS, Angular, TypeScript, Linux, DSA, OOPS, OS
              </li>
            </ul>
          </div>
        )}
        {isExperience && (
          <div className='small-content'>
            <ul>
              <li>
                <span className='text-red-600 text-lg'>
                  Sense SemiConductors & pvt ltd.,
                </span>
                <br />
                Engineering Intern [Current]
              </li>
              <li>
                <br />
                <span className='text-red-600 text-lg'>Exposys Data Labs</span>
                <br />
                Web Developer from Nov 2022 to Dec 2022
              </li>
            </ul>
          </div>
        )}
        {isEducation && (
          <div className='small-content'>
            <ul>
              <li>
                <span className='text-red-600 text-lg'>
                  Bapatla Engineering College
                </span>
                <br />
                Computer Science and Engineering
                <br /> CGP : 7.3
              </li>

              <li>
                <span className='text-red-600 text-lg'>
                  Sri Chaitanya Jr.College
                </span>
                <br />
                MPC <br />
                CGP : 9.6
              </li>

              <li>
                <span className='text-red-600 text-lg'>ZPHS</span>
                <br />
                10TH <br /> CGP : 9.3
              </li>
            </ul>
          </div>
        )}
        {isCertificates && (
          <div className='small-content'>
            <ul>
              <li>
                I have passed the HackerRank Skills Certification Exam in
                <Link
                  href='https://www.hackerrank.com/certificates/ea811ac3e778'
                  className='text-red-600'
                >
                  &nbsp;Python
                </Link>
                .
              </li>

              <li>
                I have passed the HackerRank Skills Certification Exam in
                <Link
                  href='https://www.hackerrank.com/certificates/132f7b6cfbc3'
                  className='text-red-600'
                >
                  &nbsp;Javascript
                </Link>
                .
              </li>

              <li>
                I have passed the HackerRank Skills Certification Exam in
                <Link
                  href='https://www.hackerrank.com/certificates/bd181aab7377'
                  className='text-red-600'
                >
                  &nbsp;Java
                </Link>
                .
              </li>
              <li>
                I have successfully completed my Udemy course on
                <Link
                  href='https://www.udemy.com/certificate/UC-c1e61019-5e97-4334-a417-cb6939212bd9/'
                  className='text-red-600'
                >
                  &nbsp;Python
                </Link>{" "}
                with 92%.
              </li>
              <li>
                I have successfully completed my Udemy course on
                <Link
                  href='https://www.udemy.com/certificate/UC-85cdd9e6-8b4e-4759-9830-1037308c1f40/'
                  className='text-red-600'
                >
                  &nbsp;HTML & CSS
                </Link>{" "}
                .
              </li>
            </ul>
          </div>
        )}
        {isAchievment && (
          <div className='small-content'>
            <ul>
              <li>
                I secured 75% in <span className='text-red-600'>JEE Mains</span>
                .
              </li>
              <br />
              <li>
                I secured 76% in <span className='text-red-600'>TCS NQT</span>.
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
