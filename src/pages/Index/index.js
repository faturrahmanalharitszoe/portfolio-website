import React, { useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ImageCarousel from "../../components/image-slider";

export default function Index() {
  const pics = [
    'titipin.png',
    'seminar.png',
    'edesa grogol.png',
  ];
  const title = [
    'Titipin Store',
    'Seminar UPT Perpustakaan dan Undip Press',
    'Edesa Grogol',
  ]

  var settings = {
    dots: true,
    infinite: false,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const handleAboutMeClick = () => {
    const aboutMeSection = document.getElementById('about-me-section');
    aboutMeSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Parallax pages={4}>
      {/* First Page */}
      <ParallaxLayer offset={0} speed={0.5}>
        <div className="h-[150vh] bg-[#F6E8E8]">
          <div>
            <div className="grid grid-cols-3 justify-center p-4">
              <div></div>
              <div className="flex w-full justify-center items-center">
                <div className="mr-[49px]" onClick={handleAboutMeClick}>About Me</div>
                <img onClick={handleAboutMeClick} src="/images/logo.png" alt="Logo" className="w-[91px] h-[91px]" />
                <div className="ml-[49px]">Portfolio</div>
              </div>
              <div className="flex items-center ml-auto">
                <div className="mr-[5px] text-right">
                  Contact
                  <br />
                  Me?
                </div>
                <img src="/images/call.png" alt="Logo" className="flex w-[60px] h-[60px]" />
              </div>
            </div>
            <div className="flex justify-center mt-[80px]">
              <img src="/images/nama.png" alt="Nama" className="w-[751px] h-[248px]" />
            </div>
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.5}>
        <div className="h-[150vh] bg-[#F8F1F1]">
          <div id="about-me-section" className="min-h-screen relative bottom-[60px]">
            <ParallaxLayer offset={0.5} speed={0.5}>
              <div className="relative InknutAntiqua font-bold text-[260px] right-[20px]">About</div>
              <div className="relative InknutAntiqua font-bold text-[260px] bottom-[140px] ml-[740px]">Me</div>
              <div className="relative Inder font-normal text-[120px] bottom-[480px] ml-[200px]">A</div>
              <div className="relative Inder font-normal leading-10 text-[24px] w-[431px] bottom-[590px] ml-[290px]">s a dedicated computer science student at Diponegoro University,</div>
              <div className="relative Inder font-normal leading-10 text-[24px] w-[560px] bottom-[590px] ml-[200px]">
                I possess a strong foundation in machine learning, UI design, and front-end development. My passion for technology is matched by my determination to solve complex challenges. I am actively seeking internship opportunities or industry projects where I can contribute meaningfully and
                expand my skills, with the ultimate aim of making a significant positive impact
              </div>
            </ParallaxLayer>
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={0.5}>
        <div className="h-[150vh] bg-[#F6E8E8]">
          <div className="InknutAntiqua font-normal text-[80px] ml-[100px]">Education & Experience</div>
          <Slider {...settings} className="ml-[100px]">
            <div className="Inder w-fit">
              <img className="w-[300px] h-[350px] rounded-lg" src="/images/SMA.jpg" alt="Slide 1" />
              <div className="mt-2">
                <p className="InknutAntiqua text-[18px]">Secondary school</p>
                <p>SMAN 2 Cibinong</p>
                <p>Science</p>
                <p>2017 - 2020</p>
              </div>
            </div>
            <div className="Inder">
              <img className="w-[300px] h-[350px] rounded-lg" src="/images/Kuliah.jpg" alt="Slide 1" />
              <div className="mt-2">
                <p className="InknutAntiqua text-[18px]">University</p>
                <p>Universitas Diponegoro</p>
                <p>Computer Science</p>
                <p>2020 - now</p>
              </div>
            </div>
            <div className="w-fit">
              <img className="w-[300px] h-[350px] rounded-lg" src="/images/ex1.jpg" alt="Slide 1" />
              <div className="mt-2">
                <p className="InknutAntiqua text-[18px]">Front End Developer</p>
                <p>UPT Perpustakaan dan
                  Undip Press Universitas
                  Diponegoro</p>
                <p>January 2023 - July 2023</p>
              </div>
            </div>
            <div className="w-fit">
              <img className="w-[300px] h-[350px] rounded-lg" src="/images/ex2.jpeg" alt="Slide 1" />
              <div className="mt-2">
                <p className="InknutAntiqua text-[18px]">Machine Learning Cohort</p>
                <p>Bangkit Academy</p>
                <p>February 2023 - July 2023</p>
              </div>
            </div>
            <div className="w-fit">
              <img className="w-[300px] h-[350px] rounded-lg" src="/images/ex3.png" alt="Slide 1" />
              <div className="mt-2">
                <p className="InknutAntiqua text-[18px]">Programmer</p>
                <p>PT Pro Sistimatika Automasi (PROSIA)</p>
                <p>February 2023 - July 2023</p>
              </div>
            </div>
          </Slider>

        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={3} speed={0.5}>
        <div className="flex h-[150vh] bg-[#F8F1F1]">
          <div className="mt-9">
            <ImageCarousel images={pics} title={title} />
          </div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer>
        <div>
        </div>
      </ParallaxLayer>
    </Parallax >
  );
}
