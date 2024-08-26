"use client";
import React, { useState } from "react";
import "./sideBar.css";
import "nouislider/dist/nouislider.css";
import Nouislider from "nouislider-react";

export default function Sidebar() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [pricefilter, setPriceFiletr] = useState<string[]>([]);
  const [thcfilter, setThcFilter] = useState<string[]>([]);
  const [cbdfilter, setCbdFilter] = useState<string[]>([]);

  return (
    <div className="text-textColorBold">
      <h2
        onClick={() => {
          filterOpen === false ? setFilterOpen(true) : setFilterOpen(false);
        }}
        className="text-xl font-bold mb-4 flex items-center justify-center bg-[#62C3C61A] text-textColorBold"
        tabIndex={0}
        aria-expanded={filterOpen}
        aria-controls="filter-content"
      >
        Filter
      </h2>

      <div
        id="filter-content"
        className={`space-y-6 ${
          filterOpen === false
            ? "md:block hidden "
            : "block absolute md:relative bg-white z-10 w-[100%] p-5"
        }`}
      >
        <div>
          <h3 className="font-semibold mb-2" id="price-slider-label">
            Preis
          </h3>
          <div className="flex w-full">
            <Nouislider
              range={{ min: 0, max: 20 }}
              start={[5, 10]}
              connect
              step={1}
              orientation="horizontal"
              className="w-full"
              onUpdate={(e) => setPriceFiletr(e)}
              aria-labelledby="price-slider-label"
              aria-live="polite"
            />
          </div>
          <div className="flex  text-sm text-gray-600 mt-4" aria-live="polite">
            <span
              className="w-1/2 bg-gray-200 rounded-full px-2"
              aria-label={`Minimum price ${+pricefilter[0]} Euro`}
            >
              {+pricefilter[0]}€
            </span>
            <span className="px-2">-</span>
            <span
              className="w-1/2 bg-gray-200 rounded-full px-2"
              aria-label={`Maximum price ${+pricefilter[1]} Euro`}
            >
              {+pricefilter[1]}€
            </span>
          </div>
        </div>

        <hr className="bg-textColorlight w-full" />

        <div>
          <h3 className="font-semibold mb-2 text-center">Hersteller</h3>
          <div className="space-y-1">
            {["ADRExPharma", "Aurora", "Avaay", "Bedrocan", "Cannamedical"].map(
              (manufacturer) => (
                <label className="flex items-center" key={manufacturer}>
                  <input
                    type="checkbox"
                    className="form-checkbox accent-textColorlight"
                    aria-label={manufacturer}
                  />
                  <span className="ml-2 text-sm">{manufacturer}</span>
                </label>
              )
            )}
          </div>
          <button
            className="text-sm mt-3  p-1 inline-block w-full border border-primaryGreen rounded-tl-full rounded-br-full"
            aria-label="Mehr anzeigen"
          >
            mehr anzeigen
          </button>
        </div>

        <hr className="bg-textColorlight w-full" />

        <div>
          <h3 className="font-semibold mb-2 text-center" id="thc-slider-label">
            THC Gehalt
          </h3>
          <div className="flex items-center space-x-2">
            <Nouislider
              range={{ min: 0, max: 50 }}
              start={[11, 18]}
              connect
              step={1}
              orientation="horizontal"
              className="w-full"
              onUpdate={(e) => {
                setThcFilter(e);
              }}
              aria-labelledby="thc-slider-label"
              aria-live="polite"
            />
          </div>
          <div className="flex text-sm text-gray-600 mt-4" aria-live="polite">
            <span
              className="w-1/2 bg-gray-200 rounded-full px-2"
              aria-label={`Minimum THC Gehalt ${+thcfilter[0]} Prozent`}
            >
              {+thcfilter[0]}%
            </span>
            <span className="px-2">-</span>
            <span
              className="w-1/2 bg-gray-200 rounded-full px-2"
              aria-label={`Maximum THC Gehalt ${+thcfilter[1]} Prozent`}
            >
              {+thcfilter[1]}%
            </span>
          </div>
        </div>

        <hr className="bg-textColorlight w-full" />

        <div>
          <h3 className="font-semibold mb-2 text-center" id="cbd-slider-label">
            CBD Gehalt
          </h3>
          <div className="flex items-center space-x-2">
            <Nouislider
              range={{ min: 0, max: 20 }}
              start={[1, 5]}
              connect
              step={1}
              orientation="horizontal"
              className="w-full"
              onUpdate={(e) => setCbdFilter(e)}
              aria-labelledby="cbd-slider-label"
              aria-live="polite"
            />
          </div>
          <div className="flex text-sm text-gray-600 mt-4" aria-live="polite">
            <span
              className="w-1/2 bg-gray-200 rounded-full px-2"
              aria-label={`Minimum CBD Gehalt ${+cbdfilter[0]} Prozent`}
            >
              {+cbdfilter[0]}%
            </span>
            <span className="px-2">-</span>
            <span
              className="w-1/2 bg-gray-200 rounded-full px-2"
              aria-label={`Maximum CBD Gehalt ${+cbdfilter[1]} Prozent`}
            >
              {+cbdfilter[1]}%
            </span>
          </div>
        </div>

        <hr className="bg-textColorlight w-full" />

        <div>
          <h3 className="font-semibold mb-2 text-center">Genetik</h3>
          <div className="flex space-x-2">
            {["Indica", "Sativa", "Hybrid"].map((type) => (
              <button
                key={type}
                className="bg-textColorlight bg-opacity-30 active:opacity-100 px-3 py-1 rounded-sm text-sm"
                aria-label={type}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <hr className="bg-textColorlight w-full" />

        <div>
          <h3 className="font-semibold mb-2 text-center">Bestrahlung</h3>
          <div className="flex space-x-2">
            {["bestrahlt", "nicht bestrahlt"].map((type) => (
              <button
                key={type}
                className="bg-textColorlight bg-opacity-30 active:opacity-100  px-3 py-1 rounded-sm text-sm"
                aria-label={type}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <hr className="bg-textColorlight w-full" />

        <div className="flex">
          <h3 className="font-semibold mb-2 mx-auto">Terpene</h3>
          <select
            className="rounded px-2 py-1 text-sm bg-transparent"
            aria-label="Select Terpene"
          >
            {/* Add options here */}
          </select>
        </div>

        <hr className="bg-textColorlight w-full" />

        <button
          className="text-sm text-black"
          aria-label="Alle Filter zurücksetzen"
        >
          <span className="text-textColorlight">x</span> alle Filter
          zurücksetzen
        </button>
      </div>
    </div>
  );
}
