"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/src/types/product";

export default function ProductCard({ product }: { product: Product }) {
    // Fungsi untuk mengubah stok menjadi kategori label
    const stokLabel = () => {
        if (product.sisastok === 0) return { text: "Kosong", bg: "bg-red-500" };
        if (product.sisastok > 0 && product.sisastok <= 50) return { text: "Menipis", bg: "bg-yellow-500" };
        return { text: "Tersedia", bg: "bg-green-500" };
    };

    const { text: stokText, bg: stokBg } = stokLabel();

    return (
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden group relative">

            {/* STOK BADGE */}
            <div className={`absolute top-3 left-3 px-2 py-1 text-xs font-semibold text-white rounded ${stokBg} z-10`}>
                {stokText}
            </div>

            {/* CLICKABLE IMAGE */}
            <Link href={`/products/${product.slug}`}>
                <div className="relative w-full h-56 bg-gray-100 cursor-pointer">
                    <Image
                        src={product.image_url}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw,
                               (max-width: 1200px) 50vw,
                               25vw"
                        className="object-cover group-hover:scale-105 transition duration-300"
                    />
                </div>
            </Link>

            {/* CONTENT */}
            <div className="p-4 flex flex-col gap-2">

                <Link href={`/products/${product.slug}`}>
                    <h2 className="text-sm font-semibold line-clamp-2 min-h-10 hover:text-green-600 cursor-pointer">
                        {product.name}
                    </h2>
                </Link>

                <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-green-600">
                        {product.final_price_formatted}
                    </span>

                    {product.diskon !== "0" && (
                        <span className="text-sm line-through text-gray-400">
                            {product.price_formatted}
                        </span>
                    )}
                </div>

                {/* BUTTON */}
                <Link href={`/products/${product.slug}`}>
                    <button className="mt-2 bg-green-700 text-white text-sm py-2 rounded-lg hover:bg-green-800 transition w-full">
                        Lihat Detail
                    </button>
                </Link>
            </div>
        </div>
    );
}