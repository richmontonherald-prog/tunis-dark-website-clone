"use client";

import { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';

const contactInfo = [
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/54a5e62d-9d6a-429f-84d0-20b9d864e299-slimhamdi-net/assets/icons/purple-1.png",
    iconAlt: "Email icon",
    label: "MAIL ME",
    value: "you@mail.com",
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/54a5e62d-9d6a-429f-84d0-20b9d864e299-slimhamdi-net/assets/icons/red-2.png",
    iconAlt: "Phone icon",
    label: "CALL ME",
    value: "+216 21 184 010",
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/54a5e62d-9d6a-429f-84d0-20b9d864e299-slimhamdi-net/assets/icons/yellow-10.png",
    iconAlt: "Location icon",
    label: "ADDRESS",
    value: "Tunis, Tunisia",
  },
];

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: false,
        email: false,
        subject: false,
        message: false
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({...prev, [name]: value}));
        if(value.trim() !== '') {
            setErrors(prev => ({ ...prev, [name]: false }));
        }
    };

    const validateForm = () => {
      const newErrors = {
          name: !formData.name.trim(),
          email: !/^\S+@\S+\.\S+$/.test(formData.email),
          subject: !formData.subject.trim(),
          message: !formData.message.trim()
      };
      setErrors(newErrors);
      return !Object.values(newErrors).some(Boolean);
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form Submitted:", formData);
            // Handle submission, e.g., send data to an API
        } else {
            console.log("Form validation failed");
        }
    }
    
    const inputBaseClasses = "w-full bg-[#1A1A1A] border border-solid rounded-[4px] px-4 py-[14px] text-white text-[16px] placeholder:text-[#666666] focus:outline-none focus:border-[#FDB902] transition-colors duration-300";
    const errorBorderClass = "border-[#FF4444]";
    const normalBorderClass = "border-[#2B2B2B]";

  return (
    <section id="contact" className="bg-[#111111] py-20 lg:py-[120px]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 xl:px-20">
        <div className="text-center mb-12">
            <h2 className="font-bold text-[36px] text-[#FDB902] uppercase tracking-wide">
                GET IN TOUCH
            </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-x-[30px] gap-y-10">
          <div className="lg:col-span-4 flex flex-col gap-y-8">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <Image src={item.iconSrc} alt={item.iconAlt} width={48} height={48} />
                </div>
                <div>
                  <p className="text-[#CCCCCC] text-[16px] uppercase font-normal">{item.label}</p>
                  <p className="text-white text-[18px] font-bold">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[30px] gap-y-5">
                  <input
                    type="text"
                    name="name"
                    placeholder="YOUR NAME"
                    value={formData.name}
                    onChange={handleChange}
                    className={`${inputBaseClasses} ${errors.name ? errorBorderClass : normalBorderClass}`}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="YOUR EMAIL"
                    value={formData.email}
                    onChange={handleChange}
                    className={`${inputBaseClasses} ${errors.email ? errorBorderClass : normalBorderClass}`}
                  />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="YOUR SUBJECT"
                value={formData.subject}
                onChange={handleChange}
                className={`${inputBaseClasses} ${errors.subject ? errorBorderClass : normalBorderClass}`}
              />
              <textarea
                name="message"
                placeholder="YOUR MESSAGE"
                value={formData.message}
                onChange={handleChange}
                className={`${inputBaseClasses} ${errors.message ? errorBorderClass : normalBorderClass} resize-none`}
                style={{ height: '150px' }}
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-[#FDB902] text-black font-semibold text-[16px] py-[14px] px-10 rounded-[25px] hover:bg-[#FFAA00] transition-colors duration-300"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;