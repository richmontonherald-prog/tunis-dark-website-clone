import Image from "next/image";
import { Check } from "lucide-react";

interface Plan {
  icon: string;
  name: string;
  price: number;
  features: string[];
  highlighted: boolean;
}

const pricingPlansData: Plan[] = [
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/54a5e62d-9d6a-429f-84d0-20b9d864e299-slimhamdi-net/assets/icons/yellowgreen-7.png?",
    name: "BASIC PLAN",
    price: 15,
    features: ["Web Design", "Graphic Design"],
    highlighted: false,
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/54a5e62d-9d6a-429f-84d0-20b9d864e299-slimhamdi-net/assets/icons/orange-8.png?",
    name: "STANDARD PLAN",
    price: 25,
    features: ["Web Design", "Graphic Design", "Web Development"],
    highlighted: true,
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/54a5e62d-9d6a-429f-84d0-20b9d864e299-slimhamdi-net/assets/icons/green-9.png?",
    name: "PREMIUM PLAN",
    price: 40,
    features: [
      "Web Design",
      "Graphic Design",
      "Web Development",
      "Brand Identity",
      "SEO Optimization",
    ],
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <div className="bg-[#111111] py-20">
      <div className="container">
        <h2 className="text-center text-[36px] font-bold uppercase text-[#FDB902] mb-16">
          PRICING PLANS
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px]">
          {pricingPlansData.map((plan, index) => (
            <div
              key={index}
              className={`
                bg-[#1A1A1A] rounded-lg py-10 px-8 text-center flex flex-col items-center
                transition-transform duration-300
                ${
                  plan.highlighted
                    ? "lg:scale-105 border-2 border-[#FDB902]"
                    : "border-2 border-transparent"
                }
              `}
            >
              <Image src={plan.icon} alt={`${plan.name} icon`} width={64} height={64} unoptimized />
              <h3 className="mt-5 text-2xl font-semibold uppercase text-white">
                {plan.name}
              </h3>
              <div className="my-6 flex items-baseline">
                <span className="text-5xl font-bold text-[#FDB902]">${plan.price}</span>
                <span className="ml-1 text-lg text-[#CCCCCC]">/Hour</span>
              </div>
              <ul className="mb-10 flex-grow self-stretch space-y-3 text-left">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start text-base leading-[2.2] text-[#E5E5E5]"
                  >
                    <Check className="mr-3 mt-1 h-5 w-5 shrink-0 text-[#FDB902]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="mt-auto block rounded-[25px] border-2 border-[#FDB902] py-3 px-8 font-semibold uppercase tracking-wider text-white transition-colors duration-300 hover:bg-[#FDB902] hover:text-[#111111]"
              >
                CHOOSE PLAN
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;