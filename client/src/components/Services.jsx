import { Button } from '@nextui-org/react';
import React from 'react';
import line1 from "../assets/Line 1.png"
import line2 from "../assets/Line 2.png"
import {motion} from "framer-motion"

const Services = () => {
  return (

    <main >
        <div className='ml-0 mt-[50px] w-auto flex flex-col ' style={{ backgroundColor: "#6D68D2" }}>
      <video controls className="mt-[100px] ml-[100px] w-auto mr-[100px] h-[500px] aspect-video rounded-lg border bg-black sm:h-[300px] md:h-[350px] lg:h-[500px] xl:h-[600px]"  />

      <div className='mt-[30px] text-white ml-[30px] w-[275px] h-[60px] gap-0 font-[outfit] text-[48px] font-semibold leading-[60.48px] text-justify'>
        <p>Our Services</p>
      </div>

      <div className='flex flex-row flex-wrap justify-center ml-[30px] mt-[50px] gap-[60px] mb-[100px]'>
        <div className='h-[700px] w-[420px] rounded-[30px] shadow-3xl transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none' style={{ backgroundColor: "#4B2ED8" }}>
          <p className='font-bold text-[32px] text-white text-center mt-[30px]'>Chiropractic</p>
          <p className='font-semiBold text-[24px] text-white mx-[30px] whitespace-pre-line text-justify mt-[40px]'>
            Chiropractic care is a treatment focusing on the spine and joints, using hands-on adjustments to relieve pain and improve movement. Chiropractors help with issues like back pain, neck pain, and headaches. They believe that proper alignment of the body aids in natural healing. However, the effectiveness of chiropractic care is sometimes debated.
          </p>
          <Button color="primary" className='w-[150px] h-[50px] text-[20px] ml-[120px] rounded-[30px]  mt-[50px]'>
            Read more...
          </Button>
        </div>

        <div className='h-[700px] w-[420px] rounded-[30px] shadow-2xl transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none' style={{ backgroundColor: "#4B2ED8" }}>
          <p className='font-bold text-[32px] text-white text-center mt-[30px]'>Neuropathy</p>
          <p className='font-semiBold text-[24px] text-white mx-[30px] whitespace-pre-line text-justify mt-[40px]'>
            Neuropathy is a condition where nerves are damaged, causing pain, tingling, or numbness, often in the hands and feet. It can result from diabetes, injuries, infections, or other health issues. Treatments aim to manage symptoms and may include medications, physical therapy, and lifestyle changes.
          </p>
          <Button color="primary" className='w-[150px] h-[50px] text-[20px] rounded-[30px] ml-[120px]  mt-[120px]'>
            Read more...
          </Button>
        </div>

        <div className='h-[700px] w-[420px] rounded-[30px] shadow-2xl transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none' style={{ backgroundColor: "#4B2ED8" }}>
          <p className='font-bold text-[32px] text-white text-center mt-[30px]'>Acupuncture</p>
          <p className='font-semiBold text-[24px] text-white mx-[30px] whitespace-pre-line text-justify mt-[40px]'>
            Acupuncture is a traditional Chinese medicine practice where thin needles are inserted into specific points on the body. It's used to alleviate pain, reduce stress, and treat various health conditions by balancing the body's energy flow, or "qi." Treatments may help with issues like headaches, chronic pain, and anxiety. Scientific opinions on its benefits are mixed.
          </p>
          <Button color="primary" className='w-[150px] h-[50px] text-[20px] rounded-[30px] ml-[120px] mt-[20px]'>
            Read more...
          </Button>
        </div>
      </div>
      </div>

      {/* chiropractor session component */}
        <div className='mt-[50px] ml-[30px]  flex flex-col'>
            <p className='lg:text-[48px] md:text-[48px] sm:text-[48px] xl:text-[54px] 2xl:text-[60px] text-[48px] font-semibold font-outfit' style={{color:"#15155F"}}> Chiropractic Session</p>
            <div className='h-[70px]   w-[970px] rounded-[30px] mt-[20px]'
            style={{backgroundColor:"#755CF1"}}>
                <p className='ml-[40px] mt-[10px] text-white text-[28px] font-semibold font-outfit
                              '>
                   Here’s what you will experience after 
                    <span style={{color:"#54FFC6"}}> One Chiropractic </span> 
                      Session with us</p>
                      <div className='ml-[40px] mt-[18px]'>
                          <img src={line1} alt=""/>
                      </div>
                      <div className='mt-[-600px] ml-[35px]'>
                          <img src={line2} alt=""/>
                      </div>
                      <motion.div 
                      initial = {{x: "-100%", opacity: 0}}
                      viewport={{once: true}}
                      whileInView={{x:0,opacity: 1, transition: {duration:0.5, type: 'spring', stiffness: 100, damping:15}}}
                      className='w-[350px] h-[50px]  border-black border-[3px] rounded-[30px] ml-[130px] mt-[-30px]' >
                              <p className='ml-[40px] mt-[2px] font-outfit font-semibold text-[28px] justify-center'
                                style={{ color: "#232269" }}>
                                Improved Confidence</p>
                          </motion.div> 
                  </div>
                  <div className='mt-[120px] ml-[36px]'>
                  <img src={line2} alt=""/>
                  </div>
                  <motion.div 
                  initial = {{x: "-100%", opacity: 0}}
                  viewport={{once: true}}
                  whileInView={{x:0,opacity: 1, transition: {duration:0.5, type: 'spring', stiffness: 100, damping:15, delay: 0.2}}}
                  className='w-[450px] h-[50px] border-[3px] border-black rounded-[30px] ml-[130px] mt-[-30px]' >
                  <p className='ml-[40px] mt-[2px] font-outfit font-semibold text-[28px] justify-center'
                  style={{ color: "#232269" }}>
                    80% relief from Sciatica Pain</p>
                  </motion.div> 
                  <div className='mt-[50px] ml-[36px]'>
                  <img src={line2} alt=""/>
                  </div>
                  <motion.div 
                  initial = {{x: "-100%", opacity: 0}}
                  viewport={{once: true}}
                  whileInView={{x:0,opacity: 1, transition: {duration:0.5, type: 'spring', stiffness: 100, damping:15, delay: 0.4}}}
                  className='w-[500px] h-[50px] border-[3px] border-black rounded-[30px] ml-[130px] mt-[-30px]' >
                  <p className='ml-[40px] mt-[2px] font-outfit font-semibold text-[28px] justify-center'
                  style={{ color: "#232269" }}>
                    Your Energy will literally double</p>
                  </motion.div> 
                  <div className='mt-[50px] ml-[36px]'>
                  <img src={line2} alt=""/>
                  </div>
                  <motion.div 
                  initial = {{x: "-100%", opacity: 0}}
                  viewport={{once: true}}
                  whileInView={{x:0,opacity: 1, transition: {duration:0.5, type: 'spring', stiffness: 100, damping:15, delay: 0.6}}}
                  className='w-[500px] h-[50px] border-[3px] border-black rounded-[30px] ml-[130px] mt-[-30px]' >
                  <p className='ml-[40px] mt-[2px] font-outfit font-semibold text-[28px] justify-center'
                  style={{ color: "#232269" }}>
                    Posture Correction, yes Instantly!!</p>
                  </motion.div> 
                  <div className='mt-[50px] ml-[36px]'>
                  <img src={line2} alt=""/>
                  </div>
                  <motion.div 
                  initial = {{x: "-100%", opacity: 0}}
                  viewport={{once: true}}
                  whileInView={{x:0,opacity: 1, transition: {duration:0.5, type: 'spring', stiffness: 100, damping:15, delay: 0.8}}}
                  className='w-[500px] h-[50px] border-[3px] border-black rounded-[30px] ml-[130px] mt-[-30px]' >
                  <p className='ml-[40px] mt-[2px] font-outfit font-semibold text-[28px] justify-center'
                  style={{ color: "#232269" }}>
                    Deep state of calm and relaxation</p>
                  </motion.div> 
                  <div className='mt-[50px] ml-[36px]'>
                  <img src={line2} alt=""/>
                  </div>
                  <motion.div 
                  initial = {{x: "-100%", opacity: 0}}
                  viewport={{once: true}}
                  whileInView={{x:0,opacity: 1, transition: {duration:0.5, type: 'spring', stiffness: 100, damping:15, delay: 1}}}
                  className='w-[630px] h-[50px] border-[3px] border-black rounded-[30px] ml-[130px] mt-[-30px]' >
                  <p className='ml-[40px] mt-[2px] font-outfit font-semibold text-[28px]  justify-center'
                  style={{ color: "#232269" }}>
                    Your Migraine will disappear... Guaranteed!</p>
                  </motion.div> 
                  <div className='mt-[60px] ml-[36px]'>
                  <img src={line2} alt=""/>
                  </div>
                  <motion.div 
                  initial = {{x: "-100%", opacity: 0}}
                  viewport={{once: true}}
                  whileInView={{x:0,opacity: 1, transition: {duration:0.5, type: 'spring', stiffness: 100, damping:15, delay: 1.2}}}
                  className='w-[770px] h-[50px] border-[3px] border-black rounded-[30px] ml-[130px] mt-[-30px]' >
                  <p className='ml-[40px] mt-[2px] font-outfit font-semibold text-[28px] justify-center'
                  style={{ color: "#232269" }}>
                    Improvement in Sleep Quality(You will thank us for this)</p>
                  </motion.div> 
                  <div className='mt-[71px] ml-[38px]'>
                  <img src={line2} alt=""/>
                  </div>
                  <motion.div 
                  initial = {{x: "-100%", opacity:0}}
                  viewport={{once: true}}
                  whileInView={{x:0,opacity: 1, opacity:1, transition: {duration:0.5, type: 'spring', stiffness: 100, damping:15, delay: 1.4}}}
                  className='w-[870px] h-[50px] border-[3px] border-black rounded-[30px] ml-[130px] mt-[-30px]' >
                  <p className='ml-[40px] mt-[2px] font-outfit font-semibold text-[28px] justify-center'
                  style={{ color: "#232269" }}>
                    Instant relief from Chronic Back, Neck, Knee and Shoulder Pain</p>
                  </motion.div>  
                </div>
          <div className='ml-[30px] mt-[30px]  flex flex-col'>
            <p className='font-semibold text-[28px] font-outfit text-justify mr-[170px] sm:mr-[30px] md:mr-[60px] lg:mr-[170px] xl:mr-[180px] 2xl:mr-[190px] '
            style={{color:"#2D1C82"}}>
            Not exaggerating, your bad posture is doing more harm than you know, poor blood circulation will mess up your hormonal balance and will cause dysfunction of your crucial hormones like dopamine, serotonin and testosterone. With one session you will restart your hormonal engine and meet the new you.
            </p>
        </div>
    </main>
  );
};

export default Services;