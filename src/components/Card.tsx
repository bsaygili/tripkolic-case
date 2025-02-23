'use client'

import Image from "next/image"

export default function Card({ title, price, description, discount, discountedPrice, ratings, imageSrc }: {
    id: number, title?: string, price?: number, description?: string, discountedPrice?: number, discount?: number, ratings?: string, imageSrc?: string
}) {
    return (

        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4 relative">
            <Image className="w-full " width={200} height={200} src={imageSrc || '/default-image.jpg'} alt="Tour Image" />
            <div className="absolute top-2 left-2">
                <div className="text-red-600 font-bold text-lg bg-white px-2 py-1 rounded">
                    {discount}% OFF
                </div>
            </div>
            <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded flex items-center">
                <span className="text-yellow-400">★</span>
                <span className="text-gray-700 ml-1">{ratings} (20)</span>
            </div>
            <div className="text-gray-900 font-semibold mt-2">
                {title}
            </div>
            <div className="text-gray-700 mt-1">
                {description}
            </div>
            <div className="flex items-center mt-2">
                <span className="text-red-500 text-sm line-through">THB {price}</span>
                <span className="text-dark font-bold ml-2">THB {discountedPrice}</span>
            </div>
        </div>

    )
}