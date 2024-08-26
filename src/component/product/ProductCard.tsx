import { productData } from "@/ProductData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface productDataIn {
  id: number;
  status: string;
  img: string;
  companyName: string;
  thcPersent: string;
  cbdPersent: string;
  logo: string;
  name: string;
  Kultivar: string;
  Genetik: string;
  price: string;
  stock?: string;
}

function ProductCard() {
  const productCardData: productDataIn[] = productData;
  return (
    <div>
      <div className="flex flex-wrap gap-8 justify-center">
        {productCardData.map((product) => (
          <div
            key={product.id}
            className="border border-textColorlight rounded-tl-3xl rounded-br-3xl shadow-md w-[310px]"
            role="article"
            aria-labelledby={`product-name-${product.id}`}
            aria-describedby={`product-desc-${product.id}`}
          >
            <div className="flex justify-between pt-3">
              <span
                className={`text-[10px] ml-3 px-4 rounded-full ${
                  product.status === "nicht lieferbar"
                    ? "bg-red-500 bg-opacity-5 text-red-500"
                    : "bg-green-300 bg-opacity-5 text-textColorBold"
                }`}
                aria-label={`Status: ${product.status}`}
              >
                {product.status}
              </span>
              <span className="text-[10px] mr-3 px-4 rounded-full bg-green-300 bg-opacity-5 text-textColorBold">
                {product.stock}
              </span>
            </div>

            <Image
              width={310}
              height={150}
              src={`${product.img}`}
              alt={`Image of ${product.name}`}
            />

            <div className="bg-textColorlight rounded-br-3xl bg-opacity-30">
              <div className="w-56 py-4 mx-auto">
                <div className="flex flex-col gap-3">
                  <span
                    className="bg-textColorlight bg-opacity-30 px-3 py-[2px] text-sm font-semibold w-fit rounded"
                    aria-label={`Company: ${product.companyName}`}
                  >
                    {product.companyName}
                  </span>
                  <div className="flex items-center gap-2">
                    <span
                      className="text-sm text-center px-3 py-[2px] mr-1 w-full bg-white rounded"
                      aria-label={`THC Percentage: ${product.thcPersent}`}
                    >
                      {product.thcPersent}
                    </span>
                    <span
                      className="text-sm text-center w-full px-3 py-[2px] bg-textColorlight rounded"
                      aria-label={`CBD Percentage: ${product.cbdPersent}`}
                    >
                      {product.cbdPersent}
                    </span>
                    <Image
                      width={20}
                      height={20}
                      src={`${product.logo}`}
                      alt={`${product.companyName} logo`}
                    />
                  </div>
                </div>

                <h3
                  id={`product-name-${product.id}`}
                  className="font-bold text-lg my-4 text-wrap"
                >
                  {product.name}
                </h3>

                <div
                  id={`product-desc-${product.id}`}
                  className="flex flex-col text-sm text-gray-600 mb-2 gap-2"
                >
                  <span className="flex justify-between">
                    <p>Kultivar</p>
                    <p>{product.Kultivar}</p>
                  </span>
                  <span className="flex justify-between">
                    <p>Genetik </p>
                    <p>{product.Genetik}</p>
                  </span>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold">
                      <span className="text-textColorlight">€</span>
                      {product.price}
                    </span>
                    <span className="text-[10px] text-center">pro Gramm</span>
                  </div>
                  <button
                    className="bg-primaryGreen px-3 py-1 rounded-tl-full rounded-br-full text-[12px]"
                    aria-label={`Add ${product.name} to cart`}
                  >
                    In den Warenkorb
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <nav className="flex space-x-2" aria-label="Product pagination">
          <Link href="#" className="px-3 py-1 text-sm" aria-label="Page 1">
            1
          </Link>
          <Link href="#" className="px-3 py-1 text-sm" aria-label="Page 2">
            2
          </Link>
          <Link href="#" className="px-3 py-1 text-sm" aria-label="Page 3">
            3
          </Link>
          <span className="px-3 py-1 text-sm" aria-hidden="true">
            ...
          </span>
          <Link href="#" className="px-3 py-1 text-sm" aria-label="Page 12">
            12
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default ProductCard;
