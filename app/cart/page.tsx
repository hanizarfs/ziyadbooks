"use client";

import { useCart } from "@/context/CartContext";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Trash2,
    Plus,
    Minus,
    ShoppingCart,
    Phone, BookOpen, User
} from "lucide-react";
import SearchBox from "@/components/layout/SearchBox";

import { Product } from "@/src/types/product";

interface Props {
    products: Product[];
}

export default function CartPage({ products }: Props) {

    const [open, setOpen] = useState(false);

    const { cart, removeFromCart, increaseQty, decreaseQty } = useCart();

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="p-10 text-center text-gray-400">
                Loading keranjang...
            </div>
        );
    }

    const total = cart.reduce(
        (acc, item) => acc + item.final_price * item.qty,
        0
    );

    const handleCheckout = () => {
        const phone = "6285162930474";

        // 🧾 format produk
        const message = cart.map((item, index) => {
            return `${index + 1}. ${item.name}
    Qty: ${item.qty}
    Harga: Rp ${item.final_price.toLocaleString()}
    Subtotal: Rp ${(item.final_price * item.qty).toLocaleString()}`;
        }).join("\n\n");

        const totalPrice = `Total: Rp ${total.toLocaleString()}`;

        const finalMessage = `Halo, saya ingin memesan produk berikut:\n\n${message}\n\n${totalPrice}\n\nTerima kasih 🙏`;

        const url = `https://wa.me/${phone}?text=${encodeURIComponent(finalMessage)}`;

        window.open(url, "_blank");
    };

    return (
        <div className="bg-white min-h-screen">
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

            <div className="max-w-7xl mx-auto px-4 py-10">

                {/* HEADER */}
                <div className="flex items-center gap-3 mb-8">
                    <ShoppingCart className="w-6 h-6" />
                    <h1 className="text-2xl font-bold">Keranjang Belanja</h1>
                </div>

                {cart.length === 0 ? (
                    <div className="text-center py-20 border rounded-2xl">
                        <ShoppingCart className="w-10 h-10 mx-auto mb-4 text-gray-400" />
                        <p className="text-gray-500">Keranjang kamu masih kosong</p>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-3 gap-8">

                        {/* 🛒 LIST PRODUK */}
                        <div className="md:col-span-2 space-y-4">

                            {cart.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex gap-4 bg-white border rounded-2xl p-4 shadow-sm hover:shadow-md transition"
                                >

                                    {/* IMAGE */}
                                    <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-gray-100">
                                        <Image
                                            src={item.image_url}
                                            alt={item.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* INFO */}
                                    <div className="flex-1">
                                        <h2 className="font-semibold line-clamp-2">
                                            {item.name}
                                        </h2>

                                        <p className="text-green-600 font-bold mt-1">
                                            {item.final_price_formatted}
                                        </p>

                                        {/* QTY CONTROL */}
                                        <div className="flex items-center gap-3 mt-3">

                                            <div className="flex items-center border rounded-lg overflow-hidden">
                                                <button
                                                    onClick={() => decreaseQty(item.id)}
                                                    className="px-3 py-1 hover:bg-gray-100"
                                                >
                                                    <Minus size={16} />
                                                </button>

                                                <span className="px-4 text-sm">
                                                    {item.qty}
                                                </span>

                                                <button
                                                    onClick={() => increaseQty(item.id)}
                                                    className="px-3 py-1 hover:bg-gray-100"
                                                >
                                                    <Plus size={16} />
                                                </button>
                                            </div>

                                            {/* REMOVE */}
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-red-500 hover:text-red-600 flex items-center gap-1 text-sm"
                                            >
                                                <Trash2 size={16} />
                                                Hapus
                                            </button>
                                        </div>
                                    </div>

                                    {/* SUBTOTAL */}
                                    <div className="text-right font-semibold">
                                        Rp {(item.final_price * item.qty).toLocaleString()}
                                    </div>
                                </div>
                            ))}

                        </div>

                        {/* 💰 SUMMARY */}
                        <div className="border rounded-2xl p-6 h-fit sticky top-24 bg-white shadow-sm">

                            <h2 className="font-semibold mb-4">
                                Ringkasan Belanja
                            </h2>

                            <div className="flex justify-between text-sm mb-2">
                                <span>Total Item</span>
                                <span>{cart.length}</span>
                            </div>

                            <div className="flex justify-between font-bold text-lg mt-4">
                                <span>Total</span>
                                <span>Rp {total.toLocaleString()}</span>
                            </div>

                            <button
                                onClick={handleCheckout}
                                className="mt-6 w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition"
                            >
                                Checkout via WhatsApp
                            </button>

                        </div>

                    </div>
                )}
            </div>
        </div>
    );
}