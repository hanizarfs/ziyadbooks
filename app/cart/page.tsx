"use client";

import { useCart } from "@/context/CartContext";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
    Trash2,
    Plus,
    Minus,
    ShoppingCart
} from "lucide-react";

export default function CartPage() {
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