/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */

import React from "react";
import { Link } from "react-router-dom";
import * as WL from "../../whitelabel";
// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function PublicEventDetails() {
  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://firebasestorage.googleapis.com/v0/b/tq-mvp.appspot.com/o/images%2Ftq_travel_management.jpg?alt=media&token=18e89dec-3540-4c74-b880-9302d8b323ff')"
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Your adventure starts with us.
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    If you want access to specialized travel bookings with
                    exceptional customer service and VIP treatment,look to
                    Traveler’s Q. This is what we do, and we are happy to help.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
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
        </div>
        {/*Event-Product Details */}
        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div
                id="Event Details"
                class="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden"
              >
                <div class="container mx-auto px-6 flex relative py-16">
                  <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                    <span class="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
                    {/*Product Name */}
                    <h1 class="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                      Executive Single Suite
                      {/*Product Tag */}
                      <span class="text-5xl sm:text-7xl">
                        "The Atrium" featuring Pacific Ocean views
                      </span>
                    </h1>
                    {/*Event Descriptuon */}
                    <p class="text-sm sm:text-base text-gray-700 dark:text-white">
                      Expo 2020 Dubai will host the world for 182 days, each one
                      brimming with new experiences. It’ll be a time to create,
                      collaborate and innovate. And it’s going to be fun. We’re
                      talking eye-catching, mind-bending, taste bud-tickling,
                      grin-inducing, good-weird, did-that-really-just-happen
                      fun.
                    </p>
                    <div class="flex mt-8">
                      <a
                        href="#"
                        class="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400"
                      >
                        Register
                      </a>
                    </div>
                  </div>
                  <div class="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/tq-mvp.appspot.com/o/products%2Fbigstock-Hotel-Bed-1653767.jpg?alt=media&token=84727992-2437-4629-844d-7b2807de9bce"
                      class="max-w-xs md:max-w-sm m-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
