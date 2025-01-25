import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ProductsSection from "@/components/sections/ProductsSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import { getProducts } from "@/access-data/products";

export default async function Home() {
  const response = await getProducts({ limit: 4 });
  const { data: products } = response;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <ProductsSection products={products} />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
