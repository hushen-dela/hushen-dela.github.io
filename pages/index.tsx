/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { Navbar } from "flowbite-react";
import Nav from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Hushen Dela</title>
        <meta name="description" content="Created by Hushen Dela" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex flex-col h-screen">
          <Nav />
          <div className="flex justify-center flex-grow bg-yellow-400">
            <div className="flex flex-col-reverse justify-center w-4/5 mx-auto my-auto md:flex-row ">
              <div className="flex flex-col justify-center flex-grow bg-blue-400">
                <h1 className="text-4xl font-extrabold text-blue-900 dark:text-white md:text-5xl">
                  Hi 👋 there!
                </h1>
                <h1 className="text-4xl font-extrabold text-blue-900 dark:text-white md:text-5xl">
                  My name is
                </h1>
                <h1 className="text-4xl font-extrabold dark:text-white md:text-5xl gradient-text">
                  Hushen Dela
                </h1>
                <h1 className="text-4xl font-extrabold text-blue-900 dark:text-white md:text-5xl">
                  and I am a
                </h1>
                <h1 className="text-4xl font-extrabold text-blue-900 dark:text-white md:text-5xl">
                  Full-Stack Developer.
                </h1>
              </div>
              {/* <div className="flex justify-center flex-grow"> */}
              <div className="self-center justify-center w-48 bg-red-400 md:w-80 sm:w-2/3">
                <img
                  src="/self.jpeg"
                  alt="Picture of the something nice"
                  className="border-8 border-blue-900 border-solid rounded-full"
                />
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
