import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="bg-teal-800 text-white py-8" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <nav aria-label="Footer Navigation" className="flex flex-col md:flex-row space-x-4 text-sm">
            <Link href="#" className="hover:underline focus:outline-none focus:ring-2 focus:ring-white">
              Rezept einlösen
            </Link>
            <Link href="#" className="hover:underline focus:outline-none focus:ring-2 focus:ring-white">
              Live Bestand
            </Link>
            <Link href="#" className="hover:underline focus:outline-none focus:ring-2 focus:ring-white">
              Videosprechstunde
            </Link>
            <Link href="#" className="hover:underline focus:outline-none focus:ring-2 focus:ring-white">
              FAQs
            </Link>
            <Link href="#" className="hover:underline focus:outline-none focus:ring-2 focus:ring-white">
              Kontakt
            </Link>
          </nav>
          <address className="not-italic text-sm">
            <p>Bergstraße 48 - 57</p>
            <p>69115 Weinheim</p>
            <p>(3 Glocken Quartier)</p>
            <p>
              <a href="tel:+492235455250" className="hover:underline focus:outline-none focus:ring-2 focus:ring-white">
                0223 545 5250
              </a>
            </p>
          </address>
          <div className="text-sm">
            <p className="font-semibold">Öffnungszeiten:</p>
            <p>Mo-Fr: 09:00 - 18:00 Uhr</p>
            <p>Sa: 09:00 - 14:00 Uhr</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
