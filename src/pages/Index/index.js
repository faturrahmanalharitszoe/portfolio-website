import React, { useEffect, useRef, useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ImageCarousel from "../../components/image-slider";
import ExperienceCard from "../../components/ExperienceCard";

// Extract Sections Outside to prevent unmounting on state change
const HeroSection = ({ handleAboutMeClick, handlePortfolioClick, isContactOpen, setIsContactOpen, contactRef }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    className="min-h-screen flex flex-col relative"
  >
    <nav className="flex justify-between items-center px-6 md:px-12 py-6 md:py-8 z-50">
      <motion.img
        whileHover={{ rotate: 10, scale: 1.1 }}
        onClick={handleAboutMeClick}
        src="/images/logo.png"
        alt="Logo"
        className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] cursor-pointer"
      />
      <div className="flex gap-4 md:gap-12 items-center">
        <div className="Inter font-medium text-sm md:text-base cursor-pointer hover:text-blue-600 transition-colors" onClick={handleAboutMeClick}>About</div>
        <div className="Inter font-medium text-sm md:text-base cursor-pointer hover:text-blue-600 transition-colors" onClick={handlePortfolioClick}>Portfolio</div>
        <div className="relative" ref={contactRef}>
          <div
            className="hidden sm:flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer group"
            onClick={() => setIsContactOpen(!isContactOpen)}
          >
            <div className="text-right">
              <p className="Inter text-[10px] uppercase tracking-widest text-gray-400 font-bold group-hover:text-blue-500 transition-colors">Contact Me</p>
              <p className="Inter font-bold text-sm">Let's talk</p>
            </div>
            <img src="/images/call.png" alt="Call" className="w-[40px] h-[40px]" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={isContactOpen ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 10 }}
            style={{ pointerEvents: isContactOpen ? "auto" : "none" }}
            className="absolute top-full mt-4 right-0 w-64 premium-card p-4 rounded-[24px] shadow-xl z-[100]"
          >
            <div className="flex flex-col gap-2">
              <a href="https://wa.me/6281212574085" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl hover:bg-green-50 transition-colors group">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-colors">
                  <i className="fab fa-whatsapp text-lg"></i>
                </div>
                <div>
                  <p className="Inter font-bold text-sm">WhatsApp</p>
                  <p className="Inter text-[10px] text-gray-400 uppercase tracking-tighter">Instant Message</p>
                </div>
              </a>
              <a href="https://linkedin.com/in/faturrahman-alharitszoe" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-colors group">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <i className="fab fa-linkedin-in text-lg"></i>
                </div>
                <div>
                  <p className="Inter font-bold text-sm">LinkedIn</p>
                  <p className="Inter text-[10px] text-gray-400 uppercase tracking-tighter">Professional Profile</p>
                </div>
              </a>
              <a href="mailto:faturrahmanalharitszoe@gmail.com" className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-800 group-hover:text-white transition-colors">
                  <i className="far fa-envelope text-lg"></i>
                </div>
                <div>
                  <p className="Inter font-bold text-sm">Email</p>
                  <p className="Inter text-[10px] text-gray-400 uppercase tracking-tighter">Send an Inquiry</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </nav>

    <div className="flex-grow flex flex-col justify-center items-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="glass px-6 md:px-16 py-8 md:py-12 rounded-[30px] md:rounded-[50px] flex flex-col gap-0 relative group max-w-full overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[30px] md:rounded-[50px]"></div>
        <h1 className="InknutAntiqua text-3xl sm:text-6xl md:text-8xl font-black text-gray-900 leading-[0.9] tracking-tighter">Faturrahman</h1>
        <h1 className="InknutAntiqua text-3xl sm:text-6xl md:text-8xl font-black text-blue-600/80 leading-[0.9] tracking-tighter ml-4 sm:ml-12 md:ml-24 mt-2">Alharitszoe</h1>
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="mt-12 md:mt-20 flex flex-col items-center gap-2 cursor-pointer opacity-40 hover:opacity-100 transition-opacity"
        onClick={handleAboutMeClick}
      >
        <span className="Inter text-[10px] uppercase tracking-[0.3em] font-bold">Scroll Down</span>
        <div className="w-[1px] h-12 bg-black"></div>
      </motion.div>
    </div>
  </motion.div>
);

const AboutSection = ({ isMobile }) => (
  <div id="about-section" className="min-h-screen flex flex-col justify-center relative px-6 md:px-20 py-20 overflow-hidden">
    {!isMobile && (
      <>
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} className="InknutAntiqua font-bold text-[60px] md:text-[180px] leading-none text-gray-300/50 select-none absolute top-20 left-20">About</motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} className="InknutAntiqua font-bold text-[60px] md:text-[180px] leading-none text-gray-300/50 select-none absolute bottom-20 right-20">Me</motion.div>
      </>
    )}
    <div className="relative z-10 glass p-8 md:p-12 rounded-[30px] md:rounded-[40px] max-w-4xl mx-auto shadow-2xl overflow-hidden group">
      <h2 className="InknutAntiqua text-2xl md:text-4xl mb-6 text-gray-800">Hi, I'm Fatur</h2>
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="Inter font-medium leading-relaxed text-[16px] md:text-[24px] relative text-gray-900">
        A software developer based in Jakarta, currently working as an IT Programmer at PT. Resik Cemerlang. I've grown from building web apps and exploring machine learning at Bangkit Academy, to delivering real-world tech solutions across diverse industries. I'm passionate about writing clean code and continuously leveling up my craft.      </motion.div>
    </div>
  </div>
);

