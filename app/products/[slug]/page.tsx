import { getProducts } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/src/types/product";
import ProductCard from "@/components/ProductCard";

import AddToCartButton from "@/components/AddToCartButton";

type Props = {
    params: {
        slug: string;
    };
};

export default async function ProductDetail({ params }: Props) {
    const { slug } = await params;

    const res = await getProducts();
    const products: Product[] = res?.data?.data || [];

    const product = products.find((item) => item.slug === slug);

    // ambil rekomendasi (exclude produk ini)
    const relatedProducts = products
        .filter((item) => item.slug !== slug)
        .slice(0, 4);

    if (!product) {
        return <div className="p-10 text-center">Produk tidak ditemukan</div>;
    }

    // Stok kategori
    const stokLabel = () => {
        if (product.sisastok === 0) return { text: "Kosong", bg: "bg-red-500" };
        if (product.sisastok > 0 && product.sisastok <= 50) return { text: "Menipis", bg: "bg-yellow-500" };
        return { text: "Tersedia", bg: "bg-green-500" };
    };

    const { text: stokText, bg: stokBg } = stokLabel();
    const isOutOfStock = product.sisastok === 0;

    return (
        <div className="bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 py-10">

                {/* 🔗 BREADCRUMB */}
                <div className="text-sm text-gray-500 mb-6">
                    <Link href="/" className="hover:text-black">Home</Link>
                    <span className="mx-2">›</span>
                    <span>Detail Produk</span>
                </div>

                {/* 🔥 MAIN GRID */}
                <div className="grid md:grid-cols-2 gap-10">

                    {/* IMAGE */}
                    <div className="relative w-full h-100 bg-gray-100 rounded-2xl overflow-hidden">
                        <Image
                            src={product.image_url}
                            alt={product.name}
                            fill
                            className="object-cover"
                        />
                        {isOutOfStock && (
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-xl font-bold">
                                KOSONG
                            </div>
                        )}
                        <div className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold text-white rounded ${stokBg}`}>
                            {stokText}
                        </div>
                    </div>

                    {/* CONTENT */}
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold mb-3">
                            {product.name}
                        </h1>

                        {/* PRICE */}
                        <div className="mb-4 flex items-center gap-3">
                            <span className="text-3xl font-bold text-green-600">
                                {product.final_price_formatted}
                            </span>

                            {product.diskon !== "0" && (
                                <span className="text-gray-400 line-through">
                                    {product.price_formatted}
                                </span>
                            )}
                        </div>

                        {/* STATUS */}
                        <div className="flex gap-3 mb-4">
                            {product.preorder && (
                                <span className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-700">
                                    Preorder
                                </span>
                            )}
                        </div>

                        {/* INFO DETAIL */}
                        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-6">
                            <p><b>Berat:</b> {product.weight} gr</p>
                            <p><b>Jenis:</b> Buku Anak</p>
                            <p><b>Bahasa:</b> Indonesia</p>
                            <p><b>Ukuran:</b> 20 x 20 cm</p>
                        </div>

                        {/* CTA */}
                        <div className="flex gap-3 mb-6">
                            <AddToCartButton product={product} disabled={isOutOfStock} />
                        </div>

                        {/* DESKRIPSI */}
                        <div className="text-gray-700 text-sm leading-relaxed space-y-3">
                            <h3 className="font-semibold text-base">
                                Deskripsi Produk
                            </h3>

                            <p>
                                Hadir dengan tampilan menarik dan edukatif untuk anak-anak muslim.
                                Produk ini dirancang untuk membantu anak belajar dengan cara yang menyenangkan.
                            </p>

                            <ul className="list-disc ml-5 space-y-1">
                                <li>Materi lengkap dan sesuai kebutuhan anak</li>
                                <li>Melatih motorik halus melalui aktivitas</li>
                                <li>Menambah kosakata dan pemahaman</li>
                                <li>Aktivitas kreatif: mewarnai, menulis, membaca</li>
                                <li>Melatih kefasihan sejak dini</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 🔥 RELATED PRODUCTS */}
                <div className="mt-16">
                    <h2 className="text-xl font-bold mb-6">
                        Produk Lainnya
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {relatedProducts.map((item) => (
                            <ProductCard key={item.id} product={item} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}