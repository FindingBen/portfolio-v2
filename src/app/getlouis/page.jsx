import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import reactSvg from "../../../public/react-icon.svg.png";
import django from "../../../public/django.png";
import redux from "../../../public/redux.jpg";
import postgress from "../../../public/postgres.jpg";
import redis from "../../../public/redis.webp";
import capture2 from "../../../public/capture2.png";
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
        </nav>
        <div className="text-gray-900 text-center p-10">
          <h2 className="text-7xl py-2 text-cyan-600 font-medium">GetLouis</h2>
          <h3 className="text-2xl py-2 text-gray-300">
            SaaS product for Influencer and Brands
          </h3>

          <p className="text-md py-5 leading-8 text-gray-300">
            This project was done during my internship at GetLouis in winter
            2020. It was a experiance full of learning, we didnt had CTO so it
            was hard sometimes to believe in ourselfs as there was none there to
            correct us. Neverthless it was good learning experiance where I was
            working on backend mostly, in Django. I was integrating Django rest
            framework and we used other tools, such as redis for caching, Jinja
            for templates then we switched to React. Platform is currently down
            and I am not entierly sure if its still up and running.<br></br>
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-4xl mb-10">Tech stack</p>
          <ul className="text-gray-400 flex justify-between mb-10">
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
          <Image src={capture2} width={1000} />
        </div>
      </section>
    </div>
  );
};

export default page;
