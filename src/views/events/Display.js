/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */

import { Link } from "react-router-dom";
import React, { Component, useContext, useEffect, useState } from "react";
import db, { firebase } from "../../firebase";
//import * as WL from "../../whitelabel";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

//Firestore
//import DisplayEvents from "./Displayevents.js";

export default function Display() {
  const [events, setEvents] = useState("");
  useEffect(() => {
    ["events"].map((collection) =>
      db
        .collection(collection)
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            db.collection("events")
              .doc(doc.id)
              .onSnapshot((doc) => {
                setEvents({
                  id: doc.id,
                  name: doc.data().name,
                  description: doc.data().description,
                  location_name: doc.data().location_name
                });
              });
          });
        })
    );
  }, []);

  return (
    <div>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://firebasestorage.googleapis.com/v0/b/tq-mvp.appspot.com/o/images%2Fevent_dubai_expo.jpg?alt=media&token=4f2b3ecb-21eb-49aa-99e5-697d3c80e3ef')"
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
                    Current Events
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200"></p>
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

            <section className="pb-20 bg-blueGray-200 -mt-24">
              <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                  <div class="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
                    <div class="container mx-auto px-6 flex relative py-16">
                      <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                        <span class="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
                        <h1 class="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                          {events.name}
                          <span class="text-5xl sm:text-7xl">
                            {events.location_name}
                          </span>
                          <span class="text-5xl sm:text-7xl">Dates</span>
                        </h1>
                        <p class="text-sm sm:text-base text-gray-700 dark:text-white">
                          {events.description}
                        </p>
                        <div class="flex mt-8">
                          <a
                            href="register"
                            class="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400"
                            alt="Register"
                          >
                            Register
                          </a>
                          <a
                            href="register"
                            class="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md"
                            alt="Register"
                          >
                            Read more
                          </a>
                        </div>
                      </div>
                      <div class="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                        <img
                          src="https://imgr.search.brave.com/zg3NAQlA1YDxGDWYZX9vB6lo-2P8P4_uidr1Bz7TGrc/fit/800/500/no/1/aHR0cDovL2Jsb2cu/aW1vbmhvbGlkYXlz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOS8wNC9XaGF0/LWlzLUV4cG8tMjAy/MC1pbi1EdWJhaS5q/cGc"
                          class="max-w-xs md:max-w-sm m-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
