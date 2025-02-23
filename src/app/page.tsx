'use client'

import React from "react";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

import Navbar from "@/components/Navbar";
import Filter from "@/components/Filter";
import Card from "@/components/Card";

import { sampleData } from "../../mockData";
import { Categories, DataType, FiltersType } from "@/shared/types";



export default function Home() {
  const [isFilterOpen, setIsFilterOpen] = React.useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = React.useState<Categories>("Tours");
  const [filtersApplied, setFiltersApplied] = React.useState<FiltersType>({});
  const [filteredData, setFilteredData] = React.useState<{ title?: string; price?: number; vehicleType?: string; passengers?: number; ratings?: string; discount?: number; discountedPrice?: number; imageSrc?: string; description?: string }[]>([]);



  const resetFilters = () => {
    setFiltersApplied({});
    setSelectedCategory("Tours");
  }

  const applyFilters = () => {
    const filtered = sampleData[selectedCategory].filter((item: Record<string, string | number | undefined>) => {
      return Object.entries(filtersApplied).every(([key, value]) => {
        if (typeof item[key] === "number") {
          return item[key] <= Number(value);
        } else {
          if (typeof item[key] === "string" && typeof value === "string") {
            return item[key] === value;
          }
          return false;
        }
      });
    });
    setFilteredData(filtered);
    setIsFilterOpen(false);
  };

  React.useEffect(() => {
    setFilteredData(sampleData[selectedCategory]);
  }, [selectedCategory]);

  const allData = [] as DataType[]
  Object.keys(sampleData).forEach(key =>
    sampleData[key].map(sample =>
      allData.push(sample))
  )


  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4">
        <button onClick={() => setIsFilterOpen(p => !p)} className="text-xl text-gray-600" title="filter">
          <div className="flex justify-between items-center gap-1">
            <HiOutlineAdjustmentsHorizontal />
            <span>
              Filters
            </span>
          </div>
        </button>
        {isFilterOpen &&
          (
            <Filter setIsOpen={setIsFilterOpen} applyFilters={applyFilters} setSelectedCategory={setSelectedCategory} setFiltersApplied={setFiltersApplied} selectedCategory={selectedCategory} filtersApplied={filtersApplied} resetFilters={resetFilters} />
          )
        }
        <h1 className="text-2xl font-bold">Welcome to Tripkolic</h1>
        <p className="mt-4">Explore our tours, tickets, rent, and transfer options.</p>
        <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4 z-0">
          {
            (filteredData ?? allData)?.map((item, index) =>
              <Card
                key={index}
                id={index}
                title={item?.title}
                price={item?.price}
                description={item?.description}
                discount={item?.discount}
                discountedPrice={item?.discountedPrice}
                ratings={item?.ratings}
                imageSrc={item?.imageSrc}
              />
            )
          }
        </div>
      </main>
    </div>
  );
}
