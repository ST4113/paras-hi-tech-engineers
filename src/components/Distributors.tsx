import React from "react";
import { cn } from "@/lib/utils";

const distributors = [
  {
    name: "Mahle Engine Components",
    logo: "/images/mahle.jpg",
  },
  {
    name: "Elring Klinger",
    logo: "/images/elring.png",
  },
  {
    name: "Banco Products",
    logo: "/images/banco.jpg",
  },
  {
    name: "Prasco",
    logo: "/images/a774b307-ef76-4e9e-9049-0e3510dffca1.png",
  },
];

const Distributors = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-white mb-4">
            Our Official Distributors
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Paras Hi Tech Engineers is an authorized distributor for top-tier global manufacturers delivering quality and reliability.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {distributors.map((distributor, index) => (
            <div
              key={index}
              className={cn(
                "bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm",
                "hover:shadow-lg hover:border-orange-300/50 transition-all duration-300"
              )}
            >
              <div className="aspect-[4/3] flex items-center justify-center overflow-hidden p-4">
                <img
                  src={distributor.logo}
                  alt={distributor.name}
                  className="max-h-28 object-contain w-full"
                />
              </div>
              <div className="px-4 py-3 border-t border-gray-100 dark:border-gray-800">
                <h3 className="text-center text-navy dark:text-white font-semibold text-base">
                  {distributor.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="font-medium text-gray-700 dark:text-gray-300">
            Our distributor partnerships guarantee 100% genuine parts, full warranty, and trusted technical support.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Distributors;
