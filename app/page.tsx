"use client"
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";



export default function Home() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Parth Dubey Portfolio</title>
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">Developed by PD</h1>
              <ul className="flex items-center">
                <li>
                  <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl"/>
                </li>
                <li><a className=" bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8 " href="#">Resume</a></li>
              </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:tex-5xl">
              Parth Dubey
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">Developer and Designer.</h3>
            <p className="text-md py-5 leading-8 text-gray-800"> {`I'm a Web Developer passionate about building amazing digital experiences !!!`}</p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillGithub/>
            <AiFillLinkedin/>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
            <Image alt="" src={""} layout="fill" objectFit="cover"/>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Service I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800"> 
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, et veniam ducimus aliquam recusandae enim molestias eius laborum. Consectetur ratione odio libero aliquid error rem eum molestias temporibus magni vero.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800"></p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center justify-items-center shadow-lg p-10 rounded-xl my-10">
              <Image src={""} width={100} height={100} alt=""/>
              <h3 className="text-lg font-medium pt-8 pd-2">Beautiful Designs</h3>
              <p className="py-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, nulla sint tempore porro earum odit soluta voluptates doloremque blanditiis non eius quas cumque eaque delectus in consectetur laboriosam praesentium expedita?
              </p>
              <h4 className="py-4 text-teal-600"> Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Photoshop</p>
            </div>
            <div className="text-center justify-items-center shadow-lg p-10 rounded-xl my-10">
              <Image src={""} width={100} height={100} alt=""/>
              <h3 className="text-lg font-medium pt-8 pd-2">Beautiful Designs</h3>
              <p className="py-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, nulla sint tempore porro earum odit soluta voluptates doloremque blanditiis non eius quas cumque eaque delectus in consectetur laboriosam praesentium expedita?
              </p>
              <h4 className="py-4 text-teal-600"> Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Photoshop</p>
            </div>
            <div className="text-center justify-items-center shadow-lg p-10 rounded-xl my-10">
              <Image src={""} width={100} height={100} alt=""/>
              <h3 className="text-lg font-medium pt-8 pd-2">Beautiful Designs</h3>
              <p className="py-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, nulla sint tempore porro earum odit soluta voluptates doloremque blanditiis non eius quas cumque eaque delectus in consectetur laboriosam praesentium expedita?
              </p>
              <h4 className="py-4 text-teal-600"> Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Photoshop</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
