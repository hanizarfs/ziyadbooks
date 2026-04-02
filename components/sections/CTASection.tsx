"use client";

export default function CTASection() {
    return (
        <section className="py-20 bg-green-600 text-white text-center">
            <div className="max-w-3xl mx-auto px-4">

                {/* HEADLINE */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Mulai Perjalanan Belajar yang Lebih Baik Hari Ini
                </h2>

                {/* SUB */}
                <p className="text-white/90 mb-8">
                    Temukan buku terbaik untuk keluarga Anda sekarang juga.
                </p>

                {/* BUTTON */}
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="bg-white text-green-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
                        Belanja Sekarang
                    </button>

                    <button className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-green-700 transition">
                        Lihat Produk
                    </button>
                </div>

            </div>
        </section>
    );
}