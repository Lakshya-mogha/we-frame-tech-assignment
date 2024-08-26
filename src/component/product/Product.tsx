import React from "react";
import Sidebar from "./Sidebar";
import ProductCard from "./ProductCard";
import Leafsvg from "../ui/Leafsvg";
import "./product.css";

function Product() {
  return (
    <main className="container mx-auto md:px-4 md:py-8 text-textColorBold">
      <div className="flex justify-between items-center mb-8">
        <div className="flex flex-wrap gap-3 justify-between">
          <div className="flex gap-3 justify-between items-center">
            <div className="flex">
              <span className="my-auto px-1">
                <Leafsvg type="Dark" />
              </span>
              <h1 className="text-3xl font-bold">Blüten</h1>
            </div>

            <div className="flex space-x-2 gap-2">
              <div className="relative">
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <input
                  id="search"
                  type="text"
                  placeholder="Suchen"
                  className="bg-gray-100 rounded-full px-2 py-1 pr-8 text-sm text-textColorlight"
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
          </div>

          <div className="flex gap-3 mt-2 md:mt-0 mx-auto md:mx-0">
            <label htmlFor="sort" className="sr-only">
              Sort by
            </label>
            <select
              id="sort"
              className="bg-textColorlight bg-opacity-30 rounded px-2 py-1 text-sm"
              aria-label="Sort by"
            >
              <option>Sortieren nach</option>
            </select>

            <div
              className="bg-textColorlight bg-opacity-30 flex gap-2 rounded px-2 py-1 text-sm"
              role="group"
              aria-label="Filter by availability"
            >
              <span>Verfügbarkeit</span>
              <label className="switch m-auto" aria-label="Availability toggle">
                <input type="checkbox" aria-label="Availability" />
                <span className="slider round"></span>
              </label>
            </div>

            <button
              className="border bg-textColorlight bg-opacity-30 rounded p-1"
              aria-label="Toggle filter menu"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center space-x-8">
        <Sidebar />
        <ProductCard />
      </div>
    </main>
  );
}

export default Product;
