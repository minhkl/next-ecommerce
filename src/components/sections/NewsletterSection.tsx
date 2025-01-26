import { Button } from "@/components/ui/button";

const NewsletterSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Stay Updated with Our Newsletter
            </h2>
            <p className="mb-6 text-gray-600">
              Dont miss out on exclusive offers and the latest product arrivals.
              Sign up today!
            </p>
            <div className="flex gap-2">
              <Button variant="outline">Sign Up</Button>
              <Button>Explore</Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="aspect-square w-full rounded-lg bg-gray-200"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
