"use client";

import { BookOpen, Truck, Star } from "lucide-react";

export default function TrustSection() {
    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4">

                {/* ================= HEADER ================= */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-3">
                        Kenapa Memilih Kami?
                    </h2>
                    <p className="text-gray-600 max-w-xl mx-auto">
                        Kami menghadirkan produk terbaik dengan layanan terpercaya untuk keluarga Anda.
                    </p>
                </div>

                {/* ================= CONTENT ================= */}
                <div className="grid md:grid-cols-3 gap-6">

                    {/* CARD 1 */}
                    <div className="bg-zinc-50 p-6 rounded-2xl hover:shadow-lg transition group">
                        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-100 text-green-600 mb-4 group-hover:scale-110 transition">
                            <BookOpen className="w-6 h-6" />
                        </div>

                        <h3 className="font-semibold text-lg mb-2">
                            Produk Berkualitas & Original
                        </h3>

                        <p className="text-gray-600 text-sm">
                            Buku pilihan terbaik dari penerbit terpercaya
                        </p>
                    </div>

                    {/* CARD 2 */}
                    <div className="bg-zinc-50 p-6 rounded-2xl hover:shadow-lg transition group">
                        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-100 text-green-600 mb-4 group-hover:scale-110 transition">
                            <Truck className="w-6 h-6" />
                        </div>

                        <h3 className="font-semibold text-lg mb-2">
                            Pengiriman Cepat & Aman
                        </h3>

                        <p className="text-gray-600 text-sm">
                            Sampai ke rumah Anda dengan aman
                        </p>
                    </div>

                    {/* CARD 3 */}
                    <div className="bg-zinc-50 p-6 rounded-2xl hover:shadow-lg transition group">
                        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-100 text-green-600 mb-4 group-hover:scale-110 transition">
                            <Star className="w-6 h-6" />
                        </div>

                        <h3 className="font-semibold text-lg mb-2">
                            Dipercaya Ribuan Keluarga
                        </h3>

                        <p className="text-gray-600 text-sm">
                            Telah digunakan oleh banyak keluarga muslim
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}