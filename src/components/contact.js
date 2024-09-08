import Link from "next/link";
import { GoMail } from "react-icons/go";
import { FaPhone } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { useRef, useState } from "react";
/* import CV from "../../public/Gangadhar.pdf"; */
export default function Contact() {
  const formRef = useRef(null);
  const [sent, setSent] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const scriptURL =
      " https://script.google.com/macros/s/AKfycbzHMyRVq86uqotS3c8_ocrvNejPDJSV0n0uIdlWU4HfhBcnUZhxMThw2D8a1XPwk-Rnbg/exec";
    const form = formRef.current;

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: new FormData(form),
      });
      console.log("Success!", response);
      setSent(true);
      setTimeout(() => {
        setSent(false);
      }, 5000);
      form.reset();
    } catch (error) {
      console.error("Error!", error.message);
      setSent(false);
    }
  };
  return (
    <>
      <div className='text-white flex flex-col flex-wrap py-[5%] px-[5%] small-contact-container'>
        <div className='flex w-[100%]  small-contact'>
          <div className='flex flex-col gap-6 basis-[35%] small-contact-row1'>
            <h1 id='contact' className='text-5xl w-[16rem] mb-4 '>
              Contact Me
            </h1>
            <div className='ml-[20px] flex flex-col justify-between'>
              <p className='flex items-center text-2xl mb-4 first-p'>
                <GoMail className='text-red-600 go-mail' /> &nbsp;
                <span className='inline-block'>gangadharampolu@gmail.com</span>
              </p>
              <p className='flex items-center text-2xl mb-4 phoneNo'>
                <FaPhone className='text-red-600' /> &nbsp; +91 9390707023
              </p>
              <div className='flex gap-6'>
                <Link
                  href='https://www.linkedin.com/in/gangadhar-ampolu'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-white'
                >
                  <FaLinkedin className='text-white-600 text-2xl' />
                </Link>
                <Link
                  href='https://github.com/gangadhar341'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-white'
                >
                  <FaGithub className='text-white-600 text-2xl' />
                </Link>
                <Link
                  href='https://leetcode.com/u/gangadhar341/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-white'
                >
                  <SiLeetcode className='text-white-600 text-2xl' />
                </Link>
              </div>
            </div>
            {/* <a
                href='/public/Gangadhar.pdf'
                download
                className='border-r-2 border-red-600'
              >
                Download CV
              </a> */}
          </div>
          <div className='flex ml-4 basis-[60%] w-[100%] justify-end small-contact-row2'>
            <form
              className='bg-transparent w-[100%] '
              name='submit-to-google-sheet'
              ref={formRef}
              onSubmit={handleSubmit}
            >
              <input
                type='text'
                name='Name'
                placeholder='Your Name'
                className='bg-transparent input '
                required
              />
              <input
                type='email'
                name='Email'
                placeholder='Your Email'
                className='bg-transparent input '
                required
              />
              <textarea
                name='Message'
                rows='6'
                placeholder='Your Message'
                className='bg-transparent input '
              ></textarea>
              <button type='submit' className='btn'>
                Submit
              </button>
            </form>
          </div>
        </div>

        {sent && (
          <span className='text-green-600 w-[100%] flex align-center justify-center'>
            Message Sent
          </span>
        )}
      </div>
      <div className='copyright w-[100vw] overflow-x-hidden'>
        Copyright &copy; Gangadhar.
      </div>
    </>
  );
}
/* https://script.google.com/macros/s/AKfycbzHMyRVq86uqotS3c8_ocrvNejPDJSV0n0uIdlWU4HfhBcnUZhxMThw2D8a1XPwk-Rnbg/exec */
