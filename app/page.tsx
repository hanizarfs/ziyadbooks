import { getProducts } from "@/lib/api";
import { Product } from "@/src/types/product";

import NavbarHero from "@/components/layout/NavbarHero";
import TrustSection from "@/components/sections/TrustSection";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import AllProducts from "@/components/sections/AllProducts";
import PromoSection from "@/components/sections/PromoSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import CTASection from "@/components/sections/CTASection";
// import Footer from "@/components/layout/Footer";

export default async function LandingPage() {
  const res = await getProducts();
  const products: Product[] = res?.data?.data || [];

  return (
    <>
      <NavbarHero products={products} />
      <TrustSection />
      <FeaturedProducts products={products} />
      <AllProducts products={products} />
      <PromoSection />
      <TestimonialSection />
      <CTASection />
      {/* <Footer /> */}
    </>
  );
}