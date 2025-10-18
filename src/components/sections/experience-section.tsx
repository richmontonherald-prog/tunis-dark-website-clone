import { Briefcase, GraduationCap } from 'lucide-react';

const experienceData = [
  {
    year: "2018 - Present",
    title: "Web Developer",
    company: "Envato",
    description: "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,",
  },
  {
    year: "2013 - 2018",
    title: "UI/UX Designer",
    company: "Themeforest",
    description: "Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt",
  },
  {
    year: "2005 - 2013",
    title: "Consultant",
    company: "Videohive",
    description: "Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt",
  },
];

const educationData = [
  {
    year: "2015",
    title: "Engineering Degree",
    school: "Oxford University",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore",
  },
  {
    year: "2013-2017",
    title: "Bachelor Degree",
    school: "Tunis High School",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore",
  },
];

const ExperienceSection = () => {
  return (
    <section className="bg-[#111111] py-20">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-10 lg:px-20">
        <h3 className="pb-12 text-center text-4xl font-bold uppercase text-[#FDB902]">
          Experience <span>&amp;</span> Education
        </h3>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <ul className="space-y-9 border-l border-solid border-[#2B2B2B]">
              {experienceData.map((item, index) => (
                <li key={index} className="relative pl-12">
                  <div className="absolute -left-3 top-1.5 bg-[#111111] p-0.5">
                    <Briefcase className="h-5 w-5 text-[#FDB902]" />
                  </div>
                  <span className="inline-block rounded-[20px] bg-[#FDB902] px-4 py-1.5 text-sm font-semibold uppercase text-white">
                    {item.year}
                  </span>
                  <h5 className="mt-3 text-lg font-semibold uppercase text-white">
                    {item.title}{' '}
                    <span className="text-base font-normal normal-case text-[#FDB902]">
                      - {item.company}
                    </span>
                  </h5>
                  <p className="mt-2 text-[15px] leading-[1.7] text-[#CCCCCC]">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="space-y-9 border-l border-solid border-[#2B2B2B]">
              {educationData.map((item, index) => (
                <li key={index} className="relative pl-12">
                  <div className="absolute -left-3 top-1.5 bg-[#111111] p-0.5">
                    <GraduationCap className="h-5 w-5 text-[#FDB902]" />
                  </div>
                  <span className="inline-block rounded-[20px] bg-[#FDB902] px-4 py-1.5 text-sm font-semibold uppercase text-white">
                    {item.year}
                  </span>
                   <h5 className="mt-3 text-lg font-semibold uppercase text-white">
                    {item.title}{' '}
                    <span className="text-base font-normal normal-case text-[#FDB902]">
                      - {item.school}
                    </span>
                  </h5>
                  <p className="mt-2 text-[15px] leading-[1.7] text-[#CCCCCC]">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;