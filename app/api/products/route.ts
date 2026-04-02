import { NextResponse } from "next/server";
import { getProducts } from "@/lib/api";

export async function GET() {
    try {
        const data = await getProducts();
        if (!data) return NextResponse.json({ error: "Gagal fetch produk" }, { status: 500 });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: "Gagal fetch produk" }, { status: 500 });
    }
}
