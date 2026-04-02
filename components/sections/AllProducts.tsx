import ProductCard from "@/components/ProductCard";
import { Product } from "@/src/types/product";

export default function AllProducts({ products }: { products: Product[] }) {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">

                {/* HEADER */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold">
                        Jelajahi Semua Produk
                    </h2>
                    <p className="text-gray-600 mt-2">
                        Temukan berbagai pilihan buku sesuai kebutuhan Anda
                    </p>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

            </div>
        </section>
    );
}