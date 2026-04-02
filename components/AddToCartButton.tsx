"use client";

import { useCart } from "@/context/CartContext";
import { Product } from "@/src/types/product";
import { useState } from "react";
import { CheckCircle } from "lucide-react";

type AddToCartButtonProps = {
    product: Product;
    disabled?: boolean; // tambahkan props optional disabled
};

export default function AddToCartButton({ product, disabled }: AddToCartButtonProps) {
    const { addToCart } = useCart();
    const [showToast, setShowToast] = useState(false);

    const handleAdd = () => {
        if (disabled) return; // mencegah klik jika stok 0

        addToCart(product);

        // tampilkan toast
        setShowToast(true);

        // auto hide setelah 2 detik
        setTimeout(() => {
            setShowToast(false);
        }, 2000);
    };

    return (
        <>
            <button
                onClick={handleAdd}
                disabled={disabled} // disabled jika stok 0
                className={`px-6 py-3 rounded-xl w-full transition
                    ${disabled
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-green-600 text-white hover:bg-green-700"
                    }`}
            >
                {disabled ? "Stok Kosong" : "Tambah ke Keranjang"}
            </button>

            {/* 🔥 TOAST */}
            {showToast && !disabled && (
                <div className="fixed bottom-5 right-5 bg-white border shadow-lg rounded-xl px-4 py-3 flex items-center gap-3 animate-slideIn">
                    <CheckCircle className="text-green-600" size={20} />
                    <span className="text-sm font-medium">
                        Berhasil ditambahkan ke keranjang
                    </span>
                </div>
            )}
        </>
    );
}