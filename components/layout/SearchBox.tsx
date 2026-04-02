"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Product } from "@/src/types/product";

interface Props {
    products: Product[];
}

export default function SearchBox({ products }: Props) {
    const [query, setQuery] = useState("");
    const [focus, setFocus] = useState(false);

    // FILTER PRODUK
    const filtered = useMemo(() => {
        if (!query) return [];
        return products.filter((p) =>
            p.name.toLowerCase().includes(query.toLowerCase())
        );
    }, [query, products]);

    return (
        <div className="relative w-full">

            {/* INPUT */}
            <input
                type="text"
                placeholder="Cari buku..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setFocus(true)}
                onBlur={() => setTimeout(() => setFocus(false), 200)}
                className="w-full px-4 py-2 text-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            {/* DROPDOWN */}
            {focus && (
                <div className="absolute top-full mt-2 w-full bg-white border rounded-xl shadow-lg z-50 max-h-80 overflow-auto">

                    {/* BELUM KETIK */}
                    {!query && (
                        <p className="p-3 text-sm text-gray-500">
                            🔍 Masukkan nama buku untuk mencari...
                        </p>
                    )}

                    {/* ADA HASIL */}
                    {query && filtered.length > 0 && (
                        <div className="flex flex-col">
                            {filtered.slice(0, 5).map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer"
                                >
                                    <div className="relative w-10 h-10 flex-shrink-0">
                                        <Image
                                            src={item.image_url}
                                            alt={item.name}
                                            fill
                                            sizes="40px"
                                            className="object-cover rounded"
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium line-clamp-1">
                                            {item.name}
                                        </span>
                                        <span className="text-xs text-green-600">
                                            {item.final_price_formatted}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* TIDAK ADA HASIL */}
                    {query && filtered.length === 0 && (
                        <p className="p-3 text-sm text-red-500">
                            ❌ Buku tidak ditemukan
                        </p>
                    )}
                </div>
            )}
        </div>
    );
}