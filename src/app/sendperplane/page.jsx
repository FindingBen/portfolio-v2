import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import reactSvg from "../../../public/react-icon.svg.png";
import django from "../../../public/django.png";
import redux from "../../../public/redux.jpg";
import postgress from "../../../public/postgres.jpg";
import redis from "../../../public/redis.webp";
import snip1 from "../../../public/snip2.PNG";
import snip3 from "../../../public/snip3.PNG";
import snip4 from "../../../public/snip4.PNG";
import snip5 from "../../../public/snip5.PNG";
import Carousel from "@/components/Carousel";

const page = () => {
  return (
    <div
      style={{ backgroundColor: "#111827" }}
      className="min-h-screen px-10 bg-gradient-to-bl from-slate-800"
    >
      <Head>
        <title>Sendperplane project</title>
      </Head>
      <section className="mx-20">
        <nav className="py-10 flex justify-between">
          <Link href="/">
            <div className="text-lg text-gray-300 flex inline-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
              Back
            </div>
          </Link>
          <ul className="flex items-center">
            <Link target="_blank" href="https://sendperplane.com/">
              <div className="bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 bg-cyan-900 border-none rounded-md">
                Visit app
              </div>
            </Link>
          </ul>
        </nav>
        <div className="text-gray-900 text-center p-10">
          <h2 className="text-7xl py-2 text-cyan-600 font-medium">
            Sendperplane
          </h2>
          <h3 className="text-2xl py-2 text-gray-300">
            SaaS product for SMS marketing
          </h3>

          <p className="text-md py-5 leading-8 text-gray-300">
            This is a pet project of mine which turned out to be a small
            business idea. I built it from scratch and it took me about 1 year.
            It allows people to create list of recipients, then create a
            content. the content could be maybe showing your products,
            announcemnets or something similar. Then you can send a sms message
            which contains a link to that page showcasing your content. The
            whole idea of it is for you to get better response from your
            customers. You can read more about purpose of the project on the
            website itself.<br></br>
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-4xl mb-10">Tech stack</p>
          <ul className="text-gray-400 flex justify-between mb-10">
            <li className="mr-2">
              <Image src={reactSvg} width={150} />
            </li>
            <li className="mr-2">
              <Image src={redux} width={150} />
            </li>
            <li className="mr-2">
              <Image src={django} width={150} />
            </li>
            <li className="mr-2">
              <Image src={postgress} width={150} />
            </li>
            <li className="ml-2">
              <Image src={redis} width={150} />
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-4xl mb-10">Gallery</p>
          <Carousel />
        </div>
      </section>
    </div>
  );
};

export default page;
