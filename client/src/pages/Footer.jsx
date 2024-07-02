import React from 'react';
import Contact from '../components/Contact';
import { FaPhoneAlt, FaFacebookSquare, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import locationImg from "../assets/location.png";

const Footer = () => {
  const facebookUrl = 'https://www.facebook.com/profile.php?id=61555716583779&mibextid=rS40aB7S9Ucbxw6v';
  const instagramUrl = 'https://www.instagram.com/reset_your_spine?igsh=MTE1MGwydGRlaWc0aQ==';
  const youtubeUrl = 'https://youtube.com/@resetyourspine3?si=U9iN0SU8yy6tPCKD';

  const handleFacebookClick = () => {
    window.open(facebookUrl, '_blank');
  };

  const handleInstagramClick = () => {
    window.open(instagramUrl, '_blank');
  };

  const handleYouTubeClick = () => {
    window.open(youtubeUrl, '_blank');
  };

  const style = {
    backgroundColor: 'rgba(83, 88, 111, 0.27)', 
  };

  return (
    <main className='shadow-2xl w-auto lg:w-[1300px] h-auto lg:h-[600px] mb- mt-[100px] mx-[20px] lg:mx-[80px] rounded-[30px] flex flex-col lg:flex-row' style={style}>
      <section className='w-full lg:w-1/2 p-4'>
        <Contact />
      </section>
      <div className='w-full lg:w-1/2 p-4 flex flex-col items-start lg:items-center'>
        <p className='font-outfit font-medium text-custom-blue text-[32px] ml-[200px] xsm:ml-[70px] sm:ml-[200px] md:ml-[200px] mt-8 lg:mt-[200px] lg:ml-[-600px]' style={{ color: "#152344" }}>
          Location
        </p>
        <p className='mt-4 lg:mt-8 lg:ml-[-130px] xsm:ml-[10px] xsm:mr-[30px] lg:mr-[350px] text-[18px] sm:ml-[100px] md:ml-[100px] sm:mr-[100px] md:mr-[100px] ml-[100px] mr-[100px] text-custom-blue'>
          KS bakery, back side, Madhava Nagar Colony, Ambedkar Nagar, Hafeezpet, Hyderabad, Telangana 500049
        </p>

        <p className='mt-4 text-[20px] text-custom-blue xsm:text-[18px] lg:ml-[-500px] xsm:ml-[10px] flex flex-row gap-[10px] sm:ml-[100px] md:ml-[100px] sm:mr-[100px] md:mr-[100px] ml-[100px] mr-[100px]'>
          <FaPhoneAlt className='mt-[8px]' />
          +91-9192939495
        </p>
        <p className='mt-8 text-[20px] text-custom-blue xsm:text-[18px] lg:ml-[-380px] xsm:ml-[10px] flex flex-row gap-[20px] ml-[100px] sm:ml-[100px] md:ml-[100px] sm:mr-[100px] md:mr-[100px] mr-[100px]'>
          <MdEmail className='mt-[10px]' />
          resetwellnesscenter@gmail.com
        </p>
        <p className='font-outfit font-medium text-[32px] mt-8 xsm:ml-[10px] lg:ml-[-540px] sm:ml-[100px] md:ml-[100px] sm:mr-[100px] md:mr-[100px] ml-[100px] mr-[100px]' style={{ color: "#152344" }}>
          Follow us
        </p>
        <div className='flex text-custom-blue flex-row gap-8 mt-4 lg:mt-8 xsm:ml-[10px] lg:ml-[-500px] sm:ml-[100px] md:ml-[100px] sm:mr-[100px] md:mr-[100px] ml-[100px] mr-[100px]'>
          <a href={facebookUrl} target="_blank" rel="noopener noreferrer" onClick={handleFacebookClick}>
            <FaFacebookSquare size={40} />
          </a>
          <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" onClick={handleYouTubeClick}>
            <FaYoutube size={40} />
          </a>
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer" onClick={handleInstagramClick}>
            <FaInstagramSquare size={40} />
          </a>
        </div>
        <div className='relative mt-8 lg:mt-16 w-full flex justify-center'>
          <div className='h-[280px] w-[280px] rounded-[20px] hidden xl:block 2xl:block lg:mt-[-430px] lg:ml-[280px]' style={{ backgroundColor: "#DBFFEB" }}></div>
          <img src={locationImg} alt="Location" height={183} width={183} className='hidden xl:block 2xl:block absolute top-16 lg:mt-[-440px] lg:ml-[280px]' />
        </div>
      </div>
    </main>
  );
};

export default Footer;
