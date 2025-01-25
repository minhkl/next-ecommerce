import { ShoppingBag, HeadphonesIcon, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Endless Variety: A Wide Selection to Suit Every Taste and Need",
    description:
      "Our commitment to exceptional customer service ensures a seamless shopping experience.",
    icon: ShoppingBag,
  },
  {
    title: "Dedicated Support: We're Here to Help You Every Step of the Way",
    description:
      "Reach out to our friendly team for any inquiries or assistance.",
    icon: HeadphonesIcon,
  },
  {
    title:
      "Secure Shopping: Your Information is Safe with Our Advanced Protection",
    description:
      "Shop with confidence knowing your data is protected at all times.",
    icon: ShieldCheck,
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Unmatched Quality: Products That Stand the Test of Time and Use
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
