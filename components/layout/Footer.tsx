"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Phone,
    Mail,
    MapPin,
} from "lucide-react";

import {
    FaFacebookF,
    FaInstagram,
    FaWhatsapp,
    FaTelegramPlane,
    FaTiktok,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-green-600 text-white mt-20">

            {/* ================= MAIN ================= */}
            <div className="max-w-7xl mx-auto px-4 py-14 grid md:grid-cols-2 lg:grid-cols-4 gap-10">

                {/* ================= BRAND ================= */}
                <div>
                    <Link href="/" className="inline-block mb-4">
                        <Image
                            src="https://ziyadbooks.com/storage/ziyad/logonew.svg"
                            alt="Ziyad Books"
                            width={130}
                            height={40}
                            className="object-contain"
                            priority
                        />
                    </Link>

                    <h2 className="text-lg font-semibold mb-2">
                        Ziyad Visi Media
                    </h2>

                    <p className="text-sm text-white/80 mb-4">
                        Got Question? Call Us 24/7
                    </p>

                    <div className="space-y-2 text-sm text-white/90">
                        <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4" />
                            <span>0271-727027</span>
                        </div>

                        <div className="flex items-start gap-2">
                            <MapPin className="w-4 h-4 mt-1" />
                            <span>
                                Jl. Banyuanyar Selatan No.01, Banjarsari, Surakarta 57137
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            <span>official@ziyadbooks.com</span>
                        </div>
                    </div>
                </div>

                {/* ================= MENU ================= */}
                <div>
                    <h3 className="font-semibold mb-4">Informasi</h3>

                    <ul className="space-y-2 text-sm text-white/80">
                        <li><a href="#" className="hover:text-white">Tentang Kami</a></li>
                        <li><a href="#" className="hover:text-white">Produk</a></li>
                        <li><a href="#" className="hover:text-white">Kategori</a></li>
                        <li><a href="#" className="hover:text-white">Promo</a></li>
                        <li><a href="#" className="hover:text-white">Ziyad Partner</a></li>
                    </ul>
                </div>

                {/* ================= PARTNER ================= */}
                <div>
                    <h3 className="font-semibold mb-4">Partner Pembayaran</h3>

                    <div className="grid grid-cols-3 gap-3 mb-6">
                        <Image src="/logo/bsi.svg" alt="BSI" width={70} height={30} />
                        <Image src="/logo/bca.svg" alt="BCA" width={70} height={30} />
                        <Image src="/logo/bri.svg" alt="BRI" width={70} height={30} />
                        <Image src="/logo/bni.svg" alt="BNI" width={70} height={30} />
                    </div>

                    <h3 className="font-semibold mb-4">Pengiriman</h3>

                    <div className="grid grid-cols-3 gap-3">
                        <Image src="/logo/jne.svg" alt="JNE" width={70} height={30} />
                        <Image src="/logo/jnt.svg" alt="JNT" width={70} height={30} />
                        <Image src="/logo/tiki.svg" alt="TIKI" width={70} height={30} />
                        <Image src="/logo/pos.svg" alt="POS" width={70} height={30} />
                        <Image src="/logo/sicepat.svg" alt="SiCepat" width={70} height={30} />
                    </div>
                </div>

                {/* ================= SOCIAL ================= */}
                <div>
                    <h3 className="font-semibold mb-4">Ikuti Kami</h3>

                    <div className="flex gap-4 text-lg">
                        <a href="https://www.facebook.com/ziyadbooks/about/" target="_blank">
                            <FaFacebookF className="hover:scale-110 transition" />
                        </a>

                        <a href="https://www.instagram.com/ziyadbooks.official/?hl=id" target="_blank">
                            <FaInstagram className="hover:scale-110 transition" />
                        </a>

                        <a href="https://wa.me/6282243431114" target="_blank">
                            <FaWhatsapp className="hover:scale-110 transition" />
                        </a>

                        <a href="https://t.me/ZiyadbooksOfficial" target="_blank">
                            <FaTelegramPlane className="hover:scale-110 transition" />
                        </a>

                        <a href="https://www.tiktok.com/@ziyadbooks.official" target="_blank">
                            <FaTiktok className="hover:scale-110 transition" />
                        </a>
                    </div>

                    {/* SHOPEE */}
                    <div className="mt-6">
                        <a href="https://shp.ee/js9wrud" target="_blank">
                            <Image
                                src="https://seeklogo.com/images/S/shopee-logo-065D1ADCB9-seeklogo.com.png"
                                alt="Shopee"
                                width={90}
                                height={40}
                            />
                        </a>
                    </div>
                </div>
            </div>

            {/* ================= BOTTOM ================= */}
            <div className="border-t border-white/20 text-center text-xs py-4 text-white/70">
                © {new Date().getFullYear()} Ziyad Visi Media — Badan Hukum CV Ziyad Visi Media
            </div>
        </footer>
    );
}