const EducationSection = ({ settings }) => (
  <div className="min-h-screen flex flex-col justify-center py-20 bg-gray-50/50">
    <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} className="InknutAntiqua font-normal text-[32px] md:text-[60px] px-6 md:px-[100px] mb-10">Education & Experience</motion.h2>
    <div className="px-4 md:px-12 overflow-hidden" style={{ contain: 'content' }}>
      <div className="will-change-transform" style={{ transform: 'translate3d(0,0,0)' }}>
        <Slider {...settings}>
          <ExperienceCard image="/images/pt_resik_cemerlang_logo.jpg" title="Information Technology Programmer" subtitle="PT. Resik Cemerlang · Contract" period="Okt 2024 - Saat ini" />
          <ExperienceCard image="/images/infomedianusantara_logo.jpg" title="Bidding Management" subtitle="PT. INFOMEDIA NUSANTARA · Intership" period="Jun 2024 - Okt 2024" />
          <ExperienceCard image="/images/ex3.png" title="Programmer" subtitle="PROSIA · Intership" period="Oct 2023 - April 2024" />
          <ExperienceCard image="/images/ex2.jpeg" title="Machine Learning" subtitle="Bangkit Academy" period="Feb 2023 - July 2023" />
          <ExperienceCard image="/images/ex1.jpg" title="Front End Developer" subtitle="UPT Perpustakaan & Undip Press" period="Jan 2023 - July 2023" />
          <ExperienceCard image="/images/Kuliah.jpg" title="University" subtitle="Universitas Diponegoro" period="2020 - now" />
          <ExperienceCard image="/images/SMA.jpg" title="Secondary School" subtitle="SMAN 2 Cibinong" period="2017 - 2020" />
        </Slider>
      </div>
    </div>
  </div>
);

const PortfolioSection = ({ pics, title }) => (
  <div id="portfolio-section" className="min-h-screen flex flex-col justify-center py-20">
    <div className="px-4">
      <ImageCarousel images={pics} title={title} />
    </div>
  </div>
);

export default function Index() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const parallax = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (contactRef.current && !contactRef.current.contains(event.target)) {
        setIsContactOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const pics = ['titipin.png', 'seminar.png', 'edesa grogol.png'];
  const titleArr = ['Titipin Store', 'Seminar UPT Perpustakaan dan Undip Press', 'Edesa Grogol'];

  const settings = {
    dots: true, infinite: false, swipeToSlide: true, speed: 300, useCSS: true, lazyLoad: 'progressive',
    cssEase: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)', slidesToShow: isMobile ? 1 : 3, slidesToScroll: 1,
    responsive: [{ breakpoint: 1024, settings: { slidesToShow: 2 } }, { breakpoint: 640, settings: { slidesToShow: 1 } }]
  };

  const handleAboutMeClick = () => {
    if (isMobile) { document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' }); }
    else if (parallax.current) { parallax.current.scrollTo(1); }
  };

  const handlePortfolioClick = () => {
    if (isMobile) { document.getElementById('portfolio-section').scrollIntoView({ behavior: 'smooth' }); }
    else if (parallax.current) { parallax.current.scrollTo(3); }
  };

  if (isMobile) {
    return (
      <div className="bg-[#fcfaf9] text-gray-900 overflow-x-hidden">
        <div className="relative z-10">
          <HeroSection handleAboutMeClick={handleAboutMeClick} handlePortfolioClick={handlePortfolioClick} isContactOpen={isContactOpen} setIsContactOpen={setIsContactOpen} contactRef={contactRef} />
          <AboutSection isMobile={isMobile} />
          <EducationSection settings={settings} />
          <PortfolioSection pics={pics} title={titleArr} />
        </div>
      </div>
    );
  }

  return (
    <Parallax pages={4} ref={parallax} style={{ top: '0', left: '0' }}>
      <ParallaxLayer offset={0} speed={0} factor={4} style={{ backgroundColor: '#fcfaf9', zIndex: -1, transform: 'translate3d(0,0,0)' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[-5%] w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(96,165,250,0.1)_0%,transparent_70%)] rounded-full"></div>
          <div className="absolute top-[50%] right-[-5%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(192,132,252,0.1)_0%,transparent_70%)] rounded-full"></div>
          <div className="absolute bottom-[10%] left-[20%] w-[250px] h-[250px] bg-[radial-gradient(circle,rgba(244,114,182,0.08)_0%,transparent_70%)] rounded-full"></div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.2}>
        <HeroSection handleAboutMeClick={handleAboutMeClick} handlePortfolioClick={handlePortfolioClick} isContactOpen={isContactOpen} setIsContactOpen={setIsContactOpen} contactRef={contactRef} />
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.1}>
        <div className="flex flex-col h-screen px-20 pt-20">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} className="InknutAntiqua font-bold text-[180px] leading-none text-gray-300 select-none">About</motion.div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={1.2} speed={0.2}>
        <div className="flex flex-col h-screen px-20 items-end justify-end pb-40">
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} className="InknutAntiqua font-bold text-[180px] leading-none text-gray-300 select-none mr-20">Me</motion.div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={1.1} speed={0.4}>
        <AboutSection isMobile={isMobile} />
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={0.3}>
        <EducationSection settings={settings} />
      </ParallaxLayer>
      <ParallaxLayer offset={3} speed={0.5}>
        <PortfolioSection pics={pics} title={titleArr} />
      </ParallaxLayer>
    </Parallax>
  );
}
