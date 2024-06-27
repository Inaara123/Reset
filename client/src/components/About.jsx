import React from 'react';
import grp1 from '../assets/Group1.png';
import line17 from '../assets/Line 17.png';
import line21 from '../assets/Line 21.png';
import line23 from '../assets/Line 23.png';
import grp2 from '../assets/Group2.png';
import grp3 from '../assets/Group3.png';
import {motion} from 'framer-motion';


const About = () => {
  return (
    <main className='mb-[80px] '>
      <div 
        className='ml-0 flex mt-[100px] h-auto' 
        style={{ backgroundColor: "#6D68D2" }}
      >
       <div 
        className='mx-auto my-8 sm:my-12 lg:my-16 max-w-full sm:max-w-lg lg:max-w-2xl rounded-[30px] p-4' 
        style={{ backgroundColor: "#B69CFF" }}
        
    >
        <img 
            className='w-full h-auto rounded-[30px]' 
            src={grp1} 
            alt="Image Description"
            
        />
    </div>
      </div>
       
      
      <div className='mt-[70px] ml-[30px]'>
        <p 
          className='font-outfit font-bold text-[48px]'
          style={{ color: "#15155F" }}
        >
          Neurotherapy
        </p>
        <p 
          className='font-outfit font-medium text-[32px] mt-[32px] mr-[650px] xsm:mr-[20px] sm:mr-[100px] md:mr-[150px] lg:mr-[650px]
          lg:text-[32px] md:text-[32px] sm:text-[32px] xsm:text-[28px]'
          style={{ color: "#15155F" }}
        >
          <span style={{ color: "#0095D9" }}>Experience </span>
          a new <span style={{ color: "#755CF1" }}>stress free </span>
          calm that you haven't experienced in a long time.
        </p>
        <p 
          className='mt-[40px] font-outfit font-medium text-[32px] mr-[380px] xsm:mr-[20px] sm:mr-[80px] md:mr-[120px] lg:mr-[380px]
          lg:text-[32px] md:text-[32px] sm:text-[32px] xsm:text-[28px]'
          style={{ color: "#15155F" }}
        >
          We understand your life is filled with stress, the fast paced life, office deadlines and a 100 other things that are leaving you completely disturbed.
        </p>
      </div>
      
      <div 
        className='ml-[30px] flex mt-[50px] w-[700px] h-[70px] rounded-[30px] items-center justify-center
            xsm:w-[330px]
            sm:w-[640px]
            lg:w-[700px]'
        style={{ backgroundColor: "#5233ED" }}
      >
        <p 
          className='font-outfit font-medium text-[32px] text-white 
          xsm:text-[18px] md:text-[32px sm:text-[32px] lg:text-[32px] '
          
        >
          Three ways Neurotherapy will impact 
        </p>
      </div>
      
      <img 
        src={line17}
        className='ml-[50px] mt-[-2px]' 
      />
      <img 
        src={line21}
        className='ml-[45px] mt-[-190px] flex'
      />
      
      <motion.div 
      initial = {{x:"-100%", opacity: 0}}
      viewport={{once: true}}
      whileInView={{x: 0, opacity:1, transition: {staggerChildren: true, delayChildren: 0.2, duration: 0.4, type: 'spring', damping: 12, stiffness:100}}}
        className='ml-[110px] mt-[-30px] w-[452px] h-[61px] rounded-[30px] border-black border-[3px]
        xsm:w-[270px] sm:w-[452px] md:w-[452px] lg:w-[452px]'
      >
        <p 
          className='ml-[20px] mt-[4px] font-outfit font-semibold text-[28px] xsm:text-[18px] sm:text-[28px] md:text-[28px] lg:text-[28px]'
          style={{ color: "#232269" }}
        >
          Improves Attention and Focus
        </p>
        <img 
          src={line23}
          className='ml-[445px] mt-[-20px] hidden lg:block'
        />
        <div 
          className='ml-[507px] mt-[-35px] w-[442px] h-[59px] hidden lg:block rounded-[30px]'
          style={{ backgroundColor: "#755CF1" }}
        >
          <p 
            className='text-white font-outfit font-semibold text-[28px] ml-[40px] pt-[5px]'
          >
            Effective for treating ADHD.
          </p>
        </div>
      </motion.div>
      
      <img 
        src={line21}
        className='ml-[45px] mt-[50px] flex'
      />
      
      <motion.div 
      initial = {{x:"-100%", opacity:0}}
      viewport={{once: true}}
      whileInView={{x: 0, opacity:1, transition: {staggerChildren: true, delayChildren: 0.2, duration: 0.4, type: 'spring', damping: 12, stiffness:100, delay: 0.4}}}
        className='ml-[110px] mt-[-30px] w-[452px] h-[61px] rounded-[30px] brder border-black border-[3px]
        xsm:w-[270px] sm:w-[452px] md:w-[452px] lg:w-[452px]'
      >
        <p
          className='ml-[20px] mt-[4px] font-outfit font-semibold text-[28px]
          xsm:text-[18px] sm:text-[28px] md:text-[28px] lg:text-[28px]'
          style={{ color: "#232269" }}
        >
          Reduces Anxiety and Depression
        </p>
        <img 
          src={line23}
          className='ml-[445px] mt-[-20px] hidden lg:block'
        />
        <div 
          className='ml-[507px] mt-[-35px] w-[700px] h-[59px]  rounded-[30px] hidden lg:block'
          style={{ backgroundColor: "#755CF1" }}
        >
          <p 
            className='text-white font-outfit font-semibold text-[28px] ml-[40px] pt-[5px] hidden lg:block'
          >
            Helps manage symptoms of anxiety and depression.
          </p>
        </div>
      </motion.div>
      
      <img 
        src={line21}
        className='ml-[45px] mt-[55px] flex'
      />
      
      <motion.div 
      initial = {{x:"-100%", opacity: 0}}
      viewport={{once: true}}
      whileInView={{x: 0, opacity:1, transition: {staggerChildren: true, delay:0.8, delayChildren: 0.2, duration: 0.4, type: 'spring', damping: 12, stiffness:100}}}
        className='ml-[110px] mt-[-30px] w-[452px] h-[61px] rounded-[30px] brder border-black border-[3px]
        xsm:w-[270px] sm:w-[452px] md:w-[452px] lg:w-[452px]'
      >
        <p 
          className='ml-[20px] mt-[4px] font-outfit font-semibold text-[28px]
          xsm:text-[18px] sm:text-[28px] md:text-[28px] lg:text-[28px]'
          style={{ color: "#232269" }}
        >
          Enhances Sleep Quality
        </p>
        <img 
          src={line23}
          className='ml-[445px] mt-[-20px] hidden lg:block'
        />
        <div 
          className='ml-[507px] mt-[-35px] w-[570px] h-[59px]  rounded-[30px] hidden lg:block'
          style={{ backgroundColor: "#755CF1" }}
        >
          <p 
            className='text-white font-outfit font-semibold text-[28px] ml-[40px] pt-[5px] hidden lg:block'
          >
            Addresses sleep disorders for better rest.
          </p>
        </div>
      </motion.div>
      <div 
        className='ml-0 flex mt-[100px] h-auto' 
        style={{ backgroundColor: "#6D68D2" }}
      >
       <div 
        className='mx-auto my-8 sm:my-12 lg:my-16 max-w-full sm:max-w-lg lg:max-w-2xl rounded-[30px] p-4' 
        style={{ backgroundColor: "#B69CFF" }}
        
    >
        <img 
            className='w-full h-auto rounded-[30px]' 
            src={grp2} 
            alt="Image Description"
            
        />
    </div>
      </div>
      
      <div className='mt-[70px] ml-[30px]'>
        <p 
          className='font-outfit font-bold text-[48px]'
          style={{ color: "#15155F" }}
        >
          Acupuncture
        </p>
        <p 
          className='font-outfit font-medium text-[32px] mt-[32px] mr-[650px] xsm:mr-[20px] sm:mr-[100px] md:mr-[150px] lg:mr-[650px]
          lg:text-[32px] md:text-[32px] sm:text-[32px] xsm:text-[28px]'
          style={{ color: "#15155F" }}
        >
          <span style={{ color: "#00B579" }}>Experience </span>
          the ancient art of healing for a renewed sense of  <span style={{ color: "#2AD4E6" }}> balance </span>
          and 
          <span style={{ color: "#00A4EE" }}> well-being</span> 
        </p>
        <p 
          className='mt-[30px] font-outfit font-medium text-[32px] mr-[380px] xsm:mr-[10px] sm:mr-[80px] md:mr-[60px] lg:mr-[380px]
          lg:text-[32px] md:text-[32px] sm:text-[32px] xsm:text-[28px]'
          style={{ color: "#15155F" }}
        >
          We understand that modern life is filled with stress, fast-paced routines, office deadlines, and countless other factors that leave you feeling overwhelmed and out of balance.
        </p>
      </div>
      <div 
        className='ml-[30px] flex mt-[50px] w-[700px] h-[70px] rounded-[30px]
        xsm:w-[330px]
        sm:w-[600px]
        lg:w-[700px]
        md:w-[700px]'
        style={{ backgroundColor: "#5233ED" }}
      >
        <p 
          className='ml-[30px] mt-[10px] font-outfit font-medium text-[32px] text-white
           xsm:text-[18px] md:text-[32px sm:text-[32px] lg:text-[32px]'
        >
          Three ways Acupuncture will impact 
        </p>
      </div>
      
      <img 
        src={line17}
        className='ml-[50px] mt-[-2px]' 
      />
      <img 
        src={line21}
        className='ml-[45px] mt-[-190px] flex'
      />
      
      <motion.div 
      initial = {{x:"-100%", opacity: 0}}
      viewport={{once: true}}
      whileInView={{x: 0, opacity:1, transition: {staggerChildren: true, delayChildren: 0.2, duration: 0.4, type: 'spring', damping: 12, stiffness:100}}}
        className='ml-[110px] mt-[-30px] w-[452px] h-[61px] rounded-[30px] brder border-black border-[3px]
        xsm:w-[270px] sm:w-[452px] md:w-[452px] lg:w-[452px]'
      >
        <p 
          className='ml-[20px] mt-[4px] font-outfit font-semibold text-[28px]
           xsm:text-[18px] sm:text-[28px] md:text-[28px] lg:text-[28px]'
          style={{ color: "#232269" }}
        >
          Relieves Pain and Discomfort
        </p>
        <img 
          src={line23}
          className='ml-[445px] mt-[-20px] hidden lg:block'
        />
        <div 
          className='ml-[507px] mt-[-35px] w-[500px] h-[59px]  rounded-[30px] hidden lg:block '
          style={{ backgroundColor: "#755CF1" }}
        >
          <p 
            className='text-white font-outfit font-semibold text-[28px] ml-[30px] pt-[5px]'
          >
            Effective for treating chronic pain
          </p>
        </div>
      </motion.div>
      
      <img 
        src={line21}
        className='ml-[45px] mt-[50px] flex'
      />
      
      <motion.div 
      initial = {{x:"-100%", opacity: 0}}
      viewport={{once: true}}
      whileInView={{x: 0, opacity:1, transition: {staggerChildren: true, delayChildren: 0.2, duration: 0.4, type: 'spring', damping: 12, stiffness:100, delay: 0.4}}}
        className='ml-[110px] mt-[-30px] w-[452px] h-[61px] rounded-[30px] brder border-black border-[3px]
        xsm:w-[270px] sm:w-[452px] md:w-[452px] lg:w-[452px]'
      >
        <p 
          className='ml-[20px] mt-[4px] font-outfit font-semibold text-[28px]
          xsm:text-[18px] sm:text-[28px] md:text-[28px] lg:text-[28px]'
          style={{ color: "#232269" }}
        >
          Reduces Stress and Anxiety
        </p>
        <img 
          src={line23}
          className='ml-[445px] mt-[-20px] hidden lg:block'
        />
        <div 
          className='ml-[507px] mt-[-35px] w-[800px] h-[59px] rounded-[30px] hidden lg:block'
          style={{ backgroundColor: "#755CF1" }}
        >
          <p 
            className='text-white font-outfit font-semibold text-[28px] ml-[30px] pt-[5px]'
          >
            Promotes relaxation and helps manage stress and anxiety
          </p>
        </div>
      </motion.div>
      
      <img 
        src={line21}
        className='ml-[45px] mt-[55px] flex'
      />
      
      <motion.div 
      initial = {{x:"-100%", opacity: 0}}
      viewport={{once: true}}
      whileInView={{x: 0, opacity:1, transition: {staggerChildren: true, delayChildren: 0.2, duration: 0.4, type: 'spring', damping: 12, stiffness:100, delay: 0.8}}}
        className='ml-[110px] mt-[-30px] w-[452px] h-[61px] rounded-[30px] brder border-black border-[3px]
        xsm:w-[270px] sm:w-[452px] md:w-[452px] lg:w-[452px]'
      >
        <p 
          className='ml-[20px] mt-[4px] font-outfit font-semibold text-[28px]
          xsm:text-[18px] sm:text-[28px] md:text-[28px] lg:text-[28px]'
          style={{ color: "#232269" }}
        >
          Boosts Energy and Vitality
        </p>
        <img 
          src={line23}
          className='ml-[445px] mt-[-20px] hidden lg:block'
        />
        <div 
          className='ml-[507px] mt-[-35px] w-[820px] h-[59px]  rounded-[30px] hidden lg:block'
          style={{ backgroundColor: "#755CF1" }}
        >
          <p 
            className='text-white font-outfit font-semibold text-[28px] ml-[30px] pt-[5px] hidden lg:block '
          >
            Enhances overall energy levels and supports immune function
          </p>
        </div>
      </motion.div>
      <div 
        className='ml-0 flex mt-[100px] h-auto' 
        style={{ backgroundColor: "#6D68D2" }}
      >
       <div 
        className='mx-auto my-8 sm:my-12 lg:my-16 max-w-full sm:max-w-lg lg:max-w-2xl rounded-[30px] p-4' 
        style={{ backgroundColor: "#B69CFF" }}
        
    >
        <img 
            className='w-full h-auto rounded-[30px]' 
            src={grp3} 
            alt="Image Description"
            
        />
    </div>
      </div>

    </main>
  );
}

export default About;