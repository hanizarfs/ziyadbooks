import ProductCard from "@/components/ProductCard";
import { Product } from "@/src/types/product";

export default function FeaturedProducts({ products }: { products: Product[] }) {
    const featured = products.slice(0, 4);

    return (
        <section className="py-16 bg-green-50">
            <div className="max-w-7xl mx-auto px-4">

                {/* HEADER */}
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h2 className="text-3xl font-bold">
                            Produk Pilihan untuk Anda
                        </h2>
                        <p className="text-gray-600 mt-2">
                            Rekomendasi terbaik yang paling diminati
                        </p>
                    </div>

                    <button className="text-sm text-green-600 hover:underline">
                        Lihat Semua
                    </button>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {featured.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

            </div>
        </section>
    );
}