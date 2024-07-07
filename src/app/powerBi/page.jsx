import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import azure from "../../../public/azure.png";
import pandas from "../../../public/pandas.png";
import postgress from "../../../public/postgres.jpg";
import visual from "../../../public/capture3.png";
import powerBi from "../../../public/powerBi.png";
import mongo from "../../../public/mongo.png";

const page = () => {
  return (
    <div
      style={{ backgroundColor: "#111827" }}
      className="min-h-screen px-10 bg-gradient-to-bl from-slate-800"
    >
      <Head>
        <title>Data automation project</title>
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
            Foss Analytics project
          </h2>
          <h3 className="text-2xl py-2 text-gray-300">
            Data automation and visualization
          </h3>

          <p className="text-md py-5 leading-8 text-gray-300">
            During my employment in Foss I was working on multiple projects. One
            project which I want to showcase in my portfolio is the Data
            automation project. It was internal project that was assigne to me
            as part of my master thesis. The research question was, Can data
            visualization improve work quality of data analytics team in Foss?
            This project was internal for the company so unfortunetley I cant
            disclose a lot of information as it contains a lot of sensitive
            info.<br></br>
            With that being said, the project was done in Python using Cloud
            computing with Azure, which was handling all the data storage and
            transformation. The idea was that data scientists would already have
            data ready for visualization without them having to get the data,
            transform it, load it etc..
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-4xl mb-10">Tech stack</p>
          <ul className="text-gray-400 flex justify-between mb-10">
            <li className="mr-2">
              <Image src={powerBi} width={150} />
            </li>
            <li className="mr-2">
              <Image src={azure} width={150} />
            </li>
            <li className="mr-2">
              <Image src={mongo} width={150} />
            </li>
            <li className="mr-2">
              <Image src={postgress} width={150} />
            </li>
            <li className="ml-2">
              <Image src={pandas} width={150} />
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-4xl mb-10">Gallery</p>
          <Image src={visual} width={800} />
        </div>
      </section>
    </div>
  );
};

export default page;
