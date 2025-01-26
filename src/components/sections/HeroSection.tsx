import { Button } from "@/components/ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-2">
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
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
          <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-200">
            <Image
              src="/images/featured.webp"
              fill
              alt="GAP"
              className="scale-110 object-cover duration-200 hover:scale-100"
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
