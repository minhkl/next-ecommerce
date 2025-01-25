import { Button } from "@/components/ui/button";

const NewsletterSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated with Our Newsletter
            </h2>
            <p className="text-gray-600 mb-6">
              Dont miss out on exclusive offers and the latest product arrivals.
              Sign up today!
            </p>
            <div className="flex gap-2">
              <Button variant="outline">Sign Up</Button>
              <Button>Explore</Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-gray-200 w-full aspect-square rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
