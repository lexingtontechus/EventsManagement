import React from "react";
import * as WL from "../../whitelabel";

export default function FooterSmall(props) {
  return (
    <>
      <footer
        className={
          (props.absolute
            ? "absolute w-full bottom-0 bg-blueGray-800"
            : "relative") + " pb-6"
        }
      >
        <div className="container mx-auto px-4">
          <hr className="mb-6 border-b-1 border-blueGray-600" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left">
                Copyright © {new Date().getFullYear()}{" "}
                <a
                  href={WL.sitedomain}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blueGray-500 hover:text-blueGray-700 text-sm font-semibold py-1"
                  alt="sitename"
                >
                  {WL.sitename}
                </a>
              </div>
            </div>
            <div className="w-full md:w-8/12 px-4">
              <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                <li>
                  <a
                    href={WL.sitepowereddomain}
                    target="_blank"
                    rel="noreferrer"
                    alt={WL.sitepowered}
                    className="text-blueGray-600 hover:text-blue;Gray-800 text-sm font-semibold block py-1 px-3"
                  >
                    By {WL.sitepowered}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
