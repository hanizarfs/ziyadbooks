"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/src/types/product";

export default function AllProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState("");
    const [focus, setFocus] = useState(false);
    const [preorderFilter, setPreorderFilter] = useState<"all" | "true" | "false">("all");

    useEffect(() => {
        async function fetchProducts() {
            try {
                const res = await fetch(
                    "https://api-dev.ziyadbooks.com/api/v1/ecommerce/auth/products/all/category",
                    {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxNiIsImVtYWlsIjoiZXNwbG9yYW1lZGlhQGdtYWlsLmNvbSIsImlhdCI6MTc3NTAwMzYwMCwiZXhwIjoxNzc1MTMzMjAwfQ.QUJXtxQMd8FSQ38B1LTncQ2dgNQd_8Tv1YPB121u7W4`,
                            "Content-Type": "application/json",
                        },
                        next: { revalidate: 60 },
                    }
                );

                if (!res.ok) throw new Error("Gagal fetch data");

                const data = await res.json();

                // Pastikan selalu array
                const productsArray = Array.isArray(data?.data?.data) ? data.data.data : [];
                setProducts(productsArray);
            } catch (error) {
                console.error("ERROR FETCH:", error);
                setProducts([]); // fallback
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, []);

    // Filter produk
    const filtered: Product[] = useMemo(() => {
        if (!Array.isArray(products)) return []; // jaga-jaga
        let filteredProducts = products;

        if (query) {
            filteredProducts = filteredProducts.filter((p) =>
                p.name.toLowerCase().includes(query.toLowerCase())
            );
        }

        if (preorderFilter !== "all") {
            filteredProducts = filteredProducts.filter(
                (p) => String(p.preorder) === preorderFilter
            );
        }

        return filteredProducts;
    }, [products, query, preorderFilter]);

    return (
        <div className="bg-white min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold">Jelajahi Semua Produk</h2>
                    <p className="text-gray-600 mt-2">Temukan berbagai pilihan buku sesuai kebutuhan Anda</p>
                </div>

                {/* SEARCH & FILTER */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
                    <div className="relative w-full md:w-1/2">
                        <input
                            type="text"
                            placeholder="Cari buku..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onFocus={() => setFocus(true)}
                            onBlur={() => setTimeout(() => setFocus(false), 200)}
                            className="w-full px-4 py-2 text-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        {focus && query && (
                            <div className="absolute top-full mt-2 w-full bg-white border rounded-xl shadow-lg z-50 max-h-80 overflow-auto">
                                {filtered.length > 0 ? (
                                    filtered.slice(0, 5).map((item) => (
                                        <div key={item.id} className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer">
                                            <div className="relative w-10 h-10 shrink-0">
                                                <Image src={item.image_url} alt={item.name} fill className="object-cover rounded" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-sm font-medium line-clamp-1">{item.name}</span>
                                                <span className="text-xs text-green-600">{item.final_price_formatted}</span>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="p-3 text-sm text-red-500">❌ Buku tidak ditemukan</p>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="flex items-center gap-2">
                        <label className="text-sm font-medium">Filter Preorder:</label>
                        <select
                            value={preorderFilter}
                            onChange={(e) => setPreorderFilter(e.target.value as "all" | "true" | "false")}
                            className="border px-3 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                        >
                            <option value="all">Semua</option>
                            <option value="true">Preorder</option>
                            <option value="false">Ready</option>
                        </select>
                    </div>
                </div>

                {/* GRID PRODUK */}
                {loading ? (
                    <p className="text-center text-gray-500 py-20">Loading...</p>
                ) : filtered.length === 0 ? (
                    <p className="text-center text-gray-500 py-20">Tidak ada produk sesuai pencarian/filter</p>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filtered.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}