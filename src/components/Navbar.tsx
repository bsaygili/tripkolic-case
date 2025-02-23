'use client'
import Image from "next/image";
import logo from "../../public/trip_logo.png"
import { CiShoppingCart } from "react-icons/ci";


export default function Navbar() {

    return (
        <div>
            <nav className="p-4 flex justify-between items-center">
                <div className="flex justify-between items-center gap-3">
                    <Image src={logo} alt="Tripkolik Logo" width={20} height={20} loading="lazy" />
                    <h1 className="text-2xl font-bold text-primary-600">tripkolic</h1>
                </div>
                <div className="flex justify-between items-center gap-3">
                    <h1 className="text-2xl font-bold text-primary-600">Tours</h1>
                </div>
                <div className=" flex justify-between items-center gap-3">
                    <CiShoppingCart size={20} />
                    <button className="text-primary-500 font-extrabold">Login</button>
                </div>
            </nav>
            
        </div>
    );
}
