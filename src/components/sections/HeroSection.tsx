import { Button } from "@/components/ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Discover Our Best-Selling Product Today!
          </h1>
          <p className="text-lg text-gray-600">
            Experience the quality and innovation of our featured product. Dont
            miss out on the chance to elevate your shopping experience!
          </p>
          <div className="flex gap-4">
            <Button>Shop</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-gray-200 w-full aspect-square rounded-lg relative overflow-hidden">
            <Image
              src="/images/featured.webp"
              fill
              alt="GAP"
              className="object-cover"
              priority
              sizes="50vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
