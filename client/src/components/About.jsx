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
        className='ml-0 flex mt-[100px] h-[1000px]
        sm:h-[800px]
        lg:h-[1000px]' 
        style={{ backgroundColor: "#6D68D2" }}
      >
        <div 
          className='h-[750px] w-[1000px] ml-[230px] mr-[100px] rounded-[30px] mt-[100px]
              sm:w-[550px] sm:h-[500px] sm:ml-[100px] sm:mr-[40px]
              md:w-[650] md:h-[550px] md:ml-[140px] md:mr-[60px]
              lg:h-[750px] lg:w-[1000px] lg:ml-[230px] lg:mr-[100px]'
          style={{ backgroundColor: "#B69CFF" }}
        >
          <img 
            src={grp1}
            className='ml-[50px] mt-[50px] mb-[40px] rounded-sm
            sm:ml-[30px] sm:mt-[70px] sm:w-[490px]
            md:ml-[40px] md:mt-[60px] md:w-[500px] 
            lg:ml-[50px] lg:mt-[50px] lg:mb-[40px] lg:w-[900px]' 
          />
          <p 
            className='text-white font-outfit font-extrabold text-[60px] mt-[-330px] ml-[80px] mr-[200px]
            sm:text-[40px] sm:mr-[100px]
            lg:text-[60px] lg:mt-[-330px] lg:ml-[80px] lg:mr-[200px]'
          >
             Ever wondered why your back and neck pain isn’t going away?? 
          </p>
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
          className='font-outfit font-medium text-[32px] mt-[32px] mr-[650px] xsm:mr-[20px] sm:mr-[100px] md:mr-[150px] lg:mr-[650px]'
          style={{ color: "#15155F" }}
        >
          <span style={{ color: "#0095D9" }}>Experience </span>
          a new <span style={{ color: "#755CF1" }}>stress free </span>
          calm that you haven't experienced in a long time.
        </p>
        <p 
          className='mt-[40px] font-outfit font-medium text-[32px] mr-[380px] xsm:mr-[20px] sm:mr-[80px] md:mr-[120px] lg:mr-[380px]'
          style={{ color: "#15155F" }}
        >
          We understand your life is filled with stress, the fast paced life, office deadlines and a 100 other things that are leaving you completely disturbed.
        </p>
      </div>
      
      <div 
        className='ml-[30px] flex mt-[50px] w-[700px] h-[70px] rounded-[30px] items-center justify-center
            sm:w-[640px]
            lg:w-[700px]'
        style={{ backgroundColor: "#5233ED" }}
      >
        <p 
          className='font-outfit font-medium text-[32px] text-white   '
          
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
        className='ml-[110px] mt-[-30px] w-[452px] h-[61px] rounded-[30px] border-black border-[3px]'
      >
        <p 
          className='ml-[20px] mt-[4px] font-outfit font-semibold text-[28px]'
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
        className='ml-[110px] mt-[-30px] w-[452px] h-[61px] rounded-[30px] brder border-black border-[3px]'
      >
        <p
          className='ml-[20px] mt-[4px] font-outfit font-semibold text-[28px]'
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
        className='ml-[110px] mt-[-30px] w-[452px] h-[61px] rounded-[30px] brder border-black border-[3px]'
      >
        <p 
          className='ml-[20px] mt-[4px] font-outfit font-semibold text-[28px]'
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
        className='ml-0 flex mt-[100px] h-[1000px]
        sm:h-[800px]
        lg:h-[1000px]' 
        style={{ backgroundColor: "#6D68D2" }}
      >
        <div 
          className='h-[750px] w-[1000px] ml-[230px] mr-[100px] rounded-[30px] mt-[100px]
              sm:w-[550px] sm:h-[500px] sm:ml-[100px] sm:mr-[40px]
              md:w-[650] md:h-[550px] md:ml-[140px] md:mr-[60px]
              lg:h-[750px] lg:w-[1000px] lg:ml-[230px] lg:mr-[100px]'
          style={{ backgroundColor: "#B69CFF" }}
        >
          <img 
            src={grp2}
            className='ml-[50px] mt-[50px] mb-[40px] rounded-sm
            sm:ml-[30px] sm:mt-[70px] sm:w-[490px]
            md:ml-[40px] md:mt-[60px] md:w-[500px] 
            lg:ml-[50px] lg:mt-[50px] lg:mb-[40px] lg:w-[900px]' 
          />
          <p 
            className='text-white font-outfit font-extrabold text-[60px] mt-[-330px] ml-[80px] mr-[200px]
            sm:text-[40px] sm:mr-[100px]
            lg:text-[60px] lg:mt-[-330px] lg:ml-[80px] lg:mr-[200px]'
          >
            Always Stressed?? <br />
            Try these quick tips out
          </p>
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
          className='font-outfit font-medium text-[32px] mt-[32px] mr-[650px] xsm:mr-[20px] sm:mr-[100px] md:mr-[150px] lg:mr-[650px]'
          style={{ color: "#15155F" }}
        >
          <span style={{ color: "#00B579" }}>Experience </span>
          the ancient art of healing for a renewed sense of  <span style={{ color: "#2AD4E6" }}> balance </span>
          and 
          <span style={{ color: "#00A4EE" }}> well-being</span> 
        </p>
        <p 
          className='mt-[30px] font-outfit font-medium text-[32px] mr-[380px] xsm:mr-[10px] sm:mr-[80px] md:mr-[60px] lg:mr-[380px]'
          style={{ color: "#15155F" }}
        >
          We understand that modern life is filled with stress, fast-paced routines, office deadlines, and countless other factors that leave you feeling overwhelmed and out of balance.
        </p>
      </div>
      <div 
        className='ml-[30px] flex mt-[50px] w-[700px] h-[70px] rounded-[30px]
        sm:w-[600px]
        lg:w-[700px]
        md:w-[700px]'
        style={{ backgroundColor: "#5233ED" }}
      >
        <p 
          className='ml-[30px] mt-[10px] font-outfit font-medium text-[32px] text-white'
        >
          Three ways Acupuncture will impact your life
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
        className='ml-[110px] mt-[-30px] w-[452px] h-[61px] rounded-[30px] brder border-black border-[3px]'
      >
        <p 
          className='ml-[20px] mt-[4px] font-outfit font-semibold text-[28px]'
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
        className='ml-[110px] mt-[-30px] w-[452px] h-[61px] rounded-[30px] brder border-black border-[3px]'
      >
        <p 
          className='ml-[20px] mt-[4px] font-outfit font-semibold text-[28px]'
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
        className='ml-[110px] mt-[-30px] w-[452px] h-[61px] rounded-[30px] brder border-black border-[3px]'
      >
        <p 
          className='ml-[20px] mt-[4px] font-outfit font-semibold text-[28px]'
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
        className='ml-0 flex mt-[100px] h-[1000px]
        sm:h-[800px]
        lg:h-[1000px]' 
        style={{ backgroundColor: "#6D68D2" }}
      >
        <div 
          className='h-[750px] w-[1000px] ml-[230px] mr-[100px] rounded-[30px] mt-[100px]
              sm:w-[550px] sm:h-[500px] sm:ml-[100px] sm:mr-[40px]
              md:w-[650] md:h-[550px] md:ml-[140px] md:mr-[60px]
              lg:h-[750px] lg:w-[1000px] lg:ml-[230px] lg:mr-[100px]'
          style={{ backgroundColor: "#B69CFF" }}
        >
          <img 
            src={grp3}
            className='ml-[50px] mt-[50px] mb-[40px] rounded-sm
            sm:ml-[30px] sm:mt-[70px] sm:w-[490px]
            md:ml-[40px] md:mt-[60px] md:w-[500px] 
            lg:ml-[50px] lg:mt-[50px] lg:mb-[40px] lg:w-[900px]' 
          />
          <p 
            className='text-white font-outfit font-extrabold text-[60px] mt-[-330px] ml-[80px] mr-[200px]
            sm:text-[40px] sm:mr-[100px]
            lg:text-[60px] lg:mt-[-330px] lg:ml-[80px] lg:mr-[200px]'
          >
            Here’s how Acupuncture can help you become stress free!
          </p>
        </div>
      </div>

    </main>
  );
}

export default About;