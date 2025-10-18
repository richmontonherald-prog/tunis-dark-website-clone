import Image from 'next/image';

type Service = {
  iconUrl: string;
  title: string;
  description: string;
};

const servicesData: Service[] = [
  {
    iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/54a5e62d-9d6a-429f-84d0-20b9d864e299-slimhamdi-net/assets/icons/purple-1.png?',
    title: 'Web Design',
    description: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,',
  },
  {
    iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/54a5e62d-9d6a-429f-84d0-20b9d864e299-slimhamdi-net/assets/icons/red-2.png?',
    title: 'Web Development',
    description: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,',
  },
  {
    iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/54a5e62d-9d6a-429f-84d0-20b9d864e299-slimhamdi-net/assets/icons/blueviolet-3.png?',
    title: 'Mobile Apps',
    description: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,',
  },
  {
    iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/54a5e62d-9d6a-429f-84d0-20b9d864e299-slimhamdi-net/assets/icons/goldenrod-5.png?',
    title: 'Photography',
    description: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,',
  },
  {
    iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/54a5e62d-9d6a-429f-84d0-20b9d864e299-slimhamdi-net/assets/icons/blue-4.png?',
    title: 'SEO Marketing',
    description: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,',
  },
  {
    iconUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/54a5e62d-9d6a-429f-84d0-20b9d864e299-slimhamdi-net/assets/icons/magenta-6.png?',
    title: 'eCommerce',
    description: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,',
  },
];

const ServiceCard = ({ iconUrl, title, description }: Service) => (
  <div className="bg-[#1A1A1A] p-6 rounded-lg text-center transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
    <div className="mb-6 flex justify-center">
        <Image src={iconUrl} alt={title} width={64} height={64} />
    </div>
    <h3 className="text-xl font-semibold text-white mb-2 font-display">{title}</h3>
    <p className="text-base text-[#CCCCCC] leading-relaxed font-body">{description}</p>
  </div>
);

const ServicesSection = () => {
  return (
    <section className="bg-background-primary py-28">
      <div className="container">
        <div className="relative text-center mb-20">
          <h2 className="font-display text-[36px] font-bold uppercase text-[#FDB902] relative z-10">
            MY SERVICES
          </h2>
          <span className="font-display absolute top-1/2 left-0 right-0 -translate-y-1/2 text-[120px] font-black uppercase text-white/5 tracking-[0.1em] opacity-50">
            SERVICES
          </span>
       </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;