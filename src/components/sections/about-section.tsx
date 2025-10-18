"use client";

import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

type PersonalInfo = {
  title: string;
  value: string;
};

type Stat = {
  value: string;
  line1: string;
  line2: string;
};

const personalInfos: PersonalInfo[] = [
  { title: 'first name :', value: 'John' },
  { title: 'last name :', value: 'Keys' },
  { title: 'Age :', value: '27 Years' },
  { title: 'Nationality :', value: 'Tunisian' },
  { title: 'Freelance :', value: 'Available' },
  { title: 'Address :', value: 'Tunis' },
  { title: 'phone :', value: '+21621184010' },
  { title: 'Email :', value: 'you@mail.com' },
  { title: 'Skype :', value: 'john.keys' },
  { title: 'langages :', value: 'French, English' },
];

const statsData: Stat[] = [
  { value: '12+', line1: 'Years of', line2: 'experience' },
  { value: '97+', line1: 'completed', line2: 'projects' },
  { value: '81+', line1: 'Happy', line2: 'customers' },
  { value: '53+', line1: 'awards', line2: 'won' },
];

const AboutSection = () => {
  const infoLeft = personalInfos.slice(0, 5);
  const infoRight = personalInfos.slice(5, 10);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] }
    }
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.65, 0, 0.35, 1] }
    }
  };

  return (
    <div id="about" className="bg-[#111111] py-28 text-white font-poppins">
      <div className="container mx-auto px-5 lg:px-20">
        <motion.div 
          className="relative mb-20 text-left sm:text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
        >
          <h2 className="text-[36px] font-bold uppercase">
            ABOUT <span className="text-[#FDB902]">ME</span>
          </h2>
          <span className="absolute text-[110px] font-extrabold text-white/[.04] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -z-0 uppercase select-none leading-none">
            Resume
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12">
          <div className="lg:col-span-5 xl:col-span-6">
            <motion.h3 
              className="text-2xl font-bold uppercase mb-7 text-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              PERSONAL INFOS
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
              <motion.ul 
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {infoLeft.map((info, i) => (
                  <motion.li 
                    key={`left-${i}`} 
                    className="text-[20px] leading-relaxed"
                    variants={itemVariants}
                  >
                    <span className="capitalize text-white mr-2">{info.title}</span>
                    <span className="font-semibold text-[#ccc] block sm:inline-block lg:block xl:inline-block">{info.value}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.ul 
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {infoRight.map((info, i) => (
                  <motion.li 
                    key={`right-${i}`} 
                    className="text-[20px] leading-relaxed"
                    variants={itemVariants}
                  >
                    <span className="capitalize text-white mr-2">{info.title}</span>
                    <span className="font-semibold text-[#ccc] block sm:inline-block lg:block xl:inline-block break-all">{info.value}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
            <motion.a 
              href="#" 
              className="mt-8 inline-flex items-center gap-3 rounded-full border-2 border-[#FDB902] px-10 py-4 text-sm font-semibold uppercase text-white transition-all duration-300 hover:bg-[#FDB902] hover:text-black hover:shadow-[0_0_20px_rgba(253,185,2,0.4)] group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>DOWNLOAD CV</span>
              <motion.div
                animate={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Download className="h-5 w-5" />
              </motion.div>
            </motion.a>
          </div>

          <div className="lg:col-span-7 xl:col-span-6 mt-12 lg:mt-0">
            <motion.div 
              className="grid grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {statsData.map((stat, i) => (
                <motion.div 
                  key={i} 
                  className="rounded-lg border border-white/10 p-6 hover:border-[#FDB902] transition-all duration-300 hover:shadow-[0_0_20px_rgba(253,185,2,0.2)] group"
                  variants={statVariants}
                  whileHover={{ y: -5 }}
                >
                  <motion.h3 
                    className="text-[40px] font-bold leading-none text-[#FDB902]"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1, type: "spring", stiffness: 200 }}
                  >
                    {stat.value}
                  </motion.h3>
                  <p className="relative mt-4 pl-8 text-[15px] uppercase text-[#ccc] before:absolute before:left-0 before:top-1/2 before:h-[1px] before:w-6 before:bg-white/30 before:content-[''] group-hover:text-white transition-colors duration-300">
                    {stat.line1} <span className="block">{stat.line2}</span>
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;