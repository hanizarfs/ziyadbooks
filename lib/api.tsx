export async function getProducts() {

    try {
        const res = await fetch(
            "https://api-dev.ziyadbooks.com/api/v1/ecommerce/auth/products/all/category",
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxNiIsImVtYWlsIjoiZXNwbG9yYW1lZGlhQGdtYWlsLmNvbSIsImlhdCI6MTc3NTAwMzYwMCwiZXhwIjoxNzc1MTMzMjAwfQ.QUJXtxQMd8FSQ38B1LTncQ2dgNQd_8Tv1YPB121u7W4`,
                    "Content-Type": "application/json",
                },
                next: { revalidate: 60 }, // ✅ refresh cache tiap 60 detik
            }
        );

        if (!res.ok) {
            throw new Error("Gagal fetch data");
        }

        const data = await res.json();
        console.log("API RESPONSE:", data);

        return data;
    } catch (error) {
        console.error("ERROR FETCH:", error);
        return null;
    }
}