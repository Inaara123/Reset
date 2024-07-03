import React from 'react';
import { Button } from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion';
import { MdAddCall } from "react-icons/md";
import { MdOutlinePermContactCalendar } from "react-icons/md";

const Main = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/schedule');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/7396888150', '_blank');
  };
  

  return (
    <main className='grid-auto p-4 md:p-8 lg:p-12' >
      <section className="text-4xl xsm:text-3xl font-overlock  md:text-5xl lg:text-6xl xl:text-7xl mt-[90px] ml-[30px] font-black text-justify max-w-[754px]" style={{ color: "#3C3C3C" }}>
        Don’t let your pain stop you from living the life <span className='xl:ml-[200px]'>you want!</span>
      </section>

      <section>
      <div className='hidden lg:block w-[295px] h-[295px]  mt-[-200px] ml-[982px] lg:ml-[820px] xl:ml-[962px]    opacity-100 rounded-[200px] transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none gap-[10px]'
      >
          <motion.div 
            initial ={{x:'-100%', scale:0}}
            whileInView={{x:0, scale:1, transition: {type: 'spring', duration:0.8, stiffness: 100, damping: 10}}}
            className='w-[340px] flex-auto h-[80px] rounded-[30px]  shadow-2xl ' style={{backgroundColor:"#3C3C3C",}} >
            <p className='ml-[26px] flex mt-[20px] ' style={{ color: "#00E89B", font: "outfit", fontWeight: "600", fontSize: "40px" }}>
              .
              <span className='ml-[20px] mt-[10px] font-overlock font-black  text-white text-[40px]'>
                No Side Effects
              </span>
            </p>
          </motion.div>
          <motion.div 
            initial ={{x:'-100%', scale:0}}
            whileInView={{x:0, scale:1, transition: {type: 'spring', duration:0.8, stiffness: 100, damping: 10, delay:0.5}}}
            className='w-[300px] h-[80px] ml-[110px] rounded-[30px]  shadow-2xl '  style={{backgroundColor:"#3C3C3C"}}>
            <p className='ml-[26px] flex mt-[30px] font-outfit font-light' style={{ color: "#00E89B", font: "outfit", fontWeight: "600", fontSize: "40px" }} >
              .
              <span className='ml-[20px] mt-[10px] font-overlock font-black  text-white text-[40px]' >
                Instant Relief
              </span>
            </p>
          </motion.div>
          <motion.div 
            initial ={{x:'-100%', scale:0}}
            whileInView={{x:0, scale:1, transition: {type: 'spring', duration:0.8, stiffness: 100, damping: 10, delay:1}}}
            className='w-[300px] h-[80px] rounded-[30px]  shadow-2xl' style={{backgroundColor:"#3C3C3C"}}>
            <p className='ml-[26px] flex mt-[30px] font-outfit font-light' style={{ color: "#00E89B", font: "outfit", fontWeight: "600", fontSize: "40px" }}>
              .
              <span className='ml-[20px] mt-[10px] font-overlock font-black  text-white text-[40px]'>
                No Medicine
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      <div className='text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mt-[-60px] sm:mt-[30px] xsm:mt-[50px] md:mt-[30px] xl:mt-[5px]  ml-[30px] max-w-[1000px]'>
        <p>Relieve chronic pain <span style={{ color: "#755CF1", font: "outfit", fontWeight: "700" }}>instantly</span> with the best <span style={{ color: "rgba(74, 159, 22, 1)" }}>chiropractic</span> <br/>
        <span className='xl:ml-[150px] '>and <span style={{ color: "rgba(74, 159, 22, 1)" }}>neuropathy</span> services in Hyderabad!! </span></p>
      </div>

      <div className='mt-[30px] ml-[30px] gap-[10px] flex flex-col sm:flex-row sm:flex-wrap lg:gap-[46px] md:gap-[30px]'>
        <Button 
          onClick={handleClick}
          color="primary"
          className='w-[305px] h-[67px] rounded-[30px] text-[25px] grid-auto-fit bg-[#5233ED] mb-4 sm:mb-0
          xsm:w-[250px] xsm:text-[20px] xsm:h-[55px] '
          style={{ backgroundColor: "rgba(56, 63, 240, 1)", font: "outfit", fontWeight: "600" }}        
        >
          <MdOutlinePermContactCalendar />
          Book a Session
        </Button>
        <Button 
          color="primary" 
          
          className='w-[305px] h-[67px] rounded-[30px] text-[25px] grid-auto-fit bg-[#5233ED] mb-4 sm:mb-0
          xsm:w-[250px] xsm:text-[20px] xsm:h-[55px] '
          style={{ backgroundColor: "rgba(56, 63, 240, 1)", font: "outfit", fontWeight: "600" }}   
          onClick={handleWhatsAppClick}>
          <MdAddCall  className='ml-[-20px]'
         />
          
          Contact us
        </Button>
      </div>
    </main>
  );
}

export default Main;