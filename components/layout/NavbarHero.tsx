"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, BookOpen, ShoppingCart, User } from "lucide-react";
import SearchBox from "./SearchBox";

import { Product } from "@/src/types/product";

interface Props {
    products: Product[];
}

export default function NavbarHero({ products }: Props) {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative bg-linear-to-b from-green-50 to-white">

            {/* ================= NAVBAR ================= */}
            <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b">
                {/* ================= TOPBAR ================= */}
                <div className="bg-green-600 text-white text-xs">
                    <div className="max-w-7xl mx-auto px-4 h-9 flex items-center justify-between">

                        {/* LEFT INFO */}
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                <Phone className="w-3 h-3" />
                                <span>0271-727027</span>
                            </div>

                            <a
                                href="https://ziyadbooks.com/user-guide"
                                target="_blank"
                                className="flex items-center gap-1 hover:underline"
                            >
                                <BookOpen className="w-3 h-3" />
                                <span>Petunjuk Penggunaan</span>
                            </a>
                        </div>

                        {/* RIGHT INFO */}
                        <div className="hidden md:flex items-center gap-3">
                            <span>Selamat datang di Ziyad Books</span>
                        </div>
                    </div>
                </div>

                {/* ================= MAIN NAVBAR ================= */}
                <div className="backdrop-blur bg-white/80 border-b">
                    <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

                        {/* ================= LEFT ================= */}
                        <div className="flex items-center gap-6">

                            {/* LOGO */}
                            <Link href="/" className="flex items-center">
                                <Image
                                    src="https://ziyadbooks.com/storage/ziyad/logonew.svg"
                                    alt="Ziyad Books"
                                    width={120}
                                    height={40}
                                    priority
                                    className="object-contain"
                                    loading="eager"
                                    style={{ width: "120px", height: "40px" }}
                                />
                            </Link>

                            {/* MENU DESKTOP */}
                        </div>

                        {/* ================= CENTER (SEARCH) ================= */}
                        <div className="hidden md:flex flex-1 mx-6 max-w-md">
                            <SearchBox products={products} />
                        </div>

                        {/* ================= RIGHT ================= */}
                        <div className="flex items-center gap-3">

                            {/* ICONS */}
                            <div className="hidden md:flex items-center gap-3 text-gray-600">

                                {/* CART */}
                                <Link href="cart" className="hover:text-green-600 transition">
                                    <ShoppingCart className="w-5 h-5" />
                                </Link>

                                {/* USER */}
                                <Link href="https://ziyadbooks.com/member/login" className="hover:text-green-600 transition">
                                    <User className="w-5 h-5" />
                                </Link>
                            </div>

                            {/* CTA */}
                            <button className="hidden md:block bg-green-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-green-700 transition">
                                Belanja
                            </button>

                            {/* MOBILE BUTTON */}
                            <button
                                onClick={() => setOpen(!open)}
                                className="md:hidden text-xl"
                            >
                                ☰
                            </button>
                        </div>
                    </div>

                    {/* ================= MOBILE MENU ================= */}
                    {open && (
                        <div className="md:hidden bg-white border-t px-4 py-4 space-y-4">

                            {/* SEARCH */}
                            <input
                                type="text"
                                placeholder="Cari buku..."
                                className="w-full px-4 py-2 text-sm border rounded-xl focus:outline-none"
                            />

                            {/* MENU */}
                            {/* <div className="flex flex-col gap-3 text-sm">
                                <a href="#">Beranda</a>
                                <a href="#">Produk</a>
                                <a href="#">Kategori</a>
                                <a href="#">Promo</a>
                                <a href="#">Tentang</a>
                            </div> */}

                            {/* CTA */}
                            <Link href="products" className="w-full bg-green-600 text-white py-2 rounded-xl">
                                Belanja Sekarang
                            </Link>
                        </div>
                    )}
                </div>
            </header>

            {/* ================= HERO ================= */}
            <section id="beranda" className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">

                {/* TEXT */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                        Temukan Buku Islami <br />
                        <span className="text-green-600">Terbaik untuk Keluarga</span>
                    </h1>

                    <p className="text-gray-600 mb-6">
                        Koleksi buku edukatif, inspiratif, dan berkualitas untuk anak dan keluarga muslim.
                        Belajar jadi lebih menyenangkan setiap hari.
                    </p>

                    {/* CTA */}
                    <div className="flex gap-3">
                        <a href="#produk" className="bg-green-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-green-700 transition">
                            Belanja Sekarang
                        </a>

                        <Link href="products" className="border px-6 py-3 rounded-xl font-medium hover:bg-gray-100 transition">
                            Lihat Katalog
                        </Link>
                    </div>
                </div>

                {/* IMAGE */}
                <div className="relative w-full h-75 md:h-100">
                    <Image
                        src="/hero.webp"
                        alt="Buku Islami"
                        fill
                        className="object-cover rounded-2xl shadow-lg"
                    />
                </div>

            </section>
        </div>
    );
}