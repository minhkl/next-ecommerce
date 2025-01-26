import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ProductsSection from "@/components/sections/ProductsSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import { getProducts } from "@/access-data/products";
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Ecom",
};

export default async function Home() {
  const response = await getProducts({ limit: 4 });
  const { data: products } = response;

  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Next Ecom</title>
      </Head>
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
