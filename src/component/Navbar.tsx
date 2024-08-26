"use client";
import React, { useState } from "react";
import Leafsvg from "./ui/Leafsvg";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-sm">
        <div className="md:flex justify-center md:justify-around">
          <div className="flex items-center">
            <div className="container mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center">
              {/* Search Bar */}
              <div className="relative">
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <input
                  type="text"
                  id="search"
                  placeholder="Suchen"
                  className="border rounded-full px-4 py-1 pr-8 text-sm text-textColorlight"
                  aria-label="Search"
                />
                <svg
                  className="w-4 h-4 text-textColorlight absolute right-3 top-1/2 transform -translate-y-1/2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
            </div>

            {/* Hamburger Menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              <svg
                className="hamburger-icon"
                viewBox="0 0 100 80"
                width="25"
                height="25"
              >
                <rect width="100" height="10" rx="5" fill="#333" />
                <rect x="25" y="30" width="50" height="10" rx="5" fill="#333" />
                <rect x="50" y="60" width="50" height="10" rx="5" fill="#333" />
              </svg>
            </button>
          </div>

          {/* Navbar Links */}
          <div
            className={`flex flex-col md:flex-row gap-3 mt-2 ${
              isOpen ? "flex" : "hidden md:flex"
            }`}
          >
            <nav
              className="flex flex-col md:flex-row mx-auto md:mx-0 space-x-4 text-sm gap-3 items-center"
              aria-label="Main Navigation"
            >
              <Link href="#" className="font-semibold text-textColorBold flex gap-1">
                <Leafsvg type="Dark" />
                Rezept einlösen
              </Link>
              <Link href="#" className="text-textColorBold flex gap-1">
                <Leafsvg />
                Live Bestand
              </Link>
              <Link href="#" className="text-textColorBold flex gap-1">
                <Leafsvg />
                Videosprechstunde
              </Link>
              <Link href="#" className="text-textColorBold flex gap-1">
                <Leafsvg />
                FAQs
              </Link>
              <Link href="#" className="text-textColorBold flex gap-1">
                <Leafsvg />
                Kontakt
              </Link>
            </nav>

            {/* Cart and Login */}
            <div className="flex mx-auto md:mx-0 gap-2 items-center mb-2">
              <Link href="#" className="text-gray-600" aria-label="Shopping Cart">
                <svg
                  className="w-6 h-6 text-textColorlight"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </Link>
              <button className="bg-primaryGreen text-textColorBold px-4 py-2 text-sm font-semibold rounded-tl-full rounded-br-full">
                Anmelden
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb Navigation */}
      <nav
        className="container mx-auto px-4 py-2 flex flex-col md:flex-row justify-between gap-3 my-4"
        aria-label="Breadcrumb"
      >
        <div className="flex items-center space-x-2 text-sm text-textColorlight">
          <p>Home</p>
          <span>&gt;</span>
          <p>Livebestand</p>
          <span>&gt;</span>
          <p className="text-textColorBold">Cannabis Blüten</p>
        </div>

        <div className="mx-auto md:mx-0">
          <p className="text-sm">GKV mit Kostenübernahme?</p>
          <button className="text-textColorBold px-8 py-1 text-sm font-semibold border-2 border-primaryBlue rounded-tl-full rounded-br-full">
            Preisoptionen
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
