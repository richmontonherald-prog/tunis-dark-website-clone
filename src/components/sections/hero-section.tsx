import Image from 'next/image';
import AnimatedButton from "@/components/ui/animated-button";

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen bg-[#111111] text-white flex items-center font-poppins">
      <div className="fixed top-0 left-0 h-full w-[75px] bg-[#FDB902] hidden lg:block z-0" />
      <div className="container mx-auto w-full px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-none mt-16 lg:mt-0">
            {/* Desktop Image */}
            <div className="hidden lg:block w-[420px] h-[520px] bg-black rounded-[40px] p-2.5 shadow-2xl">
              <div className="relative w-full h-full">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/54a5e62d-9d6a-429f-84d0-20b9d864e299-slimhamdi-net/assets/images/dark-1.jpg?"
                  alt="John Keys profile picture"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-[30px]"
                  priority
                />
              </div>
            </div>
            
            {/* Mobile Image */}
            <div className="lg:hidden w-[280px] h-[340px] sm:w-[320px] sm:h-[390px] bg-black rounded-[40px] p-2 shadow-xl">
              <div className="relative w-full h-full">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/54a5e62d-9d6a-429f-84d0-20b9d864e299-slimhamdi-net/assets/images/dark-1.jpg?"
                  alt="John Keys profile picture"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-[32px]"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-none pb-16 lg:pb-0">
            <div className="flex items-center justify-center lg:justify-start gap-x-4 mb-5">
               <span className="w-[40px] h-0.5 bg-[#FDB902]" />
               <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-[56px] leading-none text-[#FDB902] uppercase tracking-tight">
                    I'M JOHN KEYS.
               </h1>
            </div>
            
            <h2 className="font-bold text-3xl sm:text-4xl lg:text-[48px] leading-tight uppercase mb-6 tracking-wide">
               VISIONARY TECH LEADER
            </h2>

            <p className="text-[18px] text-[#CCCCCC] mx-auto lg:mx-0 max-w-xl mb-10" style={{ lineHeight: 1.8 }}>
              I'm a technology visionary and strategic leader focused on driving innovation and digital transformation. Passionate about building cutting-edge solutions that shape the future and empower organizations to achieve breakthrough success.
            </p>

            <AnimatedButton
              onClick={() => onNavigate("about")}
              icon={
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/54a5e62d-9d6a-429f-84d0-20b9d864e299-slimhamdi-net/assets/icons/right-arrow-12.png?"
                  alt="arrow right"
                  width={16}
                  height={16}
                  style={{ filter: "brightness(0)" }}
                />
              }
            >
              MORE ABOUT ME
            </AnimatedButton>
          </div>
        </div>
      </div>
    </section>
  );
}