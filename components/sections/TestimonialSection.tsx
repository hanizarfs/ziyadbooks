"use client";

export default function TestimonialSection() {
    const testimonials = [
        {
            name: "Ibu Siti",
            city: "Jakarta",
            message:
                "Buku-bukunya sangat membantu anak saya belajar membaca Al-Qur’an dengan lebih mudah.",
        },
        {
            name: "Bapak Ahmad",
            city: "Bandung",
            message:
                "Kualitas bukunya bagus dan pengirimannya cepat. Sangat direkomendasikan!",
        },
        {
            name: "Ibu Rina",
            city: "Surabaya",
            message:
                "Anak saya jadi lebih semangat belajar setelah pakai buku dari Ziyad Books.",
        },
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">

                {/* HEADER */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-3">
                        Apa Kata Mereka?
                    </h2>
                    <p className="text-gray-600">
                        Testimoni dari pelanggan yang telah merasakan manfaatnya
                    </p>
                </div>

                {/* GRID */}
                <div className="grid md:grid-cols-3 gap-6">

                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition"
                        >
                            <p className="text-gray-600 text-sm mb-4 italic">
                                “{item.message}”
                            </p>

                            <div className="font-semibold text-sm">
                                — {item.name}, {item.city}
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}