/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

import * as Content from "./Content";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                {/* /content/home */}
                {/*<Home Header />*/}
                {Content.HomeHeader}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                {/*<HomeMainSection />*/}
                {Content.HomeTagline}
              </p>
              <div className="mt-12">
                <a
                  href="/events"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Learn More
                </a>
                <a
                  href="/auth/register"
                  className="ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  target="_blank"
                >
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/tq-mvp.appspot.com/o/images%2Fbg_mainsection.png?alt=media&token=46e68fa0-2154-4524-ba62-81a5812087b9"
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
          alt="Events Management"
        />
        {/*  <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
          src={require("assets/img/pattern_react.png").default}
          alt="Events Management"
        />
        */}
      </section>

      <section
        id="Events Management"
        className="py-20 bg-blueGray-600 overflow-hidden"
      >
        <div className="container mx-auto pb-64">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-compass text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                {/*HomeSection1Main */}
                {Content.HomeSection1Header}
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-white">
                {/*HomeSection1Tagline */}
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-white">
                {/*HomeSection1Main */}
                {Content.HomeSection1Main}
              </p>
              <a
                href="https://yelp.com?ref=nr-index"
                target="_blank"
                className="mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
              >
                <i class="fas fa-thumbs-up"></i>
                <span> UP VOTE</span>
              </a>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
              {/* Custom background */}
              <i className="fas fa-passport text-blueGray-700 absolute -top-150-px -right-100 left-auto opacity-80 text-55"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 bg-blueGray-200 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center">
                <span role="img" aria-label="travel">
                  &#127977;
                </span>
              </p>
              <h3 className="font-semibold text-3xl">
                {/*HomeSection2Header */}
                {Content.HomeSection2Header}
              </h3>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                {/*HomeSection2Tagline */}
                {Content.HomeSection2Tagline}
              </p>
              <div className="sm:block flex flex-col mt-10">
                <a
                  href="/register"
                  target="_parent"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Register
                </a>
                <a
                  href="/events"
                  target="_parent"
                  className="sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                >
                  Events
                </a>
              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
