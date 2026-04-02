"use client";

export default function PromoSection() {
    return (
        <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
            <div className="max-w-7xl mx-auto px-4">

                {/* WRAPPER */}
                <div className="rounded-3xl p-10 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 bg-white/10 backdrop-blur">

                    {/* TEXT */}
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Promo Spesial Hari Ini 🎉
                        </h2>

                        <p className="text-white/90 mb-6">
                            Nikmati diskon hingga 25% untuk produk pilihan.
                            Jangan lewatkan kesempatan ini!
                        </p>

                        <button className="bg-white text-green-700 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition">
                            Ambil Promo Sekarang
                        </button>
                    </div>

                    {/* VISUAL / DECOR */}
                    <div className="hidden md:flex items-center justify-center">
                        <div className="w-40 h-40 rounded-full bg-white/20 flex items-center justify-center text-5xl font-bold">
                            🎉
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}