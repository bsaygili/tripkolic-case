
'use strict';
import React from 'react';
import { categories, filters } from "../../mockData"
import CustomInput from './CustomInput';
import { Categories, FiltersType } from '@/shared/types';
import { AppliedFilters } from '@/app/page';

export default function Filter({
    setIsOpen,
    setSelectedCategory,
    setFiltersApplied,
    selectedCategory,
    applyFilters,
    filtersApplied,
    resetFilters
}: {
    setSelectedCategory: React.Dispatch<React.SetStateAction<Categories>>,
    setFiltersApplied: React.Dispatch<React.SetStateAction<AppliedFilters>>,
    filtersApplied: FiltersType,
    selectedCategory: string,
    setIsOpen: (vl: boolean) => void,
    applyFilters: () => void;
    resetFilters: () => void;
}) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
            <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
                <button onClick={() => setIsOpen(false)} className="text-black float-right">✖</button>
                <h2 className="text-xl font-bold mb-4">Filter</h2>
                <label htmlFor="categories" className="block mb-2"></label>
                <select
                    className="bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer selected:bg-primary-400"
                    name="categories"
                    id="categories"
                    title="Choose a categories"
                    onClick={(e) => { setSelectedCategory((e.target as HTMLSelectElement).value as Categories); setFiltersApplied({}) }}
                >
                    {categories.map((cat) => (
                        <option
                            key={cat}
                            value={cat}
                            className={`px-4 py-2 m-1 rounded ${selectedCategory === cat ? "bg-primary-500 text-white" : "bg-gray-200"}`}
                        >
                            {cat}
                        </option>
                    ))}
                </select>
                <div>
                    {filters[selectedCategory].map((filter) => (
                        <div key={filter.name} className="p-2 border-b">
                            <label className="font-bold">{filter.name}</label>
                            {filter.options && filter.options.length > 0 ? (
                                <div className="flex flex-wrap gap-2 mt-1">
                                    {filter.options.map((option) => {
                                        const isActive = filtersApplied[filter?.name?.toLowerCase()]?.toString() === option as string;
                                        return (
                                            <button
                                                key={option}
                                                onClick={() =>
                                                    setFiltersApplied((prev: AppliedFilters) => ({
                                                        ...prev,
                                                        [filter.name.toLowerCase()]: option
                                                    }))
                                                }
                                                className={`px-3 py-1 rounded ${isActive ? "bg-blue-500 text-white" : "bg-gray-200"
                                                    }`}
                                            >
                                                {option}
                                            </button>
                                        );
                                    })}

                                </div>
                            ) : <CustomInput
                                type={filter.type}
                                min={Number(filter?.min ?? 0)}
                                max={Number(filter?.max ?? 0)}
                                labelName={filter.name}
                                defaultValue={filter.default}
                                displayValue={filtersApplied[filter.name.toLowerCase()]?.toString() ?? filter.default ?? "0" as string}
                                onChange={(val) =>
                                    setFiltersApplied((prev: AppliedFilters) => ({
                                        ...prev,
                                        [filter.name.toLowerCase()]: val
                                    }))
                                }
                            />}

                        </div>
                    ))}
                </div>
                <div className='flex justify-between'>
                    <button onClick={resetFilters} className="bg-primary-500 text-white px-4 py-2 rounded mt-4">Reset</button>
                    <button onClick={applyFilters} className="bg-primary-500 text-white px-4 py-2 rounded mt-4">Search</button>
                </div>
            </div>
        </div >
    )
